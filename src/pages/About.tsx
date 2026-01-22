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
              About <span className="text-gradient">Usman Hardware</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Building Trust Since 2015 - Your one-stop shop for quality hardware supplies.
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
                    What started as a small hardware shop in Lahore has grown into a trusted destination 
                    for professionals and DIY enthusiasts alike. Founded in 2015, Usman Hardware has been 
                    committed to providing quality products at competitive prices.
                  </p>
                  <p>
                    Our journey began with a simple mission: to make quality hardware accessible to everyone. 
                    Today, we stock over 500 products across 16 categories, serving thousands of customers 
                    across Pakistan.
                  </p>
                  <p>
                    Whether you're a contractor working on a major project or a homeowner doing repairs, 
                    we have the tools and materials you need. Our knowledgeable staff is always ready to 
                    help you find the right product for your needs.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-secondary flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-8xl block mb-4">🔧</span>
                    <p className="font-display text-xl font-bold text-foreground">Usman Hardware</p>
                    <p className="text-muted-foreground">Quality • Trust • Service</p>
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
              { icon: Target, value: '500+', label: 'Products' },
              { icon: Clock, value: '9+', label: 'Years Experience' },
              { icon: Users, value: '1,000+', label: 'Happy Customers' },
              { icon: Award, value: '16', label: 'Categories' },
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
              What sets us apart from the rest
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Quality Guaranteed',
                description: 'We source only genuine, high-quality hardware products from trusted manufacturers.',
              },
              {
                title: 'Customer First',
                description: 'Our customers are at the heart of everything we do. Your satisfaction is our priority.',
              },
              {
                title: 'Expert Guidance',
                description: 'Our experienced staff can help you find the right products for your specific needs.',
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

      {/* Visit Store */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
              Visit Our Store
            </h2>
            <p className="mb-6 text-muted-foreground">Come see our products in person</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-2">Store Address</h3>
                <p className="text-muted-foreground">Shop #12, Main Bazaar,<br />Lahore, Pakistan</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 9:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
