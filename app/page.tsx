"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Settings, AlertTriangle, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function MaintenancePage() {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme("dark");
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 space-y-8 bg-card/50 backdrop-blur-sm border-muted">
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <Settings className="h-16 w-16 text-primary animate-spin-slow" />
          </div>
          
          <h1 className="text-4xl font-bold tracking-tighter text-primary">
            Site Under Maintenance
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            We're currently performing scheduled maintenance to improve your experience. 
            We'll be back online shortly.
          </p>
        </div>

        <div className="border-t border-border pt-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h2 className="font-semibold mb-2">Estimated Duration</h2>
                <p className="text-sm text-muted-foreground">
                  Our maintenance window is expected to last approximately a few days
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h2 className="font-semibold mb-2">Stay Updated</h2>
                <p className="text-sm text-muted-foreground">
                  Follow our status page or social media for updates
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            className="rounded-full"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </Button>
        </div>
      </Card>
    </div>
  );
}