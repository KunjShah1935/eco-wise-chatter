import ChatInterface from "@/components/ChatInterface";
import { Leaf, Recycle, TreePine } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen gradient-eco-bg p-4">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-primary/10">
          <TreePine className="h-32 w-32" />
        </div>
        <div className="absolute top-32 right-20 text-accent/10">
          <Leaf className="h-24 w-24" />
        </div>
        <div className="absolute bottom-20 left-32 text-primary/10">
          <Recycle className="h-28 w-28" />
        </div>
        <div className="absolute bottom-32 right-10 text-accent/10">
          <TreePine className="h-20 w-20" />
        </div>
      </div>

      {/* Main chat interface */}
      <div className="relative z-10">
        <ChatInterface />
      </div>
      
      {/* Footer */}
      <div className="text-center mt-8 text-muted-foreground text-sm">
        <p>🌱 Together, let's make our planet greener! 🌍</p>
      </div>
    </div>
  );
};

export default Index;