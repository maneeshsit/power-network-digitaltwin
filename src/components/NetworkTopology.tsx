
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NetworkNode {
  id: string;
  type: 'substation' | 'transformer' | 'feeder' | 'meter' | 'switch';
  name: string;
  status: 'online' | 'offline' | 'warning';
  load: number;
  voltage: number;
  x: number;
  y: number;
}

const mockNodes: NetworkNode[] = [
  { id: '1', type: 'substation', name: 'Main Substation', status: 'online', load: 85, voltage: 138, x: 200, y: 100 },
  { id: '2', type: 'transformer', name: 'TX-001', status: 'online', load: 72, voltage: 13.8, x: 150, y: 200 },
  { id: '3', type: 'transformer', name: 'TX-002', status: 'warning', load: 91, voltage: 13.2, x: 250, y: 200 },
  { id: '4', type: 'feeder', name: 'F-101', status: 'online', load: 68, voltage: 13.8, x: 100, y: 300 },
  { id: '5', type: 'feeder', name: 'F-102', status: 'online', load: 75, voltage: 13.7, x: 200, y: 300 },
  { id: '6', type: 'feeder', name: 'F-103', status: 'offline', load: 0, voltage: 0, x: 300, y: 300 },
  { id: '7', type: 'meter', name: 'SM-001', status: 'online', load: 45, voltage: 240, x: 80, y: 400 },
  { id: '8', type: 'meter', name: 'SM-002', status: 'online', load: 52, voltage: 238, x: 180, y: 400 },
  { id: '9', type: 'switch', name: 'SW-001', status: 'online', load: 0, voltage: 13.8, x: 150, y: 250 },
];

const connections = [
  { from: '1', to: '2' },
  { from: '1', to: '3' },
  { from: '2', to: '9' },
  { from: '9', to: '4' },
  { from: '9', to: '5' },
  { from: '3', to: '6' },
  { from: '4', to: '7' },
  { from: '5', to: '8' },
];

export function NetworkTopology() {
  const [nodes, setNodes] = useState<NetworkNode[]>(mockNodes);
  const [selectedNode, setSelectedNode] = useState<NetworkNode | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => ({
        ...node,
        load: Math.max(0, Math.min(100, node.load + (Math.random() - 0.5) * 5)),
        voltage: node.voltage > 0 ? node.voltage + (Math.random() - 0.5) * 0.5 : 0,
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getNodeColor = (status: string) => {
    switch (status) {
      case 'online': return '#10b981';
      case 'warning': return '#f59e0b';
      case 'offline': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'substation': return '🏭';
      case 'transformer': return '⚡';
      case 'feeder': return '🔌';
      case 'meter': return '📊';
      case 'switch': return '🔄';
      default: return '⚪';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 glass electric-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Network Topology
            <Badge variant="secondary" className="bg-green-500/20 text-green-400">
              Live
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-96 bg-gray-900/50 rounded-lg overflow-hidden">
            <svg className="absolute inset-0 w-full h-full">
              {/* Render connections */}
              {connections.map((conn, index) => {
                const fromNode = nodes.find(n => n.id === conn.from);
                const toNode = nodes.find(n => n.id === conn.to);
                if (!fromNode || !toNode) return null;
                
                return (
                  <line
                    key={index}
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke="rgba(14, 165, 233, 0.5)"
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                );
              })}
              
              {/* Render nodes */}
              {nodes.map((node) => (
                <g key={node.id}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="15"
                    fill={getNodeColor(node.status)}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => setSelectedNode(node)}
                  />
                  <text
                    x={node.x}
                    y={node.y - 25}
                    textAnchor="middle"
                    className="fill-white text-xs font-medium"
                  >
                    {node.name}
                  </text>
                  <text
                    x={node.x}
                    y={node.y + 5}
                    textAnchor="middle"
                    className="fill-white text-lg"
                  >
                    {getNodeIcon(node.type)}
                  </text>
                </g>
              ))}
            </svg>
            
            {/* Data flow animation */}
            <div className="absolute inset-0 pointer-events-none">
              {connections.map((conn, index) => {
                const fromNode = nodes.find(n => n.id === conn.from);
                const toNode = nodes.find(n => n.id === conn.to);
                if (!fromNode || !toNode) return null;
                
                return (
                  <div
                    key={index}
                    className="absolute w-2 h-2 bg-primary rounded-full animate-data-flow"
                    style={{
                      left: fromNode.x,
                      top: fromNode.y,
                      animationDelay: `${index * 0.5}s`
                    }}
                  />
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Node Details Panel */}
      <Card className="glass electric-border">
        <CardHeader>
          <CardTitle>Asset Details</CardTitle>
        </CardHeader>
        <CardContent>
          {selectedNode ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{getNodeIcon(selectedNode.type)}</span>
                <div>
                  <h3 className="font-semibold">{selectedNode.name}</h3>
                  <p className="text-sm text-muted-foreground capitalize">{selectedNode.type}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <Badge 
                    variant={selectedNode.status === 'online' ? 'default' : 'destructive'}
                    className={
                      selectedNode.status === 'online' ? 'bg-green-500/20 text-green-400' :
                      selectedNode.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }
                  >
                    {selectedNode.status}
                  </Badge>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Load:</span>
                  <span className="text-sm font-medium">{selectedNode.load.toFixed(1)}%</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Voltage:</span>
                  <span className="text-sm font-medium">{selectedNode.voltage.toFixed(1)}V</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                    style={{ width: `${selectedNode.load}%` }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">
              Click on a network node to view details
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
