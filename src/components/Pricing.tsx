import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "CareSync Device",
      type: "One-time",
      price: "$299",
      description: "Smart care band with all hardware features",
      features: [
        "Voice-controlled interface",
        "Health monitoring sensors", 
        "Emergency SOS button",
        "7-day battery life",
        "Waterproof design",
        "Wireless charging dock"
      ],
      popular: false
    },
    {
      name: "CareSync Service",
      type: "Monthly",
      price: "$29",
      priceNote: "/month",
      description: "Full monitoring and family connection features",
      features: [
        "24/7 emergency monitoring",
        "Family dashboard access",
        "Health insights & reports",
        "Medication reminders",
        "Location services",
        "Priority customer support"
      ],
      popular: true
    },
    {
      name: "Add-ons",
      type: "Optional",
      price: "From $9",
      priceNote: "/month",
      description: "Enhanced features for specific needs",
      features: [
        "Advanced health analytics",
        "Caregiver portal access",
        "Medical alert service",
        "Fall detection plus",
        "Multiple emergency contacts",
        "Custom care protocols"
      ],
      popular: false
    }
  ];

  return (
    <section className="section-padding bg-warm-sand/30">
      <div className="container-custom">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Start with the device, add the service for full features, customize with add-ons as needed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 card-shadow relative ${plan.popular ? 'ring-2 ring-teal' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal text-white">
                  Most Popular
                </Badge>
              )}
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-deep-navy">{plan.name}</h3>
                  <div className="text-sm text-slate">{plan.type}</div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-deep-navy">{plan.price}</span>
                    {plan.priceNote && <span className="text-slate">{plan.priceNote}</span>}
                  </div>
                  <p className="text-sm text-slate">{plan.description}</p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "cta-primary" : "cta-secondary"}
                  size="cta"
                  className="w-full"
                  data-event-id={`pricing-${plan.name.toLowerCase().replace(' ', '-')}-cta`}
                >
                  {plan.type === "One-time" ? "Pre-order Device" : 
                   plan.type === "Monthly" ? "Start Service" : "Add Features"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-sm text-slate">
            30-day money-back guarantee • Cancel service anytime • Device warranty included
          </p>
          <Button variant="link" className="text-teal">
            View detailed comparison →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;