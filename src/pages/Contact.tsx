import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { phoneNumber, whatsappNumber, storeAddress, storeEmail } from '@/data/products';

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="border-b border-border bg-card py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Get in touch for inquiries, orders, or technical support. We're here to help!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our products or need a quote? Contact us via WhatsApp for 
                  the fastest response, or give us a call during business hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-whatsapp/10 text-whatsapp">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <h3 className="mb-1 font-semibold text-foreground">WhatsApp</h3>
                    <p className="mb-4 text-sm text-muted-foreground">Fastest response time</p>
                    <Button asChild className="w-full bg-whatsapp hover:bg-whatsapp/90">
                      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                        Chat Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <h3 className="mb-1 font-semibold text-foreground">Phone</h3>
                    <p className="mb-4 text-sm text-muted-foreground">Mon-Sat, 9AM-9PM</p>
                    <Button asChild variant="outline" className="w-full">
                      <a href={`tel:${phoneNumber}`}>
                        {phoneNumber}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Info */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href={`mailto:${storeEmail}`} className="text-sm text-muted-foreground hover:text-primary">
                      {storeEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Store Address</p>
                    <p className="text-sm text-muted-foreground">{storeAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Monday - Saturday: 9:00 AM - 9:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-border bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1015024456846!2d67.0299!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c2d!2sSaddar%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container">
          <h2 className="mb-8 text-center font-display text-2xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                q: 'How can I place an order?',
                a: 'Simply browse our products and click "Order on WhatsApp" button. You can also call or visit our store directly.',
              },
              {
                q: 'Do you deliver nationwide?',
                a: 'Yes, we deliver to all major cities across Pakistan. Delivery charges vary by location.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept cash on delivery, bank transfer, and easy paisa/jazzcash.',
              },
              {
                q: 'Do you offer installation services?',
                a: 'While we don\'t provide installation, we offer free technical guidance and can recommend trusted plumbers.',
              },
            ].map((faq) => (
              <div key={faq.q} className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
