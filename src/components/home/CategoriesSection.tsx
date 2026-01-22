import { categories, products } from '@/data/products';
import { CategoryCard } from '@/components/products/CategoryCard';

export const CategoriesSection = () => {
  const getCategoryCount = (categoryId: string) => {
    return products.filter((p) => p.category === categoryId).length;
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Shop by Category
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Browse our extensive collection of bathroom fixtures, plumbing supplies, and sanitary accessories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              icon={category.icon}
              description={category.description}
              productCount={getCategoryCount(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
