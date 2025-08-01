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
  User,
  LogOut,
  Copy,
  Wallet,
  Shield
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
  
  // Mock user data - replace with actual on-chain data later
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

  const TransactionStatus = ({ state }: { state: TransactionState }) => {
    if (state.loading) {
      return (
        <Alert className="mt-4 border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/50">
          <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
          <AlertDescription className="text-blue-800 dark:text-blue-200">Transaction pending...</AlertDescription>
        </Alert>
      );
    }
    
    if (state.success) {
      return (
        <Alert className="mt-4 border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            Transaction successful! 
            {state.hash && (
              <a 
                href={`https://explorer.aptoslabs.com/txn/${state.hash}?network=devnet`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-600 hover:underline font-medium"
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
        <Alert variant="destructive" className="mt-4">
          <XCircle className="h-4 w-4" />
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      );
    }
    
    return null;
  };

  // Placeholder functions - replace with actual contract calls later
  const handleStakeGui = async () => {
    setStakeState({ loading: true, success: false, error: null, hash: null });
    // Simulate transaction
    setTimeout(() => {
      setStakeState({ loading: false, success: true, error: null, hash: "0x123..." });
      setStakeAmount("");
    }, 2000);
  };

  const handleTipUser = async () => {
    setTipState({ loading: true, success: false, error: null, hash: null });
    setTimeout(() => {
      setTipState({ loading: false, success: true, error: null, hash: "0x456..." });
      setTipRecipient("");
      setTipAmount("");
    }, 2000);
  };

  const handleMintBadge = async () => {
    setBadgeState({ loading: true, success: false, error: null, hash: null });
    setTimeout(() => {
      setBadgeState({ loading: false, success: true, error: null, hash: "0x789..." });
      setBadgeRecipient("");
      setBadgeId("");
    }, 2000);
  };

  const handleEarnXp = async () => {
    setXpState({ loading: true, success: false, error: null, hash: null });
    setTimeout(() => {
      setXpState({ loading: false, success: true, error: null, hash: "0xabc..." });
      setXpRecipient("");
      setXpAmount("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className={`flex items-center justify-between mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                GUI_ID Dashboard
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Manage your decentralized reputation
              </p>
            </div>
          </div>
          <Button 
            onClick={disconnect} 
            variant="outline" 
            className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950 dark:hover:border-red-800 transition-all duration-300"
          >
            <LogOut className="h-4 w-4" />
            Disconnect
          </Button>
        </div>

        {/* User Info Card */}
        <Card className={`mb-8 border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl">
                    <Wallet className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  Connected as {account?.address && formatAddress(account.address)}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 mt-2">
                  <code className="text-xs bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-lg font-mono">
                    {account?.address}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyAddress}
                    className="h-7 w-7 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">{userData.xp}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Experience Points</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">{userData.reputation}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Reputation</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300">{userData.badges}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Badges Earned</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300">{userData.totalStaked}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">GUI Staked</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Stake GUI */}
          <Card className={`border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Coins className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-xl font-bold">Stake GUI</div>
                  <div className="text-sm font-normal text-slate-500 dark:text-slate-400">Build your reputation</div>
                </div>
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Stake GUI tokens to earn reputation and participate in governance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="number"
                placeholder="Amount to stake"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
              />
              <Button 
                onClick={handleStakeGui} 
                disabled={!stakeAmount || stakeState.loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02]"
              >
                {stakeState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Stake GUI Tokens
              </Button>
              <TransactionStatus state={stakeState} />
            </CardContent>
          </Card>

          {/* Tip User */}
          <Card className={`border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '400ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
                <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Gift className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="text-xl font-bold">Tip User</div>
                  <div className="text-sm font-normal text-slate-500 dark:text-slate-400">Show appreciation</div>
                </div>
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Send a tip to another user to show appreciation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="text"
                placeholder="Recipient address"
                value={tipRecipient}
                onChange={(e) => setTipRecipient(e.target.value)}
                className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:border-green-500 dark:focus:border-green-400 transition-colors duration-200"
              />
              <Input
                type="number"
                placeholder="Tip amount"
                value={tipAmount}
                onChange={(e) => setTipAmount(e.target.value)}
                className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:border-green-500 dark:focus:border-green-400 transition-colors duration-200"
              />
              <Button 
                onClick={handleTipUser} 
                disabled={!tipRecipient || !tipAmount || tipState.loading}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-[1.02]"
              >
                {tipState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send Tip
              </Button>
              <TransactionStatus state={tipState} />
            </CardContent>
          </Card>

          {/* Mint Badge */}
          <Card className={`border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '600ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="text-xl font-bold">Mint Badge</div>
                    <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Admin</Badge>
                  </div>
                  <div className="text-sm font-normal text-slate-500 dark:text-slate-400">Award achievements</div>
                </div>
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Mint a badge for a user (requires admin privileges)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="text"
                placeholder="Recipient address"
                value={badgeRecipient}
                onChange={(e) => setBadgeRecipient(e.target.value)}
                className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:border-purple-500 dark:focus:border-purple-400 transition-colors duration-200"
              />
              <Input
                type="number"
                placeholder="Badge ID"
                value={badgeId}
                onChange={(e) => setBadgeId(e.target.value)}
                className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:border-purple-500 dark:focus:border-purple-400 transition-colors duration-200"
              />
              <Button 
                onClick={handleMintBadge} 
                disabled={!badgeRecipient || !badgeId || badgeState.loading}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02]"
              >
                {badgeState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Mint Badge
              </Button>
              <TransactionStatus state={badgeState} />
            </CardContent>
          </Card>

          {/* Earn XP */}
          <Card className={`border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '800ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
                <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <div className="text-xl font-bold">Award XP</div>
                  <div className="text-sm font-normal text-slate-500 dark:text-slate-400">Recognize contributions</div>
                </div>
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Award experience points to a user for their contributions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="text"
                placeholder="Recipient address"
                value={xpRecipient}
                onChange={(e) => setXpRecipient(e.target.value)}
                className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:border-orange-500 dark:focus:border-orange-400 transition-colors duration-200"
              />
              <Input
                type="number"
                placeholder="XP amount"
                value={xpAmount}
                onChange={(e) => setXpAmount(e.target.value)}
                className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:border-orange-500 dark:focus:border-orange-400 transition-colors duration-200"
              />
              <Button 
                onClick={handleEarnXp} 
                disabled={!xpRecipient || !xpAmount || xpState.loading}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-[1.02]"
              >
                {xpState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Award XP
              </Button>
              <TransactionStatus state={xpState} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}