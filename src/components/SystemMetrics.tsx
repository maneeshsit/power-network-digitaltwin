
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { activity, gauge, wifi, signal } from "lucide-react";

interface Metric {
  id: string;
  label: string;
  value: number;
  unit: string;
  icon: any;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

export function SystemMetrics() {
  const [metrics, setMetrics] = useState<Metric[]>([
    { id: '1', label: 'System Load', value: 78.5, unit: '%', icon: gauge, trend: 'up', color: 'text-blue-400' },
    { id: '2', label: 'Network Health', value: 95.2, unit: '%', icon: signal, trend: 'stable', color: 'text-green-400' },
    { id: '3', label: 'Data Throughput', value: 1.2, unit: 'GB/s', icon: wifi, trend: 'up', color: 'text-purple-400' },
    { id: '4', label: 'Active Alerts', value: 3, unit: 'alerts', icon: activity, trend: 'down', color: 'text-orange-400' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: Math.max(0, metric.value + (Math.random() - 0.5) * 2),
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.id} className="glass electric-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-2xl font-bold">
                  {metric.value.toFixed(1)}
                  <span className="text-sm ml-1">{metric.unit}</span>
                </p>
              </div>
              <metric.icon className={`w-8 h-8 ${metric.color}`} />
            </div>
            
            <div className="flex items-center mt-2">
              <div className={`text-xs ${
                metric.trend === 'up' ? 'text-green-400' :
                metric.trend === 'down' ? 'text-red-400' :
                'text-gray-400'
              }`}>
                {metric.trend === 'up' ? '↗️' : metric.trend === 'down' ? '↘️' : '→'} 
                {metric.trend === 'stable' ? 'Stable' : 
                 metric.trend === 'up' ? '+2.1%' : '-1.5%'}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
