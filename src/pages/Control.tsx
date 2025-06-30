
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gauge, Settings, Activity } from "lucide-react";

const Control = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 p-6 space-y-6 overflow-auto">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Control Center
              </h1>
              <p className="text-muted-foreground">
                Remote control and monitoring of network operations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass electric-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gauge className="w-5 h-5" />
                    Remote Controls
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Breaker CB-001</div>
                        <div className="text-sm text-muted-foreground">Main Distribution</div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Open</Button>
                        <Button size="sm" variant="default">Close</Button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Switch SW-012</div>
                        <div className="text-sm text-muted-foreground">Feeder Protection</div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Open</Button>
                        <Button size="sm" variant="default">Close</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass electric-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    System Commands
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full" variant="outline">
                      Emergency Shutdown
                    </Button>
                    <Button className="w-full" variant="outline">
                      Load Shedding
                    </Button>
                    <Button className="w-full" variant="outline">
                      Voltage Regulation
                    </Button>
                    <Button className="w-full" variant="outline">
                      Fault Isolation
                    </Button>
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

export default Control;
