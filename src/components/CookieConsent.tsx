import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface CookiePreferences {
  analytics: boolean;
  preferences: boolean;
  advertising: boolean;
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [cookiePrefs, setCookiePrefs] = useState<CookiePreferences>({
    analytics: false,
    preferences: false,
    advertising: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    saveConsent(cookiePrefs);
  };

  const handleRefuseAll = () => {
    saveConsent({
      analytics: false,
      preferences: false,
      advertising: false,
    });
  };

  const handleAcceptAll = () => {
    saveConsent({
      analytics: true,
      preferences: true,
      advertising: true,
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="glass electric-border rounded-lg p-6 max-w-2xl mx-4 shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300">
        <h2 className="text-2xl font-bold text-foreground mb-4">Cookie settings</h2>
        
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          Our website uses cookies which are necessary for running the website and for providing the services you 
          request. We would also like to set the following optional cookies on your device. You can change these 
          settings any time later by clicking "Change cookie settings" at the bottom of any page. For more 
          information, please read our{" "}
          <a href="#" className="text-primary underline hover:text-primary/80 transition-colors">
            Cookie Information.
          </a>
        </p>

        <div className="space-y-5 mb-6">
          {/* Analytics */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="analytics"
              checked={cookiePrefs.analytics}
              onCheckedChange={(checked) =>
                setCookiePrefs((prev) => ({ ...prev, analytics: checked === true }))
              }
              className="mt-1 border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <div className="flex-1">
              <label htmlFor="analytics" className="text-sm font-semibold text-foreground cursor-pointer">
                Analytics
              </label>
              <p className="text-sm text-muted-foreground mt-1">
                We collect statistics to understand how many visitors we have, how our visitors interact with the site and 
                how we can improve it. The collected data does not directly identify anyone.
              </p>
            </div>
          </div>

          {/* Preferences */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="preferences"
              checked={cookiePrefs.preferences}
              onCheckedChange={(checked) =>
                setCookiePrefs((prev) => ({ ...prev, preferences: checked === true }))
              }
              className="mt-1 border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <div className="flex-1">
              <label htmlFor="preferences" className="text-sm font-semibold text-foreground cursor-pointer">
                Preferences
              </label>
              <p className="text-sm text-muted-foreground mt-1">
                We store choices you have made so that they are remembered across visits in order to provide you a more 
                personalized experience.
              </p>
            </div>
          </div>

          {/* Advertising and tracking */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="advertising"
              checked={cookiePrefs.advertising}
              onCheckedChange={(checked) =>
                setCookiePrefs((prev) => ({ ...prev, advertising: checked === true }))
              }
              className="mt-1 border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <div className="flex-1">
              <label htmlFor="advertising" className="text-sm font-semibold text-foreground cursor-pointer">
                Advertising and tracking
              </label>
              <p className="text-sm text-muted-foreground mt-1">
                Your browsing behavior is tracked across websites by advertising and social network service providers. 
                You may see tailored advertising and content on other websites based on your browsing profile.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={handleAcceptSelected}
            className="border-border text-foreground hover:bg-muted"
          >
            Accept selected
          </Button>
          <Button
            variant="outline"
            onClick={handleRefuseAll}
            className="border-border text-foreground hover:bg-muted"
          >
            Refuse all
          </Button>
          <Button
            onClick={handleAcceptAll}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Accept all
          </Button>
        </div>
      </div>
    </div>
  );
}
