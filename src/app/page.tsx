"use client";

import { LandingPage } from "@/components/LandingPage";
import { Dashboard } from "@/components/Dashboard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";

export default function Home() {
  // For demo purposes, allow manual navigation to dashboard
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="relative">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      {/* Demo Navigation Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setShowDashboard(!showDashboard)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
        >
          {showDashboard ? 'Landing' : 'Dashboard'}
        </button>
      </div>
      
      {/* Main Content */}
      {showDashboard ? <Dashboard /> : <LandingPage />}
    </div>
  );
}
