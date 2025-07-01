
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { NetworkTopology } from "@/components/NetworkTopology";
import { LiveDataPanel } from "@/components/LiveDataPanel";
import { SystemMetrics } from "@/components/SystemMetrics";
import { AlertsPanel } from "@/components/AlertsPanel";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 p-6 space-y-6 overflow-auto">
            {/* Hero Section */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Distribution Network Digital Twin
              </h1>
              <p className="text-muted-foreground">
                Real-time monitoring and control of the entire electrical distribution infrastructure
              </p>
            </div>

            {/* System Metrics */}
            <SystemMetrics />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
              {/* Network Topology - Takes up most space */}
              <div className="xl:col-span-3">
                <NetworkTopology />
              </div>

              {/* Live Data Panel */}
              <div>
                <LiveDataPanel />
              </div>
            </div>

            {/* Horizontal Analysis Panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {/* Load Flow Analysis */}
              <div className="glass electric-border rounded-lg p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="text-blue-400">📊</span>
                  Load Flow Analysis
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Peak Load Forecast:</span>
                    <span className="text-primary font-medium">1.2MW</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Network Efficiency:</span>
                    <span className="text-green-400 font-medium">94.2%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Critical Path:</span>
                    <span className="text-yellow-400 font-medium">TX-002</span>
                  </div>
                </div>
              </div>

              {/* Outage Simulation */}
              <div className="glass electric-border rounded-lg p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="text-green-400">⚡</span>
                  Outage Simulation
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Impact Radius:</span>
                    <span className="text-primary font-medium">2.5km</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Affected Customers:</span>
                    <span className="text-orange-400 font-medium">1,247</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Recovery Time:</span>
                    <span className="text-yellow-400 font-medium">45 min</span>
                  </div>
                </div>
              </div>

              {/* Optimization */}
              <div className="glass electric-border rounded-lg p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="text-purple-400">🎯</span>
                  Optimization
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Load Balance:</span>
                    <span className="text-green-400 font-medium">Optimal</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Voltage Stability:</span>
                    <span className="text-green-400 font-medium">98.7%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Energy Savings:</span>
                    <span className="text-primary font-medium">$2,340</span>
                  </div>
                </div>
              </div>

              {/* System Alerts */}
              <div>
                <AlertsPanel />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
