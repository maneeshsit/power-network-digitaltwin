
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, Bell, Activity } from "lucide-react";

const Settings = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 p-6 space-y-6 overflow-auto">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                System Settings
              </h1>
              <p className="text-muted-foreground">
                Configure system preferences and operational parameters
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass electric-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <SettingsIcon className="w-5 h-5" />
                    General Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Refresh Rate</label>
                      <select className="w-full bg-background border border-white/10 rounded-md px-3 py-2">
                        <option>1 second</option>
                        <option>5 seconds</option>
                        <option>10 seconds</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Time Zone</label>
                      <select className="w-full bg-background border border-white/10 rounded-md px-3 py-2">
                        <option>UTC</option>
                        <option>EST</option>
                        <option>PST</option>
                      </select>
                    </div>
                    <Button className="w-full">Save Changes</Button>
                  </div>
                </CardContent>
              </Card>

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
                      <label className="text-sm font-medium">Alert Threshold</label>
                      <select className="w-full bg-background border border-white/10 rounded-md px-3 py-2">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Notification Method</label>
                      <select className="w-full bg-background border border-white/10 rounded-md px-3 py-2">
                        <option>Email + SMS</option>
                        <option>Email Only</option>
                        <option>SMS Only</option>
                      </select>
                    </div>
                    <Button className="w-full">Update Alerts</Button>
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

export default Settings;
