import { Apple, Smartphone } from "lucide-react";

export function DownloadAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 glass electric-border rounded-xl p-4 shadow-2xl animate-in slide-in-from-bottom-5 duration-500 min-w-[220px]">
      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">
        Download the App
      </p>

      <div className="flex flex-col gap-2">
        {/* Google Play Button */}
        <a
          href="#"
          className="flex items-center gap-3 bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/40 rounded-lg px-3 py-2 group"
        >
          <Smartphone className="w-5 h-5 text-primary shrink-0" />
          <div className="flex flex-col items-start leading-none">
            <span className="text-[9px] text-muted-foreground uppercase tracking-wide">
              Get it on
            </span>
            <span className="text-xs font-semibold text-foreground mt-0.5">
              Google Play
            </span>
          </div>
        </a>

        {/* App Store Button */}
        <a
          href="#"
          className="flex items-center gap-3 bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/40 rounded-lg px-3 py-2 group"
        >
          <Apple className="w-5 h-5 text-primary shrink-0" />
          <div className="flex flex-col items-start leading-none">
            <span className="text-[9px] text-muted-foreground uppercase tracking-wide">
              Download on the
            </span>
            <span className="text-xs font-semibold text-foreground mt-0.5">
              App Store
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
