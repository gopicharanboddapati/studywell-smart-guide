import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, Target, BookOpen, TrendingUp, AlertTriangle } from "lucide-react";

const recommendations = [
  {
    type: "focus-area",
    title: "Focus on Algorithms",
    description: "Your performance in sorting algorithms needs improvement",
    priority: "high",
    estimatedTime: "2 hours",
    confidence: 89,
    icon: Target,
    action: "Practice Now"
  },
  {
    type: "review",
    title: "Review Machine Learning",
    description: "Great progress! Time for advanced concepts",
    priority: "medium", 
    estimatedTime: "1.5 hours",
    confidence: 92,
    icon: TrendingUp,
    action: "Continue Learning"
  },
  {
    type: "weakness",
    title: "Mathematical Foundations", 
    description: "Strengthen your calculus and linear algebra",
    priority: "high",
    estimatedTime: "3 hours",
    confidence: 78,
    icon: AlertTriangle,
    action: "Start Review"
  },
  {
    type: "next-topic",
    title: "Data Structures Advanced",
    description: "Ready to learn trees and graphs",
    priority: "low",
    estimatedTime: "2.5 hours", 
    confidence: 85,
    icon: BookOpen,
    action: "Begin Topic"
  }
];

export const StudyRecommendations = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium': return 'bg-warning/10 text-warning border-warning/20';
      case 'low': return 'bg-success/10 text-success border-success/20';
      default: return 'bg-secondary';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-success';
    if (confidence >= 75) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="w-5 h-5 text-primary" />
          <span>AI Recommendations</span>
        </CardTitle>
        <CardDescription>
          Personalized study suggestions based on your learning patterns
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((rec, index) => {
          const IconComponent = rec.icon;
          return (
            <div key={index} className="p-4 border rounded-lg hover:shadow-soft transition-all bg-card/30">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">{rec.title}</h4>
                    <Badge variant="outline" className={getPriorityColor(rec.priority)}>
                      {rec.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{rec.estimatedTime}</span>
                      </span>
                      <span className={`font-medium ${getConfidenceColor(rec.confidence)}`}>
                        {rec.confidence}% match
                      </span>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">
                      {rec.action}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        <div className="pt-4 border-t">
          <Button variant="outline" className="w-full">
            View All Recommendations
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};