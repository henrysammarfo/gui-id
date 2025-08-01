"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Wallet, Sparkles, Users, Award, TrendingUp, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function LandingPage() {
  const { connect, wallets } = useWallet();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-indigo-400/35 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-8xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-2 tracking-tight">
              GUI_ID
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Hero Section */}
          <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Your Tokenized Reputation
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                On-Chain
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Build, stake, and grow your decentralized reputation. Earn XP, collect badges, 
              and participate in the future of Web3 identity powered by Aptos blockchain.
            </p>

            {/* Connect Wallet Button */}
            <div className="mb-16">
              <div className="flex flex-wrap justify-center gap-4">
                {wallets?.map((wallet) => (
                  <Button
                    key={wallet.name}
                    onClick={() => connect(wallet.name)}
                    size="lg"
                    className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white px-16 py-6 text-xl font-bold shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105 rounded-2xl border-0 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Wallet className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    Connect {wallet.name}
                    <Zap className="h-5 w-5 ml-3 group-hover:scale-125 transition-transform duration-300" />
                  </Button>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-6 font-medium">
                🔒 Secure wallet connection • No personal data required
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`grid md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Card className="group border-0 shadow-2xl bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-green-500/20 cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                  Earn XP
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Build reputation through ecosystem participation and achievements
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-2xl bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-purple-500/20 cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  Collect Badges
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Unlock unique achievements and showcase your credentials
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-2xl bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-blue-500/20 cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  Community
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Tip users and build meaningful connections in Web3
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-2xl bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-orange-500/20 cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  Stake & Grow
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Stake tokens to increase your influence and earn rewards
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className={`bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-bold text-white mb-8">Platform Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black text-white group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110">1,234</div>
                <div className="text-sm text-gray-400 font-medium mt-2">Active Users</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black text-white group-hover:text-purple-400 transition-all duration-300 group-hover:scale-110">5,678</div>
                <div className="text-sm text-gray-400 font-medium mt-2">Badges Minted</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black text-white group-hover:text-green-400 transition-all duration-300 group-hover:scale-110">12.5K</div>
                <div className="text-sm text-gray-400 font-medium mt-2">GUI Staked</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black text-white group-hover:text-orange-400 transition-all duration-300 group-hover:scale-110">890</div>
                <div className="text-sm text-gray-400 font-medium mt-2">Tips Sent</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-gray-400 text-sm font-medium">
          Built with <span className="text-purple-400 font-bold">GUI_INU</span> ⚡
        </p>
      </div>
    </div>
  );
}