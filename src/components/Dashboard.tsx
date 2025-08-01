"use client";

import { useState, useEffect } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Coins, 
  Gift, 
  Award, 
  TrendingUp, 
  Loader2, 
  CheckCircle, 
  XCircle,
  LogOut,
  Copy,
  Wallet,
  Shield,
  ChevronDown,
  ChevronUp,
  Zap,
  Star,
  Target
} from "lucide-react";

interface TransactionState {
  loading: boolean;
  success: boolean;
  error: string | null;
  hash: string | null;
}

export function Dashboard() {
  const { account, disconnect } = useWallet();
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  
  // Mock user data
  const userData = {
    xp: 1250,
    reputation: 850,
    badges: 3,
    totalStaked: 500
  };

  // Form states
  const [stakeAmount, setStakeAmount] = useState("");
  const [tipRecipient, setTipRecipient] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [badgeRecipient, setBadgeRecipient] = useState("");
  const [badgeId, setBadgeId] = useState("");
  const [xpRecipient, setXpRecipient] = useState("");
  const [xpAmount, setXpAmount] = useState("");
  
  // Transaction states
  const [stakeState, setStakeState] = useState<TransactionState>({
    loading: false, success: false, error: null, hash: null
  });
  const [tipState, setTipState] = useState<TransactionState>({
    loading: false, success: false, error: null, hash: null
  });
  const [badgeState, setBadgeState] = useState<TransactionState>({
    loading: false, success: false, error: null, hash: null
  });
  const [xpState, setXpState] = useState<TransactionState>({
    loading: false, success: false, error: null, hash: null
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const copyAddress = () => {
    if (account?.address) {
      navigator.clipboard.writeText(account.address);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const TransactionStatus = ({ state }: { state: TransactionState }) => {
    if (state.loading) {
      return (
        <Alert className="mt-4 border-blue-500/20 bg-blue-500/10 backdrop-blur-sm">
          <Loader2 className="h-4 w-4 animate-spin text-blue-400" />
          <AlertDescription className="text-blue-300">Transaction pending...</AlertDescription>
        </Alert>
      );
    }
    
    if (state.success) {
      return (
        <Alert className="mt-4 border-green-500/20 bg-green-500/10 backdrop-blur-sm">
          <CheckCircle className="h-4 w-4 text-green-400" />
          <AlertDescription className="text-green-300">
            Transaction successful! 
            {state.hash && (
              <a 
                href={`https://explorer.aptoslabs.com/txn/${state.hash}?network=devnet`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-400 hover:text-blue-300 underline font-medium transition-colors duration-200"
              >
                View on Explorer
              </a>
            )}
          </AlertDescription>
        </Alert>
      );
    }
    
    if (state.error) {
      return (
        <Alert className="mt-4 border-red-500/20 bg-red-500/10 backdrop-blur-sm">
          <XCircle className="h-4 w-4 text-red-400" />
          <AlertDescription className="text-red-300">{state.error}</AlertDescription>
        </Alert>
      );
    }
    
    return null;
  };

  // Mock transaction handlers
  const handleStakeGui = async () => {
    setStakeState({ loading: true, success: false, error: null, hash: null });
    setTimeout(() => {
      setStakeState({ loading: false, success: true, error: null, hash: "0x123..." });
      setStakeAmount("");
      setExpandedCard(null);
    }, 2000);
  };

  const handleTipUser = async () => {
    setTipState({ loading: true, success: false, error: null, hash: null });
    setTimeout(() => {
      setTipState({ loading: false, success: true, error: null, hash: "0x456..." });
      setTipRecipient("");
      setTipAmount("");
      setExpandedCard(null);
    }, 2000);
  };

  const handleMintBadge = async () => {
    setBadgeState({ loading: true, success: false, error: null, hash: null });
    setTimeout(() => {
      setBadgeState({ loading: false, success: true, error: null, hash: "0x789..." });
      setBadgeRecipient("");
      setBadgeId("");
      setExpandedCard(null);
    }, 2000);
  };

  const handleEarnXp = async () => {
    setXpState({ loading: true, success: false, error: null, hash: null });
    setTimeout(() => {
      setXpState({ loading: false, success: true, error: null, hash: "0xabc..." });
      setXpRecipient("");
      setXpAmount("");
      setExpandedCard(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <div className={`flex items-center justify-between mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                GUI_ID
              </h1>
              <p className="text-slate-400 text-sm font-medium">
                Decentralized Reputation Dashboard
              </p>
            </div>
          </div>
          <Button 
            onClick={disconnect} 
            variant="outline" 
            className="group border-red-500/20 bg-red-500/10 hover:bg-red-500/20 hover:border-red-500/40 text-red-400 hover:text-red-300 transition-all duration-300 backdrop-blur-sm"
          >
            <LogOut className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Disconnect
          </Button>
        </div>

        {/* User Info Card */}
        <Card className={`mb-8 border-slate-700/50 bg-slate-800/50 backdrop-blur-xl hover:bg-slate-800/70 transition-all duration-500 shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-3 text-white text-2xl font-bold">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/20">
                    <Wallet className="h-6 w-6 text-blue-400" />
                  </div>
                  Connected as {account?.address && formatAddress(account.address)}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 mt-3">
                  <code className="text-xs bg-slate-700/50 text-slate-300 px-3 py-2 rounded-lg font-mono border border-slate-600/30">
                    {account?.address}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyAddress}
                    className="h-8 w-8 hover:bg-slate-700/50 text-slate-400 hover:text-white transition-all duration-200"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="group text-center p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-center mb-3">
                  <Zap className="h-6 w-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl font-black text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{userData.xp}</div>
                <div className="text-sm text-slate-400 font-medium mt-1">Experience Points</div>
              </div>
              <div className="group text-center p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-center mb-3">
                  <Star className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl font-black text-purple-400 group-hover:text-purple-300 transition-colors duration-300">{userData.reputation}</div>
                <div className="text-sm text-slate-400 font-medium mt-1">Reputation</div>
              </div>
              <div className="group text-center p-6 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl border border-green-500/20 hover:border-green-400/40 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-center mb-3">
                  <Award className="h-6 w-6 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl font-black text-green-400 group-hover:text-green-300 transition-colors duration-300">{userData.badges}</div>
                <div className="text-sm text-slate-400 font-medium mt-1">Badges Earned</div>
              </div>
              <div className="group text-center p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-2xl border border-orange-500/20 hover:border-orange-400/40 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-center mb-3">
                  <Target className="h-6 w-6 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl font-black text-orange-400 group-hover:text-orange-300 transition-colors duration-300">{userData.totalStaked}</div>
                <div className="text-sm text-slate-400 font-medium mt-1">GUI Staked</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Stake GUI */}
          <Card className={`border-slate-700/50 bg-slate-800/50 backdrop-blur-xl hover:bg-slate-800/70 transition-all duration-500 shadow-2xl group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '200ms' }}>
            <CardHeader className="cursor-pointer" onClick={() => toggleCard('stake')}>
              <CardTitle className="flex items-center justify-between text-white text-xl font-bold">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Coins className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <div>Stake GUI</div>
                    <div className="text-sm font-normal text-slate-400">Build your reputation</div>
                  </div>
                </div>
                {expandedCard === 'stake' ? 
                  <ChevronUp className="h-5 w-5 text-slate-400 transition-transform duration-300" /> : 
                  <ChevronDown className="h-5 w-5 text-slate-400 transition-transform duration-300" />
                }
              </CardTitle>
              <CardDescription className="text-slate-400">
                Stake GUI tokens to earn reputation and participate in governance
              </CardDescription>
            </CardHeader>
            <div className={`overflow-hidden transition-all duration-500 ${expandedCard === 'stake' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <CardContent className="space-y-4 pt-0">
                <Input
                  type="number"
                  placeholder="Amount to stake"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 transition-all duration-200"
                />
                <Button 
                  onClick={handleStakeGui} 
                  disabled={!stakeAmount || stakeState.loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {stakeState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Stake GUI Tokens
                </Button>
                <TransactionStatus state={stakeState} />
              </CardContent>
            </div>
          </Card>

          {/* Tip User */}
          <Card className={`border-slate-700/50 bg-slate-800/50 backdrop-blur-xl hover:bg-slate-800/70 transition-all duration-500 shadow-2xl group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '400ms' }}>
            <CardHeader className="cursor-pointer" onClick={() => toggleCard('tip')}>
              <CardTitle className="flex items-center justify-between text-white text-xl font-bold">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl border border-green-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Gift className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <div>Tip User</div>
                    <div className="text-sm font-normal text-slate-400">Show appreciation</div>
                  </div>
                </div>
                {expandedCard === 'tip' ? 
                  <ChevronUp className="h-5 w-5 text-slate-400 transition-transform duration-300" /> : 
                  <ChevronDown className="h-5 w-5 text-slate-400 transition-transform duration-300" />
                }
              </CardTitle>
              <CardDescription className="text-slate-400">
                Send a tip to another user to show appreciation
              </CardDescription>
            </CardHeader>
            <div className={`overflow-hidden transition-all duration-500 ${expandedCard === 'tip' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <CardContent className="space-y-4 pt-0">
                <Input
                  type="text"
                  placeholder="Recipient address"
                  value={tipRecipient}
                  onChange={(e) => setTipRecipient(e.target.value)}
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-green-500/50 focus:ring-green-500/20 transition-all duration-200"
                />
                <Input
                  type="number"
                  placeholder="Tip amount"
                  value={tipAmount}
                  onChange={(e) => setTipAmount(e.target.value)}
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-green-500/50 focus:ring-green-500/20 transition-all duration-200"
                />
                <Button 
                  onClick={handleTipUser} 
                  disabled={!tipRecipient || !tipAmount || tipState.loading}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {tipState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Send Tip
                </Button>
                <TransactionStatus state={tipState} />
              </CardContent>
            </div>
          </Card>

          {/* Mint Badge */}
          <Card className={`border-slate-700/50 bg-slate-800/50 backdrop-blur-xl hover:bg-slate-800/70 transition-all duration-500 shadow-2xl group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '600ms' }}>
            <CardHeader className="cursor-pointer" onClick={() => toggleCard('badge')}>
              <CardTitle className="flex items-center justify-between text-white text-xl font-bold">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div>Mint Badge</div>
                      <Badge variant="secondary" className="text-xs bg-purple-500/20 text-purple-300 border-purple-500/30">Admin</Badge>
                    </div>
                    <div className="text-sm font-normal text-slate-400">Award achievements</div>
                  </div>
                </div>
                {expandedCard === 'badge' ? 
                  <ChevronUp className="h-5 w-5 text-slate-400 transition-transform duration-300" /> : 
                  <ChevronDown className="h-5 w-5 text-slate-400 transition-transform duration-300" />
                }
              </CardTitle>
              <CardDescription className="text-slate-400">
                Mint a badge for a user (requires admin privileges)
              </CardDescription>
            </CardHeader>
            <div className={`overflow-hidden transition-all duration-500 ${expandedCard === 'badge' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <CardContent className="space-y-4 pt-0">
                <Input
                  type="text"
                  placeholder="Recipient address"
                  value={badgeRecipient}
                  onChange={(e) => setBadgeRecipient(e.target.value)}
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-purple-500/50 focus:ring-purple-500/20 transition-all duration-200"
                />
                <Input
                  type="number"
                  placeholder="Badge ID"
                  value={badgeId}
                  onChange={(e) => setBadgeId(e.target.value)}
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-purple-500/50 focus:ring-purple-500/20 transition-all duration-200"
                />
                <Button 
                  onClick={handleMintBadge} 
                  disabled={!badgeRecipient || !badgeId || badgeState.loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {badgeState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Mint Badge
                </Button>
                <TransactionStatus state={badgeState} />
              </CardContent>
            </div>
          </Card>

          {/* Award XP */}
          <Card className={`border-slate-700/50 bg-slate-800/50 backdrop-blur-xl hover:bg-slate-800/70 transition-all duration-500 shadow-2xl group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '800ms' }}>
            <CardHeader className="cursor-pointer" onClick={() => toggleCard('xp')}>
              <CardTitle className="flex items-center justify-between text-white text-xl font-bold">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl border border-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <div>Award XP</div>
                    <div className="text-sm font-normal text-slate-400">Recognize contributions</div>
                  </div>
                </div>
                {expandedCard === 'xp' ? 
                  <ChevronUp className="h-5 w-5 text-slate-400 transition-transform duration-300" /> : 
                  <ChevronDown className="h-5 w-5 text-slate-400 transition-transform duration-300" />
                }
              </CardTitle>
              <CardDescription className="text-slate-400">
                Award experience points to a user for their contributions
              </CardDescription>
            </CardHeader>
            <div className={`overflow-hidden transition-all duration-500 ${expandedCard === 'xp' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <CardContent className="space-y-4 pt-0">
                <Input
                  type="text"
                  placeholder="Recipient address"
                  value={xpRecipient}
                  onChange={(e) => setXpRecipient(e.target.value)}
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-orange-500/50 focus:ring-orange-500/20 transition-all duration-200"
                />
                <Input
                  type="number"
                  placeholder="XP amount"
                  value={xpAmount}
                  onChange={(e) => setXpAmount(e.target.value)}
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-orange-500/50 focus:ring-orange-500/20 transition-all duration-200"
                />
                <Button 
                  onClick={handleEarnXp} 
                  disabled={!xpRecipient || !xpAmount || xpState.loading}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {xpState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Award XP
                </Button>
                <TransactionStatus state={xpState} />
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm font-medium">
            Built with <span className="text-purple-400 font-bold">GUI_INU</span> ⚡
          </p>
        </div>
      </div>
    </div>
  );
}