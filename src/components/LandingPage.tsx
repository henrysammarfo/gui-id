"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Wallet, Sparkles, Users, Award } from "lucide-react";

export function LandingPage() {
  const { connect, wallets } = useWallet();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-blue-600 rounded-2xl shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                GUI_ID
              </h1>
            </div>
            
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Welcome to GUI_ID
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              The next-generation decentralized reputation system built on Aptos. 
              Stake tokens, earn XP, mint badges, and build your on-chain identity.
            </p>

            {/* Connect Wallet Button */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-3">
                {wallets?.map((wallet) => (
                  <Button
                    key={wallet.name}
                    onClick={() => connect(wallet.name)}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-3"
                  >
                    <Wallet className="h-5 w-5" />
                    Connect {wallet.name}
                  </Button>
                ))}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
                Connect your Aptos wallet to get started
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Earn XP
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Build your reputation by participating in the ecosystem and earning experience points
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Collect Badges
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Unlock unique badges and achievements as you progress through the platform
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Community Driven
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Tip other users and participate in a thriving decentralized community
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">1,234</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">5,678</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Badges Minted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">12.5K</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">GUI Staked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">890</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Tips Sent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}