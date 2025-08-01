"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { LandingPage } from "@/components/LandingPage";
import { Dashboard } from "@/components/Dashboard";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const { connected } = useWallet();

  return (
    <div className="relative min-h-screen">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      {/* Main Content */}
      {connected ? <Dashboard /> : <LandingPage />}
    </div>
  );
}