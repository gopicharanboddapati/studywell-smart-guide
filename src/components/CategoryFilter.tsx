import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { bookCategories, tshirtCategories } from '../data/products';

interface CategoryFilterProps {
  activeCategory: string;
  activeSubcategory: string;
  onCategoryChange: (category: string) => void;
  onSubcategoryChange: (subcategory: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  activeSubcategory,
  onCategoryChange,
  onSubcategoryChange
}) => {
  const getSubcategories = () => {
    if (activeCategory === 'books') return bookCategories;
    if (activeCategory === 'tshirts') return tshirtCategories;
    return [];
  };

  return (
    <div className="space-y-4 p-4 bg-card rounded-lg border">
      {/* Main Categories */}
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange('all')}
          >
            All Products
          </Button>
          <Button
            variant={activeCategory === 'books' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange('books')}
          >
            Books
          </Button>
          <Button
            variant={activeCategory === 'tshirts' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange('tshirts')}
          >
            T-Shirts
          </Button>
        </div>
      </div>

      {/* Subcategories */}
      {activeCategory !== 'all' && (
        <div>
          <h4 className="font-medium mb-2">
            {activeCategory === 'books' ? 'Book Genres' : 'T-Shirt Styles'}
          </h4>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={activeSubcategory === 'all' ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => onSubcategoryChange('all')}
            >
              All
            </Badge>
            {getSubcategories().map((subcategory) => (
              <Badge
                key={subcategory}
                variant={activeSubcategory === subcategory ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => onSubcategoryChange(subcategory)}
              >
                {subcategory}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};