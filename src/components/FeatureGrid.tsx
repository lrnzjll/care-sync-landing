import { 
  Mic, 
  Heart, 
  Phone, 
  Shield, 
  MapPin, 
  Clock, 
  Users, 
  Battery 
} from "lucide-react";

const FeatureGrid = () => {
  const features = [
    {
      icon: Mic,
      title: "Voice Commands",
      description: "Natural speech recognition for all interactions - no complex menus or buttons."
    },
    {
      icon: Heart,
      title: "Vitals Monitoring", 
      description: "Continuous heart rate, activity levels, and sleep patterns with smart insights."
    },
    {
      icon: Phone,
      title: "Emergency SOS",
      description: "One-press emergency calling to family and emergency services with location."
    },
    {
      icon: Shield,
      title: "Privacy Protection",
      description: "GDPR-compliant data handling with granular family sharing controls."
    },
    {
      icon: MapPin,
      title: "Location Safety",
      description: "GPS tracking with geofencing alerts while respecting privacy boundaries."
    },
    {
      icon: Clock,
      title: "Smart Reminders",
      description: "Medication, appointment, and daily routine reminders via voice prompts."
    },
    {
      icon: Users,
      title: "Family Connect",
      description: "Secure family dashboard with health updates and communication tools."
    },
    {
      icon: Battery,
      title: "Week-Long Battery",
      description: "7-day battery life with wireless charging and low-power emergency mode."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy">
            Everything you need in one device
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            CareSync combines essential health monitoring, safety features, and family connectivity in a single, easy-to-use device.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 card-shadow feature-card">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-soft-sky rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-teal" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-bold text-deep-navy">{feature.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;