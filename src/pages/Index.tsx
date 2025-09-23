import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { ExpenseCarousel } from "../components/ExpenseCarousel";
import { AIChat } from "../components/AIChat";
import { AddExpenseModal } from "../components/AddExpenseModal";
import { AnalyticsView } from "../components/AnalyticsView";
import { SavingsGoals } from "../components/SavingsGoals";

export default function Index() {
  const [currentView, setCurrentView] = useState("dashboard");
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case "analytics":
        return <AnalyticsView />;
      case "savings":
        return <SavingsGoals />;
      case "settings":
        return (
          <div className="p-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Settings</h1>
            <p className="text-muted-foreground">Settings coming soon...</p>
          </div>
        );
      default:
        return <ExpenseCarousel />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar Navigation */}
      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView}
        onAddExpense={() => setIsAddExpenseOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {renderView()}
      </main>

      {/* AI Chatbot */}
      <AIChat />

      {/* Add Expense Modal */}
      <AddExpenseModal 
        isOpen={isAddExpenseOpen}
        onClose={() => setIsAddExpenseOpen(false)}
      />
    </div>
  );
}