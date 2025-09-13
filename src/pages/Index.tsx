import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, BookOpen, Target, TrendingUp, Brain, FileText, Users, Award } from "lucide-react";
import { UploadInterface } from "@/components/UploadInterface";
import { AssessmentPreview } from "@/components/AssessmentPreview";
import { PerformanceChart } from "@/components/PerformanceChart";
import { StudyRecommendations } from "@/components/StudyRecommendations";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Header */}
      <header className="bg-card shadow-soft border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">EduAdapt</h1>
                <p className="text-sm text-muted-foreground">Adaptive Learning Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-gradient-primary text-white">
                <Award className="w-4 h-4 mr-1" />
                Level 5
              </Badge>
              <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                Upgrade Plan
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <Card className="bg-gradient-hero text-white shadow-glow border-0">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Welcome back, Student!</h2>
                  <p className="text-white/90 text-lg mb-4">Continue your learning journey with personalized content</p>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4" />
                      <span>12 Active Courses</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4" />
                      <span>85% Average Score</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>+12% This Week</span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-white/80" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upload Interface */}
            <UploadInterface />
            
            {/* Assessment Preview */}
            <AssessmentPreview />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Performance Overview */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Performance Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Overall Progress</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-3" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Weekly Goal</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-3" />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <div className="text-2xl font-bold text-primary">47</div>
                    <div className="text-sm text-muted-foreground">Completed</div>
                  </div>
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent">23</div>
                    <div className="text-sm text-muted-foreground">In Progress</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Study Recommendations */}
            <StudyRecommendations />

            {/* Quick Stats */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Study Streak</span>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                    7 days
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Time Today</span>
                  <span className="font-medium">2h 15m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Accuracy Rate</span>
                  <span className="font-medium text-success">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Rank</span>
                  <Badge className="bg-gradient-primary text-white">#12 in class</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Performance Chart Section */}
        <div className="mt-8">
          <PerformanceChart />
        </div>
      </main>
    </div>
  );
};

export default Index;