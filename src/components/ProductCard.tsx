import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '../data/products';
import { useCart } from '../hooks/useCart';
import { toast } from '@/components/ui/use-toast';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onProductClick 
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <Card 
      className="group cursor-pointer overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1"
      onClick={() => onProductClick(product)}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay buttons */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <Button
            size="icon"
            variant="secondary"
            onClick={handleWishlist}
            className="bg-white/90 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            onClick={handleAddToCart}
            className="bg-primary hover:bg-primary/90"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>

        {/* Stock badge */}
        {product.stock < 10 && (
          <Badge 
            variant="destructive" 
            className="absolute top-2 left-2"
          >
            Only {product.stock} left
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <Badge variant="outline" className="text-xs">
            {product.subcategory}
          </Badge>
          
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          {product.author && (
            <p className="text-xs text-muted-foreground">
              by {product.author}
            </p>
          )}
          
          <p className="text-xs text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews})
            </span>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <span className="font-bold text-lg text-primary">
              ${product.price}
            </span>
            {product.sizes && (
              <span className="text-xs text-muted-foreground">
                {product.sizes.length} sizes
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};