"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Sparkles, Users, Award, TrendingUp, ArrowRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

export function LandingPage() {
  const { connect, wallets } = useWallet();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: "Earn XP",
      description: "Build reputation through ecosystem participation and achievements",
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      icon: Award,
      title: "Collect Badges",
      description: "Unlock unique achievements and showcase your credentials",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Users,
      title: "Community",
      description: "Tip users and build meaningful connections in Web3",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: TrendingUp,
      title: "Stake & Grow",
      description: "Stake tokens to increase your influence and earn rewards",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  const stats = [
    { value: "1,234", label: "Active Users", color: "text-blue-400" },
    { value: "5,678", label: "Badges Minted", color: "text-purple-400" },
    { value: "12.5K", label: "GUI Staked", color: "text-emerald-400" },
    { value: "890", label: "Tips Sent", color: "text-orange-400" }
  ];

  // Filter out Google and Apple wallets
  const filteredWallets = wallets?.filter(wallet => 
    !wallet.name.toLowerCase().includes('google') && 
    !wallet.name.toLowerCase().includes('apple')
  ) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Logo */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-75 animate-pulse"></div>
                <div className="relative p-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl">
                  <Shield className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 tracking-tight">
              GUI_ID
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Your Tokenized Reputation
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                On-Chain
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Build, stake, and grow your decentralized reputation. Earn XP, collect badges, 
              and participate in the future of Web3 identity powered by Aptos blockchain.
            </p>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400 font-medium">
                🔒 Secure wallet connection • No personal data required
              </span>
            </div>

            {/* Connect Wallet Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {filteredWallets.map((wallet) => (
                <Button
                  key={wallet.name}
                  onClick={() => connect(wallet.name)}
                  size="lg"
                  className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105 rounded-xl border-0 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center gap-3">
                    <img 
                      src={wallet.icon} 
                      alt={wallet.name} 
                      className="h-6 w-6" 
                    />
                    Connect {wallet.name}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group border-slate-700/50 bg-slate-800/50 backdrop-blur-xl hover:bg-slate-800/70 transition-all duration-500 transform hover:scale-105 cursor-pointer shadow-xl hover:shadow-2xl"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500`}>
                    <feature.icon className={`h-7 w-7 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Platform Statistics */}
          <div className={`bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-slate-700/50 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Platform Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`text-3xl font-black ${stat.color} transition-all duration-300 group-hover:scale-110 mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 max-w-2xl mx-auto border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Your Reputation?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of users already building their on-chain identity
              </p>
              {filteredWallets.length > 0 && (
                <Button 
                  onClick={() => connect(filteredWallets[0].name)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <Star className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Brand Section */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-white">GUI_ID</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  The future of decentralized reputation systems. Build your on-chain identity 
                  and participate in the Web3 ecosystem with confidence.
                </p>
              </div>

              {/* Platform Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Staking</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Badges</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Badges</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-slate-700/50 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <p className="text-gray-400 text-sm font-medium mb-4 md:mb-0">
                  Built with <span className="text-purple-400 font-bold">GUI_INU</span> ⚡
                </p>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-gray-400">Powered by Aptos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}