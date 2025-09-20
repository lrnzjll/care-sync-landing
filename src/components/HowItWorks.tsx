import { Mic, Activity, Shield } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Mic,
      step: "1",
      title: "Just Speak",
      description: "Voice commands for everything - reminders, health checks, emergency calls. No screens, no confusion."
    },
    {
      icon: Activity,
      step: "2", 
      title: "Stay Monitored",
      description: "Continuous vitals tracking with smart alerts. Family gets updates while privacy is maintained."
    },
    {
      icon: Shield,
      step: "3",
      title: "Get Help Fast", 
      description: "Emergency detection and one-touch SOS connects to family and emergency services instantly."
    }
  ];

  return (
    <section className="section-padding bg-soft-sky/30">
      <div className="container-custom">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy">
            How CareSync Works
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Three simple steps to transform senior care and family peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="relative mx-auto w-24 h-24">
                <div className="w-24 h-24 bg-teal rounded-2xl flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-deep-navy text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-deep-navy">{step.title}</h3>
                <p className="text-slate leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2 w-8">
                  <div className="h-0.5 bg-teal/30 w-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;