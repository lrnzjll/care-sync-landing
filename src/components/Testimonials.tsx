import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Margaret Chen",
      age: "72",
      location: "San Francisco, CA",
      quote: "Finally, technology that doesn't make me feel stupid. I just talk to it like a person, and it understands exactly what I need.",
      rating: 5,
      relationship: "Senior user"
    },
    {
      name: "David Rodriguez",
      age: "48", 
      location: "Austin, TX",
      quote: "The peace of mind is incredible. I get just enough information about Mom's health without feeling like I'm invading her privacy.",
      rating: 5,
      relationship: "Son of user"
    },
    {
      name: "Eleanor Thompson",
      age: "78",
      location: "Portland, OR", 
      quote: "When I had my fall, help arrived in minutes. My daughter knew immediately. It's like having family nearby even when they're not.",
      rating: 5,
      relationship: "Senior user"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy">
            Real stories from real families
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            See how CareSync is making a difference in the lives of seniors and their families.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 card-shadow">
              <div className="space-y-6">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-teal" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="space-y-1">
                  <div className="font-semibold text-deep-navy">
                    {testimonial.name}, {testimonial.age}
                  </div>
                  <div className="text-sm text-slate">
                    {testimonial.location}
                  </div>
                  <div className="text-xs text-teal font-medium">
                    {testimonial.relationship}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;