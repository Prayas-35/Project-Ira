import Image from "next/image";
import {
  MessageCircle,
  TrendingUp,
  Zap,
  Shield,
  BarChart3,
  Bot,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Gradient Blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-3000"></div>

      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute top-80 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-bounce delay-1500"></div>
      <div className="absolute top-96 left-1/2 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-3000"></div>

      {/* Navigation */}
      <nav className="relative flex items-center justify-between p-6 lg:px-8 z-10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Project Ira</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#features"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-300 hover:text-white transition-colors"
          >
            How it Works
          </a>
          <a
            href="#pricing"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Pricing
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-20 lg:py-32 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Token Analysis
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Snipe the Next
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                100x Token
              </span>
              <br />
              Before Anyone Else
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect your Telegram, let our AI analyze group sentiment, and
              automatically invest in promising web3 tokens before they moon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg shadow-blue-500/25">
                <MessageCircle className="w-5 h-5" />
                <span>Connect Telegram</span>
              </button>
              <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 backdrop-blur-sm">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Hero Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-20 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1500"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-6 lg:px-8 py-20 z-10">
        {/* Section Background Blurs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Project Ira?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our AI-powered platform gives you the edge in the competitive
              world of web3 token trading.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Telegram Integration
              </h3>
              <p className="text-gray-300">
                Seamlessly connect your Telegram account and monitor your
                favorite groups for token discussions.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                AI Sentiment Analysis
              </h3>
              <p className="text-gray-300">
                Advanced AI analyzes chat sentiment to identify trending tokens
                before they explode.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Auto Investment
              </h3>
              <p className="text-gray-300">
                Set your parameters and let our AI automatically invest in
                promising tokens for maximum gains.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Real-time Monitoring
              </h3>
              <p className="text-gray-300">
                Track your investments and get instant notifications when tokens
                start trending.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Risk Management
              </h3>
              <p className="text-gray-300">
                Built-in risk controls and stop-loss mechanisms to protect your
                investments.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Analytics Dashboard
              </h3>
              <p className="text-gray-300">
                Comprehensive analytics and performance tracking to optimize
                your strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative px-6 lg:px-8 py-20 z-10">
        {/* Section Background Blurs */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get started in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg shadow-blue-500/25">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Connect Telegram
              </h3>
              <p className="text-gray-300">
                Securely connect your Telegram account and select the groups you
                want to monitor.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg shadow-purple-500/25">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                AI Analysis
              </h3>
              <p className="text-gray-300">
                Our AI continuously analyzes chat sentiment and identifies
                trending tokens in real-time.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg shadow-pink-500/25">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Auto Invest
              </h3>
              <p className="text-gray-300">
                Set your investment parameters and let our AI automatically
                invest in promising tokens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 lg:px-8 py-20 z-10">
        {/* CTA Background Blurs */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12 backdrop-blur-sm relative">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Snipe Trading?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of traders who are already using AI to find the
              next 100x token. Connect your Telegram and start your journey
              today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg shadow-blue-500/25">
                <MessageCircle className="w-5 h-5" />
                <span>Connect Telegram Now</span>
              </button>
              <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 backdrop-blur-sm">
                Learn More
              </button>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              🔒 Secure • ⚡ Fast • 🤖 AI-Powered
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 lg:px-8 py-12 border-t border-white/10 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Project Ira</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
