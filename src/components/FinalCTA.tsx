import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-deep-navy">
      <div className="container-custom">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Ready to give your family peace of mind?
            </h2>
            <p className="text-lg md:text-xl text-soft-sky leading-relaxed">
              Join thousands of families who've discovered the perfect balance between independence and safety. 
              CareSync is launching soon - secure your spot on the waitlist today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta-primary" 
              size="cta"
              data-event-id="final-waitlist-cta"
              className="bg-teal hover:bg-teal/90"
            >
              Join the Waitlist - Free
            </Button>
            <Button 
              variant="cta-secondary" 
              size="cta"
              data-event-id="final-demo-cta"
              className="border-white text-white hover:bg-white hover:text-deep-navy"
            >
              Schedule a Demo
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-teal">No Setup Fees</div>
              <div className="text-soft-sky">Ready to use out of the box</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-teal">30-Day Trial</div>
              <div className="text-soft-sky">Risk-free guarantee</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-teal">24/7 Support</div>
              <div className="text-soft-sky">Always here to help</div>
            </div>
          </div>

          <p className="text-sm text-soft-sky/80 pt-4">
            By joining the waitlist, you'll be first to know when CareSync launches and receive exclusive early-bird pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;