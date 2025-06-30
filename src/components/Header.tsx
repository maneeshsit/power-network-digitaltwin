
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { bell, wifi } from "lucide-react";

export function Header() {
  return (
    <header className="h-14 border-b border-white/10 glass-dark flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm text-muted-foreground">System Online</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <wifi className="w-3 h-3" />
          <span>SCADA Connected</span>
        </div>
        <Button variant="ghost" size="sm" className="relative">
          <bell className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
      </div>
    </header>
  );
}
