import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { phoneNumber, whatsappNumber, storeAddress } from '@/data/products';

export const CTASection = () => {
  return (
    <section className="relative overflow-hidden gradient-primary py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Ready to Transform Your Bathroom?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80">
            Get in touch with us today for the best prices on quality sanitary fittings. 
            We're here to help you find the perfect products for your home.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="w-full gap-2 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground sm:w-auto"
            >
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full gap-2 sm:w-auto"
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="h-5 w-5" />
                Call: {phoneNumber}
              </a>
            </Button>
          </div>

          {/* Location */}
          <div className="mt-8 inline-flex items-center gap-2 text-primary-foreground/70">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{storeAddress}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
