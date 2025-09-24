export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  stock: number;
  images: string[];
  rating: number;
  reviews: number;
  // Book specific fields
  author?: string;
  publisher?: string;
  pages?: number;
  isbn?: string;
  // T-shirt specific fields
  sizes?: string[];
  material?: string;
  colors?: string[];
}

export const bookCategories = [
  "Fiction",
  "Non-Fiction", 
  "Sci-Fi",
  "Romance",
  "Mystery",
  "Biography",
  "Self-Help"
];

export const tshirtCategories = [
  "Casual",
  "Graphic",
  "Literary Quotes",
  "Vintage",
  "Minimalist"
];

export const books: Product[] = [
  {
    id: "book-1",
    name: "The Midnight Library",
    description: "A novel about all the choices that go into a life well lived, from the internationally bestselling author of Reasons to Stay Alive and How To Stop Time.",
    price: 14.99,
    category: "books",
    subcategory: "Fiction",
    stock: 25,
    images: ["https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400"],
    rating: 4.8,
    reviews: 2847,
    author: "Matt Haig",
    publisher: "Viking",
    pages: 288,
    isbn: "9780525559474"
  },
  {
    id: "book-2", 
    name: "Dune",
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world.",
    price: 16.99,
    category: "books",
    subcategory: "Sci-Fi",
    stock: 18,
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"],
    rating: 4.9,
    reviews: 5632,
    author: "Frank Herbert",
    publisher: "Ace Books",
    pages: 688,
    isbn: "9780441013593"
  },
  {
    id: "book-3",
    name: "The Seven Husbands of Evelyn Hugo",
    description: "A reclusive Hollywood icon finally tells her story to a young journalist, revealing stunning secrets about her glamorous and scandalous life.",
    price: 13.99,
    category: "books", 
    subcategory: "Romance",
    stock: 32,
    images: ["https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"],
    rating: 4.7,
    reviews: 3421,
    author: "Taylor Jenkins Reid",
    publisher: "Atria Books",
    pages: 400,
    isbn: "9781501139239"
  },
  {
    id: "book-4",
    name: "Educated",
    description: "A memoir about a young girl who, kept out of school, leaves her family and goes on to earn a PhD from Cambridge University.",
    price: 15.99,
    category: "books",
    subcategory: "Biography", 
    stock: 22,
    images: ["https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400"],
    rating: 4.6,
    reviews: 4156,
    author: "Tara Westover",
    publisher: "Random House",
    pages: 334,
    isbn: "9780399590504"
  },
  {
    id: "book-5",
    name: "Atomic Habits",
    description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones. Tiny changes, remarkable results.",
    price: 17.99,
    category: "books",
    subcategory: "Self-Help",
    stock: 41,
    images: ["https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400"],
    rating: 4.8,
    reviews: 7893,
    author: "James Clear",
    publisher: "Avery",
    pages: 320,
    isbn: "9780735211292"
  },
  {
    id: "book-6",
    name: "The Silent Patient",
    description: "A psychotherapist becomes obsessed with treating a young woman who murdered her husband but refuses to speak.",
    price: 14.49,
    category: "books",
    subcategory: "Mystery",
    stock: 19,
    images: ["https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400"],
    rating: 4.5,
    reviews: 2967,
    author: "Alex Michaelides",
    publisher: "Celadon Books",
    pages: 336,
    isbn: "9781250301697"
  },
  {
    id: "book-7",
    name: "Sapiens",
    description: "A Brief History of Humankind. How did our species succeed in the battle for dominance?",
    price: 18.99,
    category: "books",
    subcategory: "Non-Fiction",
    stock: 28,
    images: ["https://images.unsplash.com/photo-1471611714742-de6154f6ebeb?w=400"],
    rating: 4.7,
    reviews: 5421,
    author: "Yuval Noah Harari",
    publisher: "Harper",
    pages: 464,
    isbn: "9780062316110"
  },
  {
    id: "book-8",
    name: "The Hobbit",
    description: "A classic tale of adventure, heroism, and friendship. The prelude to The Lord of the Rings.",
    price: 12.99,
    category: "books",
    subcategory: "Fiction",
    stock: 35,
    images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"],
    rating: 4.9,
    reviews: 8765,
    author: "J.R.R. Tolkien",
    publisher: "Houghton Mifflin",
    pages: 310,
    isbn: "9780547928227"
  }
];

export const tshirts: Product[] = [
  {
    id: "tshirt-1",
    name: "Classic Book Lover Tee",
    description: "Show your love for reading with this comfortable cotton t-shirt featuring a minimalist book design.",
    price: 24.99,
    category: "tshirts",
    subcategory: "Literary Quotes",
    stock: 47,
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"],
    rating: 4.6,
    reviews: 234,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    material: "100% Cotton",
    colors: ["Black", "White", "Navy", "Gray"]
  },
  {
    id: "tshirt-2",
    name: "Vintage Library Graphic Tee",
    description: "Retro-inspired design featuring classic library elements. Perfect for book enthusiasts.",
    price: 22.99,
    category: "tshirts", 
    subcategory: "Vintage",
    stock: 31,
    images: ["https://images.unsplash.com/photo-1503341338985-95b4d8ccdcf9?w=400"],
    rating: 4.4,
    reviews: 156,
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Cotton Blend",
    colors: ["Vintage Blue", "Sage Green", "Cream"]
  },
  {
    id: "tshirt-3",
    name: "Shakespeare Quote Tee",
    description: "'To be or not to be' - Classic Shakespeare quote beautifully designed on premium fabric.",
    price: 26.99,
    category: "tshirts",
    subcategory: "Literary Quotes", 
    stock: 23,
    images: ["https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400"],
    rating: 4.8,
    reviews: 189,
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "Premium Cotton",
    colors: ["Black", "Dark Gray", "Burgundy"]
  },
  {
    id: "tshirt-4",
    name: "Minimalist Reader Tee",
    description: "Clean, modern design for the contemporary book lover. Subtle and sophisticated.",
    price: 21.99,
    category: "tshirts",
    subcategory: "Minimalist",
    stock: 52,
    images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400"],
    rating: 4.5,
    reviews: 312,
    sizes: ["S", "M", "L", "XL"],
    material: "Organic Cotton",
    colors: ["White", "Light Gray", "Beige", "Black"]
  },
  {
    id: "tshirt-5",
    name: "Coffee & Books Graphic",
    description: "Perfect combination: coffee in one hand, book in the other. For true reading enthusiasts.",
    price: 23.99,
    category: "tshirts",
    subcategory: "Graphic",
    stock: 38,
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400"],
    rating: 4.7,
    reviews: 267,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    material: "Cotton Blend",
    colors: ["Brown", "Cream", "Dark Green"]
  },
  {
    id: "tshirt-6",
    name: "Adventure Awaits Tee",
    description: "Inspire your next reading adventure with this motivational design.",
    price: 25.99,
    category: "tshirts",
    subcategory: "Casual",
    stock: 29,
    images: ["https://images.unsplash.com/photo-1622445275576-721325763afe?w=400"],
    rating: 4.3,
    reviews: 143,
    sizes: ["S", "M", "L", "XL"],
    material: "Cotton",
    colors: ["Forest Green", "Navy", "Charcoal"]
  },
  {
    id: "tshirt-7",
    name: "Bookworm Pride Tee",
    description: "Wear your bookworm status with pride! Perfect for library visits and book clubs.",
    price: 24.49,
    category: "tshirts",
    subcategory: "Graphic",
    stock: 41,
    images: ["https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400"],
    rating: 4.6,
    reviews: 298,
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Cotton",
    colors: ["Purple", "Teal", "Gray", "Black"]
  },
  {
    id: "tshirt-8",
    name: "Classic Literature Stack",
    description: "Beautiful illustration of stacked classic books. A must-have for literature lovers.",
    price: 27.99,
    category: "tshirts",
    subcategory: "Literary Quotes",
    stock: 16,
    images: ["https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=400"],
    rating: 4.9,
    reviews: 421,
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Premium Cotton",
    colors: ["Vintage White", "Soft Blue", "Sage"]
  }
];

export const allProducts: Product[] = [...books, ...tshirts];