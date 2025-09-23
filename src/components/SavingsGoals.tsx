import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { 
  Target, 
  Plane, 
  Home, 
  Car, 
  GraduationCap, 
  Gamepad2,
  Plus,
  Calendar,
  DollarSign
} from "lucide-react";

const savingsGoals = [
  {
    id: 1,
    name: "Emergency Fund",
    icon: Target,
    targetAmount: 10000,
    currentAmount: 7500,
    deadline: "2024-12-31",
    color: "from-green-500 to-emerald-500",
    priority: "High"
  },
  {
    id: 2,
    name: "Vacation to Japan",
    icon: Plane,
    targetAmount: 5000,
    currentAmount: 2800,
    deadline: "2024-08-15",
    color: "from-blue-500 to-cyan-500",
    priority: "Medium"
  },
  {
    id: 3,
    name: "Down Payment",
    icon: Home,
    targetAmount: 50000,
    currentAmount: 15000,
    deadline: "2025-06-01",
    color: "from-purple-500 to-pink-500",
    priority: "High"
  },
  {
    id: 4,
    name: "New Car",
    icon: Car,
    targetAmount: 25000,
    currentAmount: 8500,
    deadline: "2024-10-01",
    color: "from-orange-500 to-red-500",
    priority: "Low"
  },
  {
    id: 5,
    name: "Master's Degree",
    icon: GraduationCap,
    targetAmount: 30000,
    currentAmount: 12000,
    deadline: "2025-01-15",
    color: "from-indigo-500 to-blue-500",
    priority: "Medium"
  },
  {
    id: 6,
    name: "Gaming Setup",
    icon: Gamepad2,
    targetAmount: 3000,
    currentAmount: 1800,
    deadline: "2024-07-01",
    color: "from-yellow-500 to-orange-500",
    priority: "Low"
  }
];

export const SavingsGoals = () => {
  const totalSaved = savingsGoals.reduce((sum, goal) => sum + goal.currentAmount, 0);
  const totalTarget = savingsGoals.reduce((sum, goal) => sum + goal.targetAmount, 0);
  const overallProgress = (totalSaved / totalTarget) * 100;

  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "destructive";
      case "Medium": return "outline";
      case "Low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Savings Goals
        </h1>
        <p className="text-xl text-muted-foreground">
          Track your progress towards financial milestones
        </p>
      </motion.div>

      {/* Overview Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Saved</p>
                <p className="text-2xl font-bold text-success">${totalSaved.toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Target</p>
                <p className="text-2xl font-bold text-foreground">${totalTarget.toLocaleString()}</p>
              </div>
              <Target className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overall Progress</p>
                <p className="text-2xl font-bold text-primary">{overallProgress.toFixed(1)}%</p>
              </div>
              <Calendar className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Add New Goal Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-end mb-6"
      >
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          Add New Goal
        </Button>
      </motion.div>

      {/* Goals Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {savingsGoals.map((goal, index) => {
          const progress = (goal.currentAmount / goal.targetAmount) * 100;
          const daysRemaining = getDaysRemaining(goal.deadline);
          const isUrgent = daysRemaining <= 30;

          return (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-gradient-card border-border/50 hover:shadow-neon transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${goal.color} flex items-center justify-center shadow-lg`}>
                      <goal.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant={getPriorityColor(goal.priority)}>
                      {goal.priority}
                    </Badge>
                  </div>
                  <CardTitle className="text-foreground">{goal.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-foreground font-medium">{progress.toFixed(1)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  {/* Amount */}
                  <div className="flex justify-between items-baseline">
                    <div>
                      <p className="text-2xl font-bold text-foreground">
                        ${goal.currentAmount.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        of ${goal.targetAmount.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Deadline */}
                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div>
                      <p className="text-sm text-muted-foreground">Deadline</p>
                      <p className="text-sm font-medium text-foreground">
                        {new Date(goal.deadline).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Days left</p>
                      <p className={`text-sm font-bold ${isUrgent ? 'text-destructive' : 'text-foreground'}`}>
                        {daysRemaining > 0 ? daysRemaining : 'Overdue'}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Add Funds
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      Edit Goal
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12"
      >
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">💡 Savings Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Automate Your Savings</h4>
                <p className="text-sm text-muted-foreground">
                  Set up automatic transfers to reach your goals faster without thinking about it.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Review Your Goals Monthly</h4>
                <p className="text-sm text-muted-foreground">
                  Regular check-ins help you stay on track and adjust targets as needed.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Start Small</h4>
                <p className="text-sm text-muted-foreground">
                  Even $25 per week adds up to over $1,300 per year towards your goals.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Track Your Progress</h4>
                <p className="text-sm text-muted-foreground">
                  Visual progress tracking helps maintain motivation and momentum.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};