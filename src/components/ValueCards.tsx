import { Heart, Users, Star } from "lucide-react";

const ValueCards = () => {
  const cards = [
    {
      icon: Heart,
      title: "For Seniors",
      description: "Voice-first design means no complicated screens or buttons. Just speak naturally to get reminders, check vitals, or call for help.",
      features: ["Simple voice commands", "Medication reminders", "Emergency assistance", "Health monitoring"]
    },
    {
      icon: Users,
      title: "For Families", 
      description: "Real-time health updates and emergency alerts give you peace of mind while respecting their independence and privacy.",
      features: ["Health status updates", "Emergency notifications", "Activity insights", "Privacy controls"]
    },
    {
      icon: Star,
      title: "The Difference",
      description: "Unlike complex smartwatches or intrusive monitoring systems, CareSync balances safety with dignity and independence.",
      features: ["Voice-first interface", "Non-intrusive design", "Family coordination", "Emergency ready"]
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy">
            Designed for everyone in the family
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            CareSync bridges the gap between independence and safety, providing solutions that work for both seniors and their loved ones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 card-shadow feature-card">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-soft-sky rounded-2xl flex items-center justify-center">
                  <card.icon className="w-8 h-8 text-teal" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-deep-navy">{card.title}</h3>
                  <p className="text-slate leading-relaxed">{card.description}</p>
                </div>

                <ul className="space-y-3">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-slate">
                      <div className="w-2 h-2 bg-teal rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueCards;