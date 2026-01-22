import { MessageCircle, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product, formatPrice, getWhatsAppLink } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      {/* Product Image Placeholder */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <div className="absolute inset-0 flex items-center justify-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground/30 transition-transform group-hover:scale-110" />
        </div>
        {/* Price Badge */}
        <div className="absolute right-3 top-3 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-md">
          {formatPrice(product.price)}
        </div>
      </div>

      <CardContent className="p-4">
        {/* Category Badge */}
        <span className="mb-2 inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
          {product.category}
        </span>
        
        {/* Title */}
        <h3 className="mb-2 font-display text-base font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        {/* Description */}
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        {/* WhatsApp Button */}
        <Button
          asChild
          className="w-full gap-2 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
        >
          <a href={getWhatsAppLink(product)} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
