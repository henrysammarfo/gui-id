"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, LogOut } from "lucide-react";

export function WalletConnection() {
  const { connect, disconnect, account, connected, wallets } = useWallet();

  if (connected && account) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Wallet Connected
          </CardTitle>
          <CardDescription>
            Address: {account.address}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={disconnect} 
            variant="outline" 
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Disconnect
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="h-5 w-5" />
          Connect Wallet
        </CardTitle>
        <CardDescription>
          Connect your Aptos wallet to interact with GUI_ID contract
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {wallets?.map((wallet) => (
            <Button
              key={wallet.name}
              onClick={() => connect(wallet.name)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <img 
                src={wallet.icon} 
                alt={wallet.name} 
                className="h-4 w-4" 
              />
              {wallet.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}