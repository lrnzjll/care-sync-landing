import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How easy is CareSync to set up and use?",
      answer: "CareSync is designed for simplicity. The device comes pre-configured and pairs automatically with our app. Setup takes less than 10 minutes, and seniors only need to speak naturally - no training required."
    },
    {
      question: "What happens in an emergency?",
      answer: "Emergency detection automatically alerts family and emergency services. The SOS button provides instant connection to our 24/7 monitoring center, which coordinates with local emergency services and family members simultaneously."
    },
    {
      question: "How does family monitoring work while protecting privacy?",
      answer: "Families receive health summaries and emergency alerts, but seniors control what specific information is shared. Location sharing can be enabled/disabled, and all health data remains private unless explicitly shared."
    },
    {
      question: "What if the user has hearing or speech difficulties?",
      answer: "CareSync supports multiple interaction methods including voice commands, simple taps, and emergency button presses. The device can be configured for hearing aids and provides haptic feedback for important alerts."
    },
    {
      question: "How accurate is the health monitoring?",
      answer: "CareSync uses medical-grade sensors for heart rate and activity tracking. While not a replacement for medical devices, it provides reliable trends and can detect significant changes that warrant attention."
    },
    {
      question: "What's the battery life and charging process?",
      answer: "The device lasts 7 days on a single charge with normal use. Charging is simple with the included wireless charging dock - just place the device on the dock overnight. Emergency mode extends battery life up to 14 days."
    },
    {
      question: "Can I try CareSync risk-free?",
      answer: "Yes! We offer a 30-day money-back guarantee. If CareSync doesn't meet your needs, return the device for a full refund. The service can be cancelled anytime without penalties."
    }
  ];

  return (
    <section className="section-padding bg-soft-sky/20">
      <div className="container-custom">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy">
            Frequently asked questions
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Get answers to common questions about CareSync features, setup, and how it works for your family.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl border-0 card-shadow"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-deep-navy hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-slate leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;