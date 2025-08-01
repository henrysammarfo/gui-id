"use client";

import { useState } from "react";
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
  Wallet
} from "lucide-react";

interface TransactionState {
  loading: boolean;
  success: boolean;
  error: string | null;
  hash: string | null;
}

export function Dashboard() {
  const { account, disconnect } = useWallet();
  
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
        <Alert className="mt-4">
          <Loader2 className="h-4 w-4 animate-spin" />
          <AlertDescription>Transaction pending...</AlertDescription>
        </Alert>
      );
    }
    
    if (state.success) {
      return (
        <Alert className="mt-4 border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            Transaction successful! 
            {state.hash && (
              <a 
                href={`https://explorer.aptoslabs.com/txn/${state.hash}?network=devnet`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-600 hover:underline"
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
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-xl">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              GUI_ID Dashboard
            </h1>
          </div>
          <Button 
            onClick={disconnect} 
            variant="outline" 
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Disconnect
          </Button>
        </div>

        {/* User Info Card */}
        <Card className="mb-8 border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <Wallet className="h-5 w-5" />
                  Connected as {account?.address && formatAddress(account.address)}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <code className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                    {account?.address}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyAddress}
                    className="h-6 w-6"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{userData.xp}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Experience Points</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{userData.reputation}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Reputation</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{userData.badges}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Badges Earned</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{userData.totalStaked}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">GUI Staked</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Stake GUI */}
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Coins className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                Stake GUI
              </CardTitle>
              <CardDescription>
                Stake GUI tokens to earn reputation and participate in governance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="number"
                placeholder="Amount to stake"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                className="bg-white dark:bg-slate-700"
              />
              <Button 
                onClick={handleStakeGui} 
                disabled={!stakeAmount || stakeState.loading}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {stakeState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Stake GUI Tokens
              </Button>
              <TransactionStatus state={stakeState} />
            </CardContent>
          </Card>

          {/* Tip User */}
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Gift className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                Tip User
              </CardTitle>
              <CardDescription>
                Send a tip to another user to show appreciation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="text"
                placeholder="Recipient address"
                value={tipRecipient}
                onChange={(e) => setTipRecipient(e.target.value)}
                className="bg-white dark:bg-slate-700"
              />
              <Input
                type="number"
                placeholder="Tip amount"
                value={tipAmount}
                onChange={(e) => setTipAmount(e.target.value)}
                className="bg-white dark:bg-slate-700"
              />
              <Button 
                onClick={handleTipUser} 
                disabled={!tipRecipient || !tipAmount || tipState.loading}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {tipState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send Tip
              </Button>
              <TransactionStatus state={tipState} />
            </CardContent>
          </Card>

          {/* Mint Badge */}
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Award className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                Mint Badge
                <Badge variant="secondary" className="ml-2">Admin</Badge>
              </CardTitle>
              <CardDescription>
                Mint a badge for a user (requires admin privileges)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="text"
                placeholder="Recipient address"
                value={badgeRecipient}
                onChange={(e) => setBadgeRecipient(e.target.value)}
                className="bg-white dark:bg-slate-700"
              />
              <Input
                type="number"
                placeholder="Badge ID"
                value={badgeId}
                onChange={(e) => setBadgeId(e.target.value)}
                className="bg-white dark:bg-slate-700"
              />
              <Button 
                onClick={handleMintBadge} 
                disabled={!badgeRecipient || !badgeId || badgeState.loading}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                {badgeState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Mint Badge
              </Button>
              <TransactionStatus state={badgeState} />
            </CardContent>
          </Card>

          {/* Earn XP */}
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                Award XP
              </CardTitle>
              <CardDescription>
                Award experience points to a user for their contributions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="text"
                placeholder="Recipient address"
                value={xpRecipient}
                onChange={(e) => setXpRecipient(e.target.value)}
                className="bg-white dark:bg-slate-700"
              />
              <Input
                type="number"
                placeholder="XP amount"
                value={xpAmount}
                onChange={(e) => setXpAmount(e.target.value)}
                className="bg-white dark:bg-slate-700"
              />
              <Button 
                onClick={handleEarnXp} 
                disabled={!xpRecipient || !xpAmount || xpState.loading}
                className="w-full bg-orange-600 hover:bg-orange-700"
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