import { WalletConnection } from "@/components/WalletConnection";
import { ContractInteraction } from "@/components/ContractInteraction";
import { Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              GUI_ID
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A decentralized reputation system built on Aptos. Stake tokens, tip users, 
            mint badges, and earn XP in a trustless environment.
          </p>
        </header>

        <div className="max-w-2xl mx-auto">
          <WalletConnection />
          <ContractInteraction />
        </div>

        <footer className="text-center mt-12 text-gray-500 dark:text-gray-400">
          <p>Built with Next.js, React, and Aptos</p>
        </footer>
      </div>
    </div>
  );
}
