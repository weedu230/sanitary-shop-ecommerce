import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { categories, phoneNumber, whatsappNumber, storeAddress, storeEmail } from '@/data/products';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
                <span className="text-xl">🚿</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Usman Sanitary</h3>
                <p className="text-xs text-primary-foreground/70">Since 1999</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Your trusted partner for quality sanitary & bathroom fittings. Serving retail and wholesale customers across Pakistan.
            </p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 font-display font-semibold">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/products?category=${category.id}`}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/80">{storeAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary-foreground/70" />
                <a href={`tel:${phoneNumber}`} className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  {phoneNumber}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary-foreground/70" />
                <a href={`mailto:${storeEmail}`} className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  {storeEmail}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/80">
                  Mon-Sat: 9AM - 9PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-6">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Usman Sanitary Store. All rights reserved. | Wholesale & Retail
          </p>
        </div>
      </div>
    </footer>
  );
};
