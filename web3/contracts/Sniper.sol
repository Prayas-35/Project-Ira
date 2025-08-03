// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

interface IOneInchRouter {
    function swap(
        address executor,
        address desc,
        bytes calldata data
    ) external payable returns (uint256 returnAmount);
}

interface IOneInchAggregator {
    function swap(
        address executor,
        address desc,
        bytes calldata data
    ) external payable returns (uint256 returnAmount);
}

contract Sniper is Ownable, ReentrancyGuard, Pausable {
    IOneInchRouter public oneInchRouter;
    IOneInchAggregator public oneInchAggregator;

    address public constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address public constant USDC = 0xA0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8;
    address public constant USDT = 0xdAC17F958D2ee523a2206206994597C13D831ec7;
    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;

    address public constant ONEINCH_ROUTER =
        0x1111111254EEB25477B68fb85Ed929f73A960582;
    address public constant ONEINCH_AGGREGATOR =
        0x1111111254EEB25477B68fb85Ed929f73A960583;

    address public constant UNISWAP_V2_ROUTER =
        0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
    address public constant UNISWAP_V3_ROUTER =
        0xE592427A0AEce92De3Edee1F18E0157C05861564;
    address public constant SUSHISWAP_ROUTER =
        0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F;

    address public constant PANCAKESWAP_ROUTER =
        0x10ED43C718714eb63d5aA57B78B54704E256024E;
    address public constant BALANCER_VAULT =
        0xBA12222222228d8Ba445958a75a0704d566BF2C8;

    mapping(address => bool) public whitelistedTokens;
    mapping(address => uint256) public userBalances;
    mapping(address => uint256) public snipeCount;

    uint256 public minSnipeAmount = 0.01 ether;
    uint256 public maxSlippage = 500;
    uint256 public gasLimit = 300000;
    uint256 public feePercentage = 50;

    event SnipeExecuted(
        address indexed user,
        address indexed tokenIn,
        address indexed tokenOut,
        uint256 amountIn,
        uint256 amountOut,
        uint256 timestamp
    );

    event TokenWhitelisted(address indexed token, bool status);
    event SettingsUpdated(
        uint256 minAmount,
        uint256 maxSlippage,
        uint256 gasLimit,
        uint256 feePercentage
    );

    constructor() {
        oneInchRouter = IOneInchRouter(ONEINCH_ROUTER);
        oneInchAggregator = IOneInchAggregator(ONEINCH_AGGREGATOR);

        whitelistedTokens[WETH] = true;
        whitelistedTokens[USDC] = true;
        whitelistedTokens[USDT] = true;
        whitelistedTokens[DAI] = true;
    }

    modifier onlyWhitelistedToken(address token) {
        require(whitelistedTokens[token], "Token not whitelisted");
        _;
    }

    function snipeToken(
        address tokenIn,
        address tokenOut,
        uint256 amountIn,
        bytes calldata swapData
    )
        external
        payable
        nonReentrant
        whenNotPaused
        onlyWhitelistedToken(tokenIn)
    {
        require(amountIn >= minSnipeAmount, "Amount too low");
        require(msg.value >= amountIn, "Insufficient ETH");

        uint256 balanceBefore = IERC20(tokenOut).balanceOf(address(this));

        (bool success, bytes memory result) = address(oneInchRouter).call{
            value: msg.value
        }(
            abi.encodeWithSelector(
                IOneInchRouter.swap.selector,
                address(this),
                tokenIn,
                swapData
            )
        );

        require(success, "Swap failed");

        uint256 balanceAfter = IERC20(tokenOut).balanceOf(address(this));
        uint256 amountOut = balanceAfter - balanceBefore;

        require(amountOut > 0, "No tokens received");

        uint256 fee = (amountOut * feePercentage) / 10000;
        uint256 userAmount = amountOut - fee;

        IERC20(tokenOut).transfer(msg.sender, userAmount);

        snipeCount[msg.sender]++;
        userBalances[msg.sender] += userAmount;

        emit SnipeExecuted(
            msg.sender,
            tokenIn,
            tokenOut,
            amountIn,
            amountOut,
            block.timestamp
        );
    }

    function snipeWithAggregator(
        address tokenIn,
        address tokenOut,
        uint256 amountIn,
        bytes calldata swapData
    )
        external
        payable
        nonReentrant
        whenNotPaused
        onlyWhitelistedToken(tokenIn)
    {
        require(amountIn >= minSnipeAmount, "Amount too low");
        require(msg.value >= amountIn, "Insufficient ETH");

        uint256 balanceBefore = IERC20(tokenOut).balanceOf(address(this));

        (bool success, bytes memory result) = address(oneInchAggregator).call{
            value: msg.value
        }(
            abi.encodeWithSelector(
                IOneInchAggregator.swap.selector,
                address(this),
                tokenIn,
                swapData
            )
        );

        require(success, "Aggregator swap failed");

        uint256 balanceAfter = IERC20(tokenOut).balanceOf(address(this));
        uint256 amountOut = balanceAfter - balanceBefore;

        require(amountOut > 0, "No tokens received");

        uint256 fee = (amountOut * feePercentage) / 10000;
        uint256 userAmount = amountOut - fee;

        IERC20(tokenOut).transfer(msg.sender, userAmount);

        snipeCount[msg.sender]++;
        userBalances[msg.sender] += userAmount;

        emit SnipeExecuted(
            msg.sender,
            tokenIn,
            tokenOut,
            amountIn,
            amountOut,
            block.timestamp
        );
    }

    function snipeWithCustomExecutor(
        address executor,
        address tokenIn,
        address tokenOut,
        uint256 amountIn,
        bytes calldata swapData
    )
        external
        payable
        nonReentrant
        whenNotPaused
        onlyWhitelistedToken(tokenIn)
    {
        require(amountIn >= minSnipeAmount, "Amount too low");
        require(msg.value >= amountIn, "Insufficient ETH");

        uint256 balanceBefore = IERC20(tokenOut).balanceOf(address(this));

        (bool success, bytes memory result) = executor.call{value: msg.value}(
            swapData
        );

        require(success, "Custom executor swap failed");

        uint256 balanceAfter = IERC20(tokenOut).balanceOf(address(this));
        uint256 amountOut = balanceAfter - balanceBefore;

        require(amountOut > 0, "No tokens received");

        uint256 fee = (amountOut * feePercentage) / 10000;
        uint256 userAmount = amountOut - fee;

        IERC20(tokenOut).transfer(msg.sender, userAmount);

        snipeCount[msg.sender]++;
        userBalances[msg.sender] += userAmount;

        emit SnipeExecuted(
            msg.sender,
            tokenIn,
            tokenOut,
            amountIn,
            amountOut,
            block.timestamp
        );
    }

    function batchSnipe(
        address[] calldata tokensIn,
        address[] calldata tokensOut,
        uint256[] calldata amountsIn,
        bytes[] calldata swapDataArray
    ) external payable nonReentrant whenNotPaused {
        require(
            tokensIn.length == tokensOut.length &&
                tokensOut.length == amountsIn.length &&
                amountsIn.length == swapDataArray.length,
            "Array lengths mismatch"
        );

        uint256 totalAmount = 0;
        for (uint256 i = 0; i < amountsIn.length; i++) {
            totalAmount += amountsIn[i];
            require(whitelistedTokens[tokensIn[i]], "Token not whitelisted");
            require(amountsIn[i] >= minSnipeAmount, "Amount too low");
        }

        require(msg.value >= totalAmount, "Insufficient ETH");

        for (uint256 i = 0; i < tokensIn.length; i++) {
            uint256 balanceBefore = IERC20(tokensOut[i]).balanceOf(
                address(this)
            );

            (bool success, ) = address(oneInchRouter).call{value: amountsIn[i]}(
                abi.encodeWithSelector(
                    IOneInchRouter.swap.selector,
                    address(this),
                    tokensIn[i],
                    swapDataArray[i]
                )
            );

            require(success, "Batch swap failed");

            uint256 balanceAfter = IERC20(tokensOut[i]).balanceOf(
                address(this)
            );
            uint256 amountOut = balanceAfter - balanceBefore;

            if (amountOut > 0) {
                uint256 fee = (amountOut * feePercentage) / 10000;
                uint256 userAmount = amountOut - fee;

                IERC20(tokensOut[i]).transfer(msg.sender, userAmount);
                userBalances[msg.sender] += userAmount;

                emit SnipeExecuted(
                    msg.sender,
                    tokensIn[i],
                    tokensOut[i],
                    amountsIn[i],
                    amountOut,
                    block.timestamp
                );
            }
        }

        snipeCount[msg.sender] += tokensIn.length;
    }

    function emergencyWithdraw(address token) external onlyOwner {
        uint256 balance = IERC20(token).balanceOf(address(this));
        IERC20(token).transfer(owner(), balance);
    }

    function withdrawFees(address token) external onlyOwner {
        uint256 balance = IERC20(token).balanceOf(address(this));
        IERC20(token).transfer(owner(), balance);
    }

    function setWhitelistedToken(
        address token,
        bool status
    ) external onlyOwner {
        whitelistedTokens[token] = status;
        emit TokenWhitelisted(token, status);
    }

    function updateSettings(
        uint256 _minSnipeAmount,
        uint256 _maxSlippage,
        uint256 _gasLimit,
        uint256 _feePercentage
    ) external onlyOwner {
        minSnipeAmount = _minSnipeAmount;
        maxSlippage = _maxSlippage;
        gasLimit = _gasLimit;
        feePercentage = _feePercentage;

        emit SettingsUpdated(
            _minSnipeAmount,
            _maxSlippage,
            _gasLimit,
            _feePercentage
        );
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function getUserStats(
        address user
    ) external view returns (uint256 balance, uint256 snipes) {
        return (userBalances[user], snipeCount[user]);
    }

    function getContractBalance(address token) external view returns (uint256) {
        return IERC20(token).balanceOf(address(this));
    }

    receive() external payable {}

    fallback() external payable {}
}
