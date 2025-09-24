import { useState } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ProductGrid } from "../components/ProductGrid";
import { CategoryFilter } from "../components/CategoryFilter";
import { ProductDetail } from "../components/ProductDetail";
import { Cart } from "../components/Cart";
import { Chatbot } from "../components/Chatbot";
import { allProducts, Product } from "../data/products";

export default function Index() {
  const [currentView, setCurrentView] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubcategory, setActiveSubcategory] = useState("all");

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (product.author && product.author.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSubcategory = activeSubcategory === "all" || product.subcategory === activeSubcategory;
    
    return matchesSearch && matchesCategory && matchesSubcategory;
  });

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsSidebarOpen(true)}
      />

      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          currentView={currentView}
          onViewChange={setCurrentView}
        />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              <aside className="lg:w-64">
                <CategoryFilter
                  activeCategory={activeCategory}
                  activeSubcategory={activeSubcategory}
                  onCategoryChange={(category) => {
                    setActiveCategory(category);
                    setActiveSubcategory("all");
                  }}
                  onSubcategoryChange={setActiveSubcategory}
                />
              </aside>

              <div className="flex-1">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold mb-2">
                    {activeCategory === "all" ? "All Products" : 
                     activeCategory === "books" ? "Books" : "T-Shirts"}
                  </h1>
                  <p className="text-muted-foreground">
                    {filteredProducts.length} products found
                  </p>
                </div>

                <ProductGrid
                  products={filteredProducts}
                  onProductClick={setSelectedProduct}
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Chatbot />
    </div>
  );
}