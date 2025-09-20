import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Smartphone, Clock, Heart } from "lucide-react";
import heroImage from "@/assets/caresync-prototype-v2.png";

const Hero = () => {
  const trustBadges = [
    { icon: Clock, text: "30-day trial" },
    { icon: Shield, text: "GDPR-grade privacy" },
    { icon: Heart, text: "Emergency network ready" },
    { icon: Smartphone, text: "iOS & Android" },
  ];

  return (
    <section className="hero-gradient section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-deep-navy">
                Independence for them.{" "}
                <span className="text-teal">Peace of mind</span> for you.
              </h1>
              
              <p className="text-lg md:text-xl text-slate leading-relaxed max-w-2xl">
                Voice-first reminders, vitals monitoring, emergency help, and family updates. 
                CareSync keeps seniors safe and connected while maintaining their independence.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="cta-primary" 
                size="cta"
                data-event-id="hero-waitlist-cta"
                className="shadow-lg hover:shadow-xl"
              >
                Join the Waitlist
              </Button>
              <Button 
                variant="cta-secondary" 
                size="cta"
                data-event-id="hero-demo-cta"
              >
                See How It Works
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
              {trustBadges.map((badge, index) => (
                <div key={index} className="trust-badge">
                  <badge.icon size={16} />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="CareSync prototype device - white and gray smart care band with emergency button"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-warm-sand/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;