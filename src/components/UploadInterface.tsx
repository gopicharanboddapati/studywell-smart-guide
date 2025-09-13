import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, File, CheckCircle } from "lucide-react";
import { useState } from "react";

export const UploadInterface = () => {
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: "Introduction to Machine Learning.pdf", size: "2.3 MB", status: "processed" },
    { name: "Data Structures Notes.txt", size: "856 KB", status: "processing" },
  ]);

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Upload className="w-5 h-5 text-primary" />
          <span>Upload Learning Materials</span>
        </CardTitle>
        <CardDescription>
          Upload PDFs, text files, or documents to generate personalized assessments
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload Area */}
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer group">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Drop files here or click to browse</h3>
              <p className="text-muted-foreground">Supports PDF, TXT, DOCX files up to 20MB</p>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90">
              Choose Files
            </Button>
          </div>
        </div>

        {/* Recent Uploads */}
        <div>
          <h4 className="font-semibold mb-4">Recent Uploads</h4>
          <div className="space-y-3">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    {file.name.endsWith('.pdf') ? (
                      <File className="w-5 h-5 text-primary" />
                    ) : (
                      <FileText className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-muted-foreground">{file.size}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {file.status === "processed" ? (
                    <div className="flex items-center space-x-2 text-success">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Ready</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 text-warning">
                      <div className="w-4 h-4 border-2 border-warning border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm font-medium">Processing</span>
                    </div>
                  )}
                  <Button size="sm" variant="outline">
                    Generate Quiz
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};