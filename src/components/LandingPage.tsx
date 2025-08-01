"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Wallet, Sparkles, Users, Award, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export function LandingPage() {
  const { connect, wallets } = useWallet();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A1E] via-[#1F1F3E] to-[#0A0A1E] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                GUI_ID
              </h1>
            </div>
            
            <h2 className={`text-4xl font-semibold text-white mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Welcome to GUI_ID
            </h2>
            
            <p className={`text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              The next-generation decentralized reputation system built on Aptos. 
              Build your tokenized reputation, stake tokens, earn XP, and unlock achievements in the Web3 ecosystem.
            </p>

            {/* Connect Wallet Button */}
            <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-wrap justify-center gap-4">
                {wallets?.map((wallet) => (
                  <Button
                    key={wallet.name}
                    onClick={() => connect(wallet.name)}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-4 rounded-2xl border border-blue-500/20"
                  >
                    <Wallet className="h-6 w-6" />
                    Connect {wallet.name}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Connect your Aptos wallet to start building your reputation
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`grid md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Card className="border-0 shadow-2xl bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/20 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Earn XP
                </h3>
                <p className="text-gray-300 text-sm">
                  Build reputation through ecosystem participation
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/20 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Collect Badges
                </h3>
                <p className="text-gray-300 text-sm">
                  Unlock unique achievements and credentials
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/20 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Community
                </h3>
                <p className="text-gray-300 text-sm">
                  Tip users and build connections
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-orange-500/20 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Stake & Grow
                </h3>
                <p className="text-gray-300 text-sm">
                  Stake tokens to increase your influence
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className={`bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">1,234</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">5,678</div>
                <div className="text-sm text-gray-400">Badges Minted</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">12.5K</div>
                <div className="text-sm text-gray-400">GUI Staked</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">890</div>
                <div className="text-sm text-gray-400">Tips Sent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}