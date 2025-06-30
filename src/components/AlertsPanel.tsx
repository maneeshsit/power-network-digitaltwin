
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Activity, Signal } from "lucide-react";

interface Alert {
  id: string;
  type: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  source: string;
  timestamp: Date;
  acknowledged: boolean;
}

export function AlertsPanel() {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      type: 'critical',
      title: 'Transformer Overload',
      description: 'TX-002 operating at 91% capacity - approaching critical threshold',
      source: 'SCADA System',
      timestamp: new Date(Date.now() - 300000),
      acknowledged: false
    },
    {
      id: '2',
      type: 'warning',
      title: 'Feeder Offline',
      description: 'F-103 has lost communication - last seen 15 minutes ago',
      source: 'Network Monitor',
      timestamp: new Date(Date.now() - 900000),
      acknowledged: false
    },
    {
      id: '3',
      type: 'info',
      title: 'Maintenance Scheduled',
      description: 'Routine maintenance on SW-001 scheduled for tomorrow 2:00 AM',
      source: 'Work Order System',
      timestamp: new Date(Date.now() - 1800000),
      acknowledged: true
    }
  ]);

  const acknowledgeAlert = (id: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === id ? { ...alert, acknowledged: true } : alert
    ));
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical': return Activity;
      case 'warning': return Signal;
      case 'info': return Bell;
      default: return Bell;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'warning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'info': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <Card className="glass electric-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="w-5 h-5" />
          System Alerts
          <Badge variant="secondary" className="bg-red-500/20 text-red-400">
            {alerts.filter(a => !a.acknowledged).length} Unacknowledged
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert) => {
            const AlertIcon = getAlertIcon(alert.type);
            return (
              <div
                key={alert.id}
                className={`p-4 rounded-lg border ${getAlertColor(alert.type)} ${
                  alert.acknowledged ? 'opacity-60' : 'animate-pulse-glow'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <AlertIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">{alert.title}</h4>
                      <p className="text-xs text-muted-foreground">{alert.description}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{alert.source}</span>
                        <span>•</span>
                        <span>{alert.timestamp.toLocaleTimeString()}</span>
                      </div>
                    </div>
                  </div>
                  {!alert.acknowledged && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => acknowledgeAlert(alert.id)}
                      className="text-xs"
                    >
                      Acknowledge
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
