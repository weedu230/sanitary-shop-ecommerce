import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';

export const FeaturedProducts = () => {
  // Select featured products (variety from different categories, higher priced items)
  const featuredProducts = [
    products.find((p) => p.id === 7),   // Smart Toilet
    products.find((p) => p.id === 84),  // Jacuzzi Tub
    products.find((p) => p.id === 72),  // Rain Shower
    products.find((p) => p.id === 67),  // LED Mirror
    products.find((p) => p.id === 56),  // Pull-out Sink Mixer
    products.find((p) => p.id === 239), // Vanity Unit
    products.find((p) => p.id === 89),  // Shower Glass Cabin
    products.find((p) => p.id === 114), // Shower Panel
  ].filter(Boolean);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="mb-2 font-display text-3xl font-bold text-foreground md:text-4xl">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Our most popular and premium bathroom solutions
            </p>
          </div>
          <Button asChild variant="outline" className="gap-2">
            <Link to="/products">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product!.id} product={product!} />
          ))}
        </div>
      </div>
    </section>
  );
};
