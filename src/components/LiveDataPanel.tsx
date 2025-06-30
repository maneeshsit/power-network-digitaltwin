
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface LiveData {
  id: string;
  source: string;
  type: 'SCADA' | 'IoT' | 'Smart Meter' | 'GIS' | 'ERP';
  value: number;
  unit: string;
  status: 'active' | 'inactive';
  lastUpdate: Date;
}

export function LiveDataPanel() {
  const [dataStreams, setDataStreams] = useState<LiveData[]>([
    { id: '1', source: 'SCADA Primary', type: 'SCADA', value: 13.8, unit: 'kV', status: 'active', lastUpdate: new Date() },
    { id: '2', source: 'Temperature Sensor', type: 'IoT', value: 75.2, unit: '°C', status: 'active', lastUpdate: new Date() },
    { id: '3', source: 'Smart Meter Grid A', type: 'Smart Meter', value: 1250, unit: 'kWh', status: 'active', lastUpdate: new Date() },
    { id: '4', source: 'Asset Location DB', type: 'GIS', value: 99.8, unit: '%', status: 'active', lastUpdate: new Date() },
    { id: '5', source: 'Work Order System', type: 'ERP', value: 12, unit: 'pending', status: 'active', lastUpdate: new Date() },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataStreams(prev => prev.map(stream => ({
        ...stream,
        value: stream.value + (Math.random() - 0.5) * (stream.value * 0.1),
        lastUpdate: new Date(),
      })));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'SCADA': return 'bg-blue-500/20 text-blue-400';
      case 'IoT': return 'bg-green-500/20 text-green-400';
      case 'Smart Meter': return 'bg-purple-500/20 text-purple-400';
      case 'GIS': return 'bg-orange-500/20 text-orange-400';
      case 'ERP': return 'bg-pink-500/20 text-pink-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <Card className="glass electric-border">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Live Data Integration
          <Badge variant="secondary" className="bg-green-500/20 text-green-400 animate-pulse">
            {dataStreams.filter(s => s.status === 'active').length} Active Streams
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {dataStreams.map((stream) => (
            <div key={stream.id} className="glass-dark rounded-lg p-4 border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="font-medium text-sm">{stream.source}</span>
                </div>
                <Badge className={getTypeColor(stream.type)}>
                  {stream.type}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-primary">
                    {stream.value.toFixed(1)}
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">
                    {stream.unit}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">
                    Updated {stream.lastUpdate.toLocaleTimeString()}
                  </div>
                </div>
              </div>
              
              {stream.type === 'Smart Meter' && (
                <div className="mt-2">
                  <Progress value={65} className="h-1" />
                  <div className="text-xs text-muted-foreground mt-1">
                    Daily usage: 65% of limit
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
