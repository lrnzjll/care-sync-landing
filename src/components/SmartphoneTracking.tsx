import smartphoneImage from "@/assets/location-tracking.png";

const SmartphoneTracking = () => {
  return (
    <section className="section-padding bg-soft-sky/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
            Real-time Location Tracking
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Know where your loved ones are at all times. GPS tracking with geofencing alerts 
            and location history for complete peace of mind.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative max-w-sm">
            <img
              src={smartphoneImage}
              alt="CareSync smartphone app showing GPS location tracking interface with map and location markers"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-teal/5 rounded-3xl blur-2xl -z-10 scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartphoneTracking;