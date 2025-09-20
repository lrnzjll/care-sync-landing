const SocialProof = () => {
  const stats = [
    { number: "2.3M", label: "Seniors need daily reminders" },
    { number: "87%", label: "Family worry about safety" },
    { number: "45%", label: "Forget medications daily" },
  ];

  return (
    <section className="section-padding bg-deep-navy">
      <div className="container-custom">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Millions of families share the same concerns
            </h2>
            <p className="text-lg text-soft-sky max-w-3xl mx-auto">
              Aging shouldn't mean losing independence. Current solutions are either too complex 
              or don't provide families with the peace of mind they need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-teal">
                  {stat.number}
                </div>
                <div className="text-soft-sky">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;