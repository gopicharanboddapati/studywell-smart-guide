import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { allProducts } from '../data/products';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi! I'm your BookTees shopping assistant. I can help you find books, t-shirts, answer questions about our products, or assist with your order. What can I help you with today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Product recommendations
    if (message.includes('recommend') || message.includes('suggest')) {
      if (message.includes('book')) {
        return "I'd recommend checking out our bestsellers! 'The Midnight Library' by Matt Haig and 'Dune' by Frank Herbert are very popular. For non-fiction, 'Atomic Habits' by James Clear is excellent for self-improvement.";
      }
      if (message.includes('shirt') || message.includes('tshirt')) {
        return "Our most popular t-shirts include the 'Classic Book Lover Tee' and 'Shakespeare Quote Tee'. The 'Coffee & Books Graphic' is perfect for readers who love their caffeine!";
      }
      return "I can recommend both books and t-shirts! What type of product are you interested in? Books by genre or t-shirts by style?";
    }

    // Specific product searches
    if (message.includes('dune')) {
      const duneBook = allProducts.find(p => p.name.toLowerCase().includes('dune'));
      return duneBook ? `${duneBook.name} by ${duneBook.author} is available for $${duneBook.price}. It's a classic sci-fi masterpiece with ${duneBook.rating} stars!` : "I can help you find sci-fi books!";
    }

    if (message.includes('shakespeare')) {
      const shakespeareTee = allProducts.find(p => p.name.toLowerCase().includes('shakespeare'));
      return shakespeareTee ? `Our ${shakespeareTee.name} is perfect for literature lovers! It's $${shakespeareTee.price} and available in multiple sizes and colors.` : "We have literary-themed t-shirts!";
    }

    // Category inquiries
    if (message.includes('fiction') || message.includes('novel')) {
      return "We have great fiction books including 'The Midnight Library', 'The Seven Husbands of Evelyn Hugo', and 'The Hobbit'. All are customer favorites with excellent ratings!";
    }

    if (message.includes('sci-fi') || message.includes('science fiction')) {
      return "For sci-fi lovers, I highly recommend 'Dune' by Frank Herbert. It's a timeless classic that has inspired countless other works in the genre.";
    }

    // Shopping help
    if (message.includes('size') || message.includes('sizing')) {
      return "Our t-shirts come in sizes XS to XXL. The product pages show all available sizes for each item. Most are unisex sizing. Need help with a specific item?";
    }

    if (message.includes('shipping') || message.includes('delivery')) {
      return "We offer free shipping on all orders! Most items ship within 1-2 business days. Books typically arrive in 3-5 days, while t-shirts may take 5-7 days for printing.";
    }

    if (message.includes('return') || message.includes('exchange')) {
      return "We have a 30-day return policy! Books must be in original condition, and t-shirts can be exchanged for different sizes. Returns are free and easy.";
    }

    // Price inquiries
    if (message.includes('price') || message.includes('cost') || message.includes('cheap') || message.includes('expensive')) {
      return "Our books range from $12.99 to $18.99, while t-shirts are priced from $21.99 to $27.99. We often have sales and promotions, so check back regularly!";
    }

    // Stock questions
    if (message.includes('stock') || message.includes('available')) {
      return "Most of our items are in stock! You can check availability on each product page. If something is running low, it will show 'Only X left' on the product card.";
    }

    // General greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to BookTees! I'm here to help you find the perfect books and t-shirts. What are you looking for today?";
    }

    // Fallback responses
    const fallbacks = [
      "I'd be happy to help! Could you tell me more about what you're looking for?",
      "That's a great question! Are you interested in books, t-shirts, or something specific about our store?",
      "I can help you find products, answer questions about sizing, shipping, or returns. What would you like to know?",
      "Feel free to ask me about our books, t-shirts, prices, or any other questions about BookTees!"
    ];

    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-40"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 shadow-xl z-30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">BookTees Assistant</CardTitle>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-full">
            <ScrollArea className="flex-1 px-4">
              <div className="space-y-4 pb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                        message.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};