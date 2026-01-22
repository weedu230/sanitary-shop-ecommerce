import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
  id: string;
  name: string;
  icon: string;
  description: string;
  productCount?: number;
}

export const CategoryCard = ({ id, name, icon, description, productCount }: CategoryCardProps) => {
  return (
    <Link to={`/products?category=${id}`}>
      <Card className="group h-full overflow-hidden border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary/20">
        <CardContent className="flex h-full flex-col p-6">
          {/* Icon */}
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-3xl transition-transform group-hover:scale-110">
            {icon}
          </div>
          
          {/* Content */}
          <h3 className="mb-2 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="mb-4 flex-1 text-sm text-muted-foreground">
            {description}
          </p>
          
          {/* Footer */}
          <div className="flex items-center justify-between">
            {productCount !== undefined && (
              <span className="text-sm font-medium text-muted-foreground">
                {productCount} products
              </span>
            )}
            <span className="flex items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
              View All
              <ChevronRight className="h-4 w-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
