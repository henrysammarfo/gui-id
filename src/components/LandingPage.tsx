"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Wallet, Sparkles, Users, Award, TrendingUp, Zap, ArrowRight, Star, Target } from "lucide-react";
import { useEffect, useState } from "react";

export function LandingPage() {
  const { connect, wallets } = useWallet();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: "Earn XP",
      description: "Build reputation through ecosystem participation and achievements",
      color: "from-emerald-400 to-teal-600",
      hoverColor: "group-hover:text-emerald-400"
    },
    {
      icon: Award,
      title: "Collect Badges",
      description: "Unlock unique achievements and showcase your credentials",
      color: "from-purple-400 to-pink-600",
      hoverColor: "group-hover:text-purple-400"
    },
    {
      icon: Users,
      title: "Community",
      description: "Tip users and build meaningful connections in Web3",
      color: "from-blue-400 to-cyan-600",
      hoverColor: "group-hover:text-blue-400"
    },
    {
      icon: TrendingUp,
      title: "Stake & Grow",
      description: "Stake tokens to increase your influence and earn rewards",
      color: "from-orange-400 to-red-600",
      hoverColor: "group-hover:text-orange-400"
    }
  ];

  const stats = [
    { value: "1,234", label: "Active Users", color: "text-blue-400" },
    { value: "5,678", label: "Badges Minted", color: "text-purple-400" },
    { value: "12.5K", label: "GUI Staked", color: "text-emerald-400" },
    { value: "890", label: "Tips Sent", color: "text-orange-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-float delay-300"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400/40 rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-indigo-400/35 rounded-full animate-float delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with Logo */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-75 animate-pulse"></div>
                <div className="relative p-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Shield className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4 tracking-tight">
              GUI_ID
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-balance">
              Your Tokenized Reputation
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                On-Chain
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
              Build, stake, and grow your decentralized reputation. Earn XP, collect badges, 
              and participate in the future of Web3 identity powered by Aptos blockchain.
            </p>

            {/* Connect Wallet Button */}
            <div className="mb-16">
              <div className="flex flex-wrap justify-center gap-4">
                {wallets?.filter(wallet => !wallet.name.toLowerCase().includes('google') && !wallet.name.toLowerCase().includes('apple')).map((wallet) => (
                  <Button
                    key={wallet.name}
                    onClick={() => connect(wallet.name)}
                    size="lg"
                    className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105 rounded-2xl border-0 overflow-hidden btn-hover animate-glow"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center gap-3">
                      <Wallet className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                      Connect Wallet
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Button>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-6 font-medium">
                🔒 Secure wallet connection • No personal data required
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group border-0 shadow-2xl bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105 cursor-pointer card-hover glow-border"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative`}>
                    {hoveredFeature === index && (
                      <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse"></div>
                    )}
                    <feature.icon className="h-8 w-8 text-white relative z-10" />
                  </div>
                  <h3 className={`text-xl font-bold text-white mb-3 ${feature.hoverColor} transition-colors duration-300`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className={`glass rounded-3xl p-8 shadow-2xl border border-white/10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Platform Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`text-4xl font-black text-white ${stat.color} transition-all duration-300 group-hover:scale-110 mb-2`}>
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
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Your Reputation?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of users already building their on-chain identity
              </p>
              <Button 
                onClick={() => wallets?.[0] && connect(wallets[0].name)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 btn-hover"
              >
                Get Started
                <Zap className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
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

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Staking</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Badges</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Leaderboard</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <p className="text-gray-400 text-sm font-medium">
                    Built with <span className="text-purple-400 font-bold">GUI_INU</span> ⚡
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">Powered by Aptos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-400">Decentralized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}