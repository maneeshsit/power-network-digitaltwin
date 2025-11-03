import { Apple, PlayCircle } from "lucide-react";

export function DownloadAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 glass electric-border rounded-lg p-4 shadow-2xl animate-in slide-in-from-bottom-5 duration-500">
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-foreground whitespace-nowrap">
          Download the App
        </span>
        
        <div className="flex flex-col gap-2">
          {/* Google Play Button */}
          <a
            href="#"
            className="flex items-center gap-2 bg-card hover:bg-primary/10 transition-colors border border-primary/30 rounded-md px-3 py-2 group"
          >
            <PlayCircle className="w-5 h-5 text-primary" />
            <div className="flex flex-col items-start">
              <span className="text-[8px] text-muted-foreground uppercase leading-none">
                Get it on
              </span>
              <span className="text-xs font-semibold text-foreground leading-tight">
                Google Play
              </span>
            </div>
          </a>

          {/* App Store Button */}
          <a
            href="#"
            className="flex items-center gap-2 bg-card hover:bg-primary/10 transition-colors border border-primary/30 rounded-md px-3 py-2 group"
          >
            <Apple className="w-5 h-5 text-primary" />
            <div className="flex flex-col items-start">
              <span className="text-[8px] text-muted-foreground uppercase leading-none">
                Download on the
              </span>
              <span className="text-xs font-semibold text-foreground leading-tight">
                App Store
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
