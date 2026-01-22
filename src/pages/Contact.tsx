import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { phoneNumber, whatsappNumber, storeAddress, storeEmail } from '@/data/products';

const businessHours = [
  { day: 'Monday', hours: '9:00 AM - 9:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 9:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 9:00 PM' },
  { day: 'Thursday', hours: '9:00 AM - 9:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 9:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 9:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

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
              Have questions? We're here to help! Reach out to us via WhatsApp, phone, or visit our store.
            </p>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-center font-display text-2xl font-bold text-foreground">
            Get in Touch
          </h2>
          
          {/* Contact Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {/* Phone */}
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">Phone</h3>
                <p className="mb-4 text-sm text-muted-foreground">{phoneNumber}</p>
                <Button asChild variant="outline" className="w-full">
                  <a href={`tel:${phoneNumber}`}>Call Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-whatsapp/10 text-whatsapp">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">WhatsApp</h3>
                <p className="mb-4 text-sm text-muted-foreground">{phoneNumber}</p>
                <Button asChild className="w-full bg-whatsapp hover:bg-whatsapp/90">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    Chat Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">Email</h3>
                <p className="mb-4 text-sm text-muted-foreground">{storeEmail}</p>
                <Button asChild variant="outline" className="w-full">
                  <a href={`mailto:${storeEmail}`}>Send Email</a>
                </Button>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">Address</h3>
                <p className="mb-4 text-sm text-muted-foreground">{storeAddress}</p>
                <Button asChild variant="outline" className="w-full gap-1">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeAddress)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get Directions
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Business Hours & WhatsApp CTA */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Business Hours */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((item) => (
                    <div key={item.day} className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{item.day}</span>
                      <span className={item.hours === 'Closed' ? 'text-destructive' : 'text-muted-foreground'}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="border-border bg-whatsapp/5">
              <CardContent className="p-6 flex flex-col justify-center h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-whatsapp/10 text-whatsapp">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Chat with Us on WhatsApp</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Get instant responses to your questions. We're available during business hours to help you find the right products.
                </p>
                <Button asChild size="lg" className="bg-whatsapp hover:bg-whatsapp/90 w-full sm:w-auto">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Start Chat
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border py-16">
        <div className="container">
          <h2 className="mb-8 text-center font-display text-2xl font-bold text-foreground">
            Find Our Store
          </h2>
          <p className="mb-8 text-center text-muted-foreground">
            Visit us in person at our Lahore location
          </p>
          <div className="overflow-hidden rounded-2xl border border-border bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217898.66854026916!2d74.1698!3d31.4826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
