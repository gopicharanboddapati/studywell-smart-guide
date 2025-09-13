import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileQuestion, Clock, CheckCircle2, AlertCircle, Target } from "lucide-react";

export const AssessmentPreview = () => {
  const assessments = [
    {
      title: "Machine Learning Fundamentals",
      questions: 15,
      duration: "20 min",
      difficulty: "Intermediate",
      type: "Mixed",
      status: "ready",
      accuracy: 87
    },
    {
      title: "Data Structures - Arrays & Lists",
      questions: 12,
      duration: "15 min", 
      difficulty: "Beginner",
      type: "MCQ",
      status: "in-progress",
      accuracy: null
    },
    {
      title: "Algorithm Complexity Analysis",
      questions: 10,
      duration: "25 min",
      difficulty: "Advanced",
      type: "Short Answer",
      status: "pending",
      accuracy: null
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-success/10 text-success border-success/20';
      case 'Intermediate': return 'bg-warning/10 text-warning border-warning/20';
      case 'Advanced': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ready': return <CheckCircle2 className="w-4 h-4 text-success" />;
      case 'in-progress': return <AlertCircle className="w-4 h-4 text-warning" />;
      case 'pending': return <Clock className="w-4 h-4 text-muted-foreground" />;
      default: return null;
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileQuestion className="w-5 h-5 text-primary" />
          <span>Generated Assessments</span>
        </CardTitle>
        <CardDescription>
          AI-generated quizzes and assessments from your uploaded materials
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {assessments.map((assessment, index) => (
          <div key={index} className="p-4 border rounded-lg hover:shadow-soft transition-shadow bg-card/50">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2">{assessment.title}</h4>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <FileQuestion className="w-4 h-4" />
                    <span>{assessment.questions} questions</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{assessment.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Target className="w-4 h-4" />
                    <span>{assessment.type}</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(assessment.status)}
                <Badge variant="outline" className={getDifficultyColor(assessment.difficulty)}>
                  {assessment.difficulty}
                </Badge>
              </div>
            </div>
            
            {assessment.accuracy && (
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Last Score</span>
                  <span className="font-medium text-success">{assessment.accuracy}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full" 
                    style={{ width: `${assessment.accuracy}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                {assessment.status === 'ready' && "Ready to take"}
                {assessment.status === 'in-progress' && "Continue where you left off"}
                {assessment.status === 'pending' && "Generating questions..."}
              </div>
              <div className="space-x-2">
                {assessment.status === 'ready' && (
                  <>
                    <Button variant="outline" size="sm">Preview</Button>
                    <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                      Start Assessment
                    </Button>
                  </>
                )}
                {assessment.status === 'in-progress' && (
                  <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                    Continue
                  </Button>
                )}
                {assessment.status === 'pending' && (
                  <Button size="sm" variant="outline" disabled>
                    Generating...
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t">
          <Button variant="outline" className="w-full">
            View All Assessments
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};