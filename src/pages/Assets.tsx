
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Activity, Settings } from "lucide-react";

const Assets = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 p-6 space-y-6 overflow-auto">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Asset Management
              </h1>
              <p className="text-muted-foreground">
                Comprehensive asset tracking and management system
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass electric-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Asset Inventory
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Transformer TX-001</div>
                        <div className="text-sm text-muted-foreground">Primary Substation</div>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400">Operational</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Feeder F-012</div>
                        <div className="text-sm text-muted-foreground">Distribution Line</div>
                      </div>
                      <Badge className="bg-yellow-500/20 text-yellow-400">Maintenance</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Switch SW-034</div>
                        <div className="text-sm text-muted-foreground">Disconnect Switch</div>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400">Operational</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass electric-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Asset Health
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Total Assets:</span>
                      <span className="text-primary font-medium">247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Operational:</span>
                      <span className="text-green-400 font-medium">234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Maintenance:</span>
                      <span className="text-yellow-400 font-medium">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Out of Service:</span>
                      <span className="text-red-400 font-medium">5</span>
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

export default Assets;
