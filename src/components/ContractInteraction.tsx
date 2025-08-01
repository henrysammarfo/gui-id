"use client";

import { useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Coins, 
  Gift, 
  Award, 
  TrendingUp, 
  Loader2, 
  CheckCircle, 
  XCircle,
  User
} from "lucide-react";

const CONTRACT_ADDRESS = "YOUR_ADDRESS"; // Replace with your actual contract address

const aptosConfig = new AptosConfig({ network: Network.DEVNET });
const aptos = new Aptos(aptosConfig);

interface TransactionState {
  loading: boolean;
  success: boolean;
  error: string | null;
  hash: string | null;
}

export function ContractInteraction() {
  const { account, signAndSubmitTransaction, connected } = useWallet();
  
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

  const resetState = (setState: React.Dispatch<React.SetStateAction<TransactionState>>) => {
    setState({ loading: false, success: false, error: null, hash: null });
  };

  const handleStakeGui = async () => {
    if (!connected || !account) return;
    
    resetState(setStakeState);
    setStakeState(prev => ({ ...prev, loading: true }));

    try {
      const transaction = {
        data: {
          function: `${CONTRACT_ADDRESS}::GUI_ID::stake_gui`,
          functionArguments: [parseInt(stakeAmount)],
        },
      };

      const response = await signAndSubmitTransaction(transaction);
      await aptos.waitForTransaction({ transactionHash: response.hash });
      
      setStakeState({
        loading: false,
        success: true,
        error: null,
        hash: response.hash
      });
      setStakeAmount("");
    } catch (error) {
      setStakeState({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : "Transaction failed",
        hash: null
      });
    }
  };

  const handleTipUser = async () => {
    if (!connected || !account) return;
    
    resetState(setTipState);
    setTipState(prev => ({ ...prev, loading: true }));

    try {
      const transaction = {
        data: {
          function: `${CONTRACT_ADDRESS}::GUI_ID::tip_user`,
          functionArguments: [tipRecipient, parseInt(tipAmount)],
        },
      };

      const response = await signAndSubmitTransaction(transaction);
      await aptos.waitForTransaction({ transactionHash: response.hash });
      
      setTipState({
        loading: false,
        success: true,
        error: null,
        hash: response.hash
      });
      setTipRecipient("");
      setTipAmount("");
    } catch (error) {
      setTipState({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : "Transaction failed",
        hash: null
      });
    }
  };

  const handleMintBadge = async () => {
    if (!connected || !account) return;
    
    resetState(setBadgeState);
    setBadgeState(prev => ({ ...prev, loading: true }));

    try {
      const transaction = {
        data: {
          function: `${CONTRACT_ADDRESS}::GUI_ID::mint_badge`,
          functionArguments: [badgeRecipient, parseInt(badgeId)],
        },
      };

      const response = await signAndSubmitTransaction(transaction);
      await aptos.waitForTransaction({ transactionHash: response.hash });
      
      setBadgeState({
        loading: false,
        success: true,
        error: null,
        hash: response.hash
      });
      setBadgeRecipient("");
      setBadgeId("");
    } catch (error) {
      setBadgeState({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : "Transaction failed",
        hash: null
      });
    }
  };

  const handleEarnXp = async () => {
    if (!connected || !account) return;
    
    resetState(setXpState);
    setXpState(prev => ({ ...prev, loading: true }));

    try {
      const transaction = {
        data: {
          function: `${CONTRACT_ADDRESS}::GUI_ID::earn_xp`,
          functionArguments: [xpRecipient, parseInt(xpAmount)],
        },
      };

      const response = await signAndSubmitTransaction(transaction);
      await aptos.waitForTransaction({ transactionHash: response.hash });
      
      setXpState({
        loading: false,
        success: true,
        error: null,
        hash: response.hash
      });
      setXpRecipient("");
      setXpAmount("");
    } catch (error) {
      setXpState({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : "Transaction failed",
        hash: null
      });
    }
  };

  const handleInitializeUser = async () => {
    if (!connected || !account) return;

    try {
      const transaction = {
        data: {
          function: `${CONTRACT_ADDRESS}::GUI_ID::initialize_user`,
          functionArguments: [],
        },
      };

      const response = await signAndSubmitTransaction(transaction);
      await aptos.waitForTransaction({ transactionHash: response.hash });
      
      alert("User initialized successfully!");
    } catch (error) {
      alert(`Failed to initialize user: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };

  const TransactionStatus = ({ state }: { state: TransactionState }) => {
    if (state.loading) {
      return (
        <Alert>
          <Loader2 className="h-4 w-4 animate-spin" />
          <AlertDescription>Transaction pending...</AlertDescription>
        </Alert>
      );
    }
    
    if (state.success) {
      return (
        <Alert>
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription>
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
        <Alert variant="destructive">
          <XCircle className="h-4 w-4" />
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      );
    }
    
    return null;
  };

  if (!connected) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Contract Interaction</CardTitle>
          <CardDescription>
            Please connect your wallet to interact with the GUI_ID contract
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Initialize User */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Initialize User
          </CardTitle>
          <CardDescription>
            Initialize your user account in the GUI_ID system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleInitializeUser} className="w-full">
            Initialize User Account
          </Button>
        </CardContent>
      </Card>

      {/* Stake GUI */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coins className="h-5 w-5" />
            Stake GUI
          </CardTitle>
          <CardDescription>
            Stake GUI tokens to earn reputation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="number"
            placeholder="Amount to stake"
            value={stakeAmount}
            onChange={(e) => setStakeAmount(e.target.value)}
          />
          <Button 
            onClick={handleStakeGui} 
            disabled={!stakeAmount || stakeState.loading}
            className="w-full"
          >
            {stakeState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Stake GUI
          </Button>
          <TransactionStatus state={stakeState} />
        </CardContent>
      </Card>

      {/* Tip User */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Tip User
          </CardTitle>
          <CardDescription>
            Send a tip to another user
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="text"
            placeholder="Recipient address"
            value={tipRecipient}
            onChange={(e) => setTipRecipient(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Tip amount"
            value={tipAmount}
            onChange={(e) => setTipAmount(e.target.value)}
          />
          <Button 
            onClick={handleTipUser} 
            disabled={!tipRecipient || !tipAmount || tipState.loading}
            className="w-full"
          >
            {tipState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Send Tip
          </Button>
          <TransactionStatus state={tipState} />
        </CardContent>
      </Card>

      {/* Mint Badge */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Mint Badge
          </CardTitle>
          <CardDescription>
            Mint a badge for a user (admin only)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="text"
            placeholder="Recipient address"
            value={badgeRecipient}
            onChange={(e) => setBadgeRecipient(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Badge ID"
            value={badgeId}
            onChange={(e) => setBadgeId(e.target.value)}
          />
          <Button 
            onClick={handleMintBadge} 
            disabled={!badgeRecipient || !badgeId || badgeState.loading}
            className="w-full"
          >
            {badgeState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Mint Badge
          </Button>
          <TransactionStatus state={badgeState} />
        </CardContent>
      </Card>

      {/* Earn XP */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Earn XP
          </CardTitle>
          <CardDescription>
            Award XP to a user
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="text"
            placeholder="Recipient address"
            value={xpRecipient}
            onChange={(e) => setXpRecipient(e.target.value)}
          />
          <Input
            type="number"
            placeholder="XP amount"
            value={xpAmount}
            onChange={(e) => setXpAmount(e.target.value)}
          />
          <Button 
            onClick={handleEarnXp} 
            disabled={!xpRecipient || !xpAmount || xpState.loading}
            className="w-full"
          >
            {xpState.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Award XP
          </Button>
          <TransactionStatus state={xpState} />
        </CardContent>
      </Card>
    </div>
  );
}