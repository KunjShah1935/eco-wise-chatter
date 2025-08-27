import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Leaf } from "lucide-react";
import { Message } from "@/components/Message";
import { ThemeToggle } from "@/components/ThemeToggle";

interface ChatMessage {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      content: "🌍 Hello! I'm your environment-friendly assistant. How can I help you make our planet greener today? 🌱",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Simulated bot responses for demo (replace with your backend integration)
  const getBotResponse = (userMessage: string): string => {
    const responses = [
      "🌱 That's a great question! Every small action counts towards a healthier planet. Did you know that switching to LED bulbs can reduce your carbon footprint by up to 80%? ♻️",
      "🌍 I love your eco-consciousness! Here are some sustainable practices you might find helpful: composting, using renewable energy, and choosing eco-friendly products. 🌿",
      "♻️ Absolutely! Reducing waste is one of the most impactful things we can do. Try the 3 R's: Reduce, Reuse, Recycle. Even better, add a fourth R: Refuse unnecessary items! 🌱",
      "🌿 Nature has amazing solutions! Planting trees not only beautifies our environment but also captures carbon dioxide. One mature tree can absorb 48 pounds of CO2 per year! 🌳",
      "🌊 Water conservation is crucial for our planet! Simple changes like fixing leaks, taking shorter showers, and collecting rainwater can make a huge difference. Every drop counts! 💧",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate API call delay
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-card/50 backdrop-blur-sm rounded-xl shadow-eco-strong border border-border/50">
      {/* Header */}
      <div className="gradient-eco-primary p-6 rounded-t-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-full">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">EcoBot 🌍</h1>
              <p className="text-white/90 text-sm">Your environmental companion</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 gradient-eco-chat">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        
        {isTyping && (
          <div className="flex items-start gap-3 animate-slide-up">
            <div className="p-2 bg-primary rounded-full">
              <Leaf className="h-4 w-4 text-white" />
            </div>
            <div className="bg-chat-bot-bg text-chat-bot-fg p-4 rounded-2xl rounded-bl-md max-w-xs">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse-gentle"></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse-gentle" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse-gentle" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-6 border-t border-border bg-card/80 backdrop-blur rounded-b-xl">
        <div className="flex gap-3">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about eco-friendly tips... 🌱"
            className="flex-1 rounded-full border-primary/20 focus:border-primary bg-background/50"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            size="icon"
            className="rounded-full gradient-eco-primary hover:shadow-eco transition-all duration-200 hover:scale-105"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;