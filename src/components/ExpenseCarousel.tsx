import { motion } from "framer-motion";
import { useState } from "react";
import { 
  UtensilsCrossed, 
  Plane, 
  ShoppingBag, 
  Receipt, 
  PiggyBank,
  Car,
  Gamepad2,
  Heart,
  ChevronRight
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const expenseCategories = [
  {
    id: "food",
    name: "Food & Dining",
    icon: UtensilsCrossed,
    amount: 1247.50,
    budget: 1500,
    transactions: 23,
    trend: "+12%",
    color: "from-red-500 to-pink-500",
    description: "Restaurants, groceries, coffee"
  },
  {
    id: "travel",
    name: "Travel",
    icon: Plane,
    amount: 890.00,
    budget: 1000,
    transactions: 8,
    trend: "-5%",
    color: "from-blue-500 to-cyan-500",
    description: "Flights, hotels, transportation"
  },
  {
    id: "shopping",
    name: "Shopping",
    icon: ShoppingBag,
    amount: 567.30,
    budget: 800,
    transactions: 15,
    trend: "+8%",
    color: "from-purple-500 to-pink-500",
    description: "Clothes, electronics, accessories"
  },
  {
    id: "bills",
    name: "Bills & Utilities",
    icon: Receipt,
    amount: 1320.00,
    budget: 1400,
    transactions: 12,
    trend: "0%",
    color: "from-orange-500 to-red-500",
    description: "Rent, electricity, internet, phone"
  },
  {
    id: "savings",
    name: "Savings",
    icon: PiggyBank,
    amount: 2000.00,
    budget: 2500,
    transactions: 4,
    trend: "+15%",
    color: "from-green-500 to-emerald-500",
    description: "Emergency fund, investments"
  },
  {
    id: "transport",
    name: "Transportation",
    icon: Car,
    amount: 345.20,
    budget: 600,
    transactions: 18,
    trend: "-3%",
    color: "from-indigo-500 to-blue-500",
    description: "Gas, public transport, parking"
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: Gamepad2,
    amount: 234.50,
    budget: 400,
    transactions: 11,
    trend: "+20%",
    color: "from-yellow-500 to-orange-500",
    description: "Movies, games, subscriptions"
  },
  {
    id: "health",
    name: "Health & Fitness",
    icon: Heart,
    amount: 180.00,
    budget: 300,
    transactions: 6,
    trend: "+5%",
    color: "from-pink-500 to-rose-500",
    description: "Gym, medical, supplements"
  }
];

export const ExpenseCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getProgress = (amount: number, budget: number) => (amount / budget) * 100;

  return (
    <div className="p-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-5xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Your Financial Story
        </h1>
        <p className="text-xl text-muted-foreground">
          Track, analyze, and optimize your spending like never before
        </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
      >
        <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-foreground">$6,784.50</div>
            <div className="text-sm text-muted-foreground">Total Spent This Month</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-success">$8,500.00</div>
            <div className="text-sm text-muted-foreground">Monthly Budget</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-accent">$1,715.50</div>
            <div className="text-sm text-muted-foreground">Remaining Budget</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-warning">97</div>
            <div className="text-sm text-muted-foreground">Transactions</div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Categories Carousel */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-foreground mb-6">Expense Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expenseCategories.map((category, index) => {
            const progress = getProgress(category.amount, category.budget);
            const isOverBudget = progress > 100;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
              >
                <Card className="bg-gradient-card border-border/50 hover:shadow-neon transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    {/* Category Name */}
                    <h3 className="text-lg font-semibold text-foreground mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{category.description}</p>

                    {/* Amount */}
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-2xl font-bold text-foreground">${category.amount.toFixed(2)}</span>
                      <Badge variant={category.trend.startsWith('+') ? 'destructive' : 'secondary'}>
                        {category.trend}
                      </Badge>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex justify-between text-sm text-muted-foreground mb-1">
                        <span>Budget: ${category.budget}</span>
                        <span>{progress.toFixed(0)}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            isOverBudget 
                              ? 'bg-destructive animate-glow-pulse' 
                              : progress > 80 
                                ? 'bg-warning' 
                                : 'bg-success'
                          }`}
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Transactions */}
                    <div className="text-sm text-muted-foreground">
                      {category.transactions} transactions
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-foreground mb-6">Recent Activity</h2>
        <Card className="bg-gradient-card border-border/50">
          <CardContent className="p-6">
            <div className="space-y-4">
              {[
                { name: "Starbucks Coffee", category: "Food", amount: -5.45, time: "2 hours ago" },
                { name: "Uber Ride", category: "Transport", amount: -12.30, time: "5 hours ago" },
                { name: "Netflix Subscription", category: "Entertainment", amount: -15.99, time: "1 day ago" },
                { name: "Salary Deposit", category: "Income", amount: 3500.00, time: "2 days ago" },
                { name: "Grocery Store", category: "Food", amount: -67.89, time: "3 days ago" },
              ].map((transaction, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div>
                    <div className="font-medium text-foreground">{transaction.name}</div>
                    <div className="text-sm text-muted-foreground">{transaction.category} • {transaction.time}</div>
                  </div>
                  <div className={`font-bold ${transaction.amount > 0 ? 'text-success' : 'text-foreground'}`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};