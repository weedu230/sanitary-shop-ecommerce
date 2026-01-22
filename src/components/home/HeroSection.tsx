import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle, ShieldCheck, Truck, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { phoneNumber, whatsappNumber } from '@/data/products';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 translate-y-1/2 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-success animate-pulse" />
              Trusted Since 1995
            </div>

            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Quality{' '}
              <span className="text-gradient">Sanitary Fittings</span>{' '}
              for Your Home
            </h1>

            <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-xl mx-auto lg:mx-0">
              Pakistan's premier destination for bathroom fixtures, plumbing supplies, and water fittings. 
              Wholesale & retail prices.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button asChild size="lg" className="gap-2 gradient-primary text-primary-foreground shadow-lg hover:opacity-90">
                <Link to="/products">
                  Browse Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8">
              <div>
                <p className="font-display text-2xl font-bold text-foreground md:text-3xl">300+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-foreground md:text-3xl">25+</p>
                <p className="text-sm text-muted-foreground">Years</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-foreground md:text-3xl">10K+</p>
                <p className="text-sm text-muted-foreground">Customers</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-accent/20 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
              
              {/* Center content */}
              <div className="absolute inset-16 flex items-center justify-center rounded-full bg-card shadow-xl border border-border">
                <div className="text-center p-8">
                  <span className="text-6xl mb-4 block animate-float">🚿</span>
                  <p className="font-display font-bold text-foreground">Usman Sanitary</p>
                  <p className="text-sm text-muted-foreground">Premium Quality</p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-1/4 rounded-xl bg-card p-4 shadow-lg border border-border animate-float" style={{ animationDelay: '0.5s' }}>
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute -right-4 top-1/3 rounded-xl bg-card p-4 shadow-lg border border-border animate-float" style={{ animationDelay: '1s' }}>
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <div className="absolute bottom-1/4 -left-4 rounded-xl bg-card p-4 shadow-lg border border-border animate-float" style={{ animationDelay: '1.5s' }}>
                <Award className="h-8 w-8 text-success" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-t border-border bg-card/50 backdrop-blur">
        <div className="container py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>Genuine Products</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span>Nationwide Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Best Prices Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <a href={`tel:${phoneNumber}`} className="hover:text-foreground transition-colors">
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
