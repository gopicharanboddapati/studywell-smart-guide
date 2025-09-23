import { motion } from "framer-motion";
import { 
  Home, 
  Plus, 
  BarChart3, 
  PiggyBank, 
  Settings, 
  Wallet 
} from "lucide-react";
import { Button } from "./ui/button";

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  onAddExpense: () => void;
}

const menuItems = [
  { id: "dashboard", icon: Home, label: "Dashboard" },
  { id: "analytics", icon: BarChart3, label: "Analytics" },
  { id: "savings", icon: PiggyBank, label: "Savings Goals" },
  { id: "settings", icon: Settings, label: "Settings" },
];

export const Sidebar = ({ currentView, onViewChange, onAddExpense }: SidebarProps) => {
  return (
    <motion.aside 
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-64 bg-sidebar-background border-r border-sidebar-border p-6 flex flex-col"
    >
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Wallet className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-sidebar-foreground">ExpenseTracker</h1>
        </div>
      </motion.div>

      {/* Add Expense Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <Button 
          onClick={onAddExpense}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-200 hover:shadow-glow"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Expense
        </Button>
      </motion.div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = currentView === item.id;
            return (
              <motion.li 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <button
                  onClick={() => onViewChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                    isActive 
                      ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-neon" 
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  }`}
                >
                  <item.icon className={`w-5 h-5 transition-colors duration-200 ${
                    isActive ? "text-primary" : "group-hover:text-primary"
                  }`} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 pt-6 border-t border-sidebar-border"
      >
        <div className="text-sm text-muted-foreground text-center">
          Made with ❤️ for better finances
        </div>
      </motion.div>
    </motion.aside>
  );
};