
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { AlertsPanel } from "@/components/AlertsPanel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";

const Alerts = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 p-6 space-y-6 overflow-auto">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                System Alerts
              </h1>
              <p className="text-muted-foreground">
                Real-time alerts and notifications from the distribution network
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <AlertsPanel />
              
              <Card className="glass electric-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Alert Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Notification Settings</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Email Notifications:</span>
                          <span className="text-green-400">Enabled</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SMS Alerts:</span>
                          <span className="text-green-400">Enabled</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Push Notifications:</span>
                          <span className="text-green-400">Enabled</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Alert Thresholds</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Voltage Deviation:</span>
                          <span className="text-muted-foreground">±5%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Current Overload:</span>
                          <span className="text-muted-foreground">110%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Temperature:</span>
                          <span className="text-muted-foreground">85°C</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Alerts;
