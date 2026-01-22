import { Award, Users, Target, Clock, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/home/CTASection';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
              About <span className="text-gradient">Usman Sanitary Store</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Serving Pakistan with quality bathroom fittings and plumbing solutions since 1995.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 font-display text-3xl font-bold text-foreground">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Usman Sanitary Store began in 1995 as a small shop in Karachi's bustling Saddar Bazar. 
                    Founded by Usman Ahmed, our mission was simple: provide quality sanitary products at fair prices.
                  </p>
                  <p>
                    Over the past 25+ years, we've grown from a local retailer to one of Pakistan's most trusted 
                    sanitary suppliers. Today, we serve thousands of customers nationwide, from homeowners to 
                    contractors and builders.
                  </p>
                  <p>
                    Our commitment to quality, competitive pricing, and exceptional customer service has made us 
                    the go-to destination for all bathroom and plumbing needs.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-secondary flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-8xl block mb-4">🏪</span>
                    <p className="font-display text-xl font-bold text-foreground">Est. 1995</p>
                    <p className="text-muted-foreground">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, value: '25+', label: 'Years in Business' },
              { icon: Users, value: '10,000+', label: 'Happy Customers' },
              { icon: Target, value: '300+', label: 'Products Available' },
              { icon: Award, value: '100%', label: 'Genuine Products' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <stat.icon className="h-7 w-7" />
                </div>
                <p className="font-display text-3xl font-bold text-foreground md:text-4xl">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground">
              Our Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Quality First',
                description: 'We only stock products from trusted manufacturers. Every item goes through quality checks.',
              },
              {
                title: 'Fair Pricing',
                description: 'Competitive wholesale and retail prices. No hidden charges. Best value guaranteed.',
              },
              {
                title: 'Customer Focus',
                description: 'Your satisfaction is our priority. Expert guidance and after-sales support always.',
              },
            ].map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 text-success">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
