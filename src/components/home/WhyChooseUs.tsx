import { ShieldCheck, Truck, BadgePercent, HeadphonesIcon, Wrench, Clock } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description: 'We source only genuine, high-quality hardware products from trusted manufacturers.',
  },
  {
    icon: BadgePercent,
    title: 'Best Prices',
    description: 'Competitive wholesale and retail prices across Pakistan.',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'We deliver to all major cities across Pakistan.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We\'re here to help you find the right products.',
  },
  {
    icon: Wrench,
    title: 'Expert Guidance',
    description: 'Our experienced staff can help you find the right products for your specific needs.',
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Fast WhatsApp response and same-day quotations.',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Why Choose Usman Hardware?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            What sets us apart from the rest
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-transform group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
