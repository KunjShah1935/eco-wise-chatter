import { User, Leaf } from "lucide-react";

interface MessageProps {
  message: {
    id: string;
    content: string;
    sender: "user" | "bot";
    timestamp: Date;
  };
}

export const Message = ({ message }: MessageProps) => {
  const isBot = message.sender === "bot";
  
  return (
    <div className={`flex items-start gap-3 animate-slide-up ${isBot ? "" : "flex-row-reverse"}`}>
      {/* Avatar */}
      <div className={`p-2 rounded-full ${isBot ? "bg-primary" : "gradient-eco-primary"}`}>
        {isBot ? (
          <Leaf className="h-4 w-4 text-white" />
        ) : (
          <User className="h-4 w-4 text-white" />
        )}
      </div>
      
      {/* Message bubble */}
      <div
        className={`p-4 rounded-2xl max-w-xs md:max-w-md lg:max-w-lg ${
          isBot
            ? "bg-chat-bot-bg text-chat-bot-fg rounded-bl-md"
            : "bg-chat-user-bg text-chat-user-fg rounded-br-md"
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        <p className={`text-xs mt-2 opacity-70 ${isBot ? "text-muted-foreground" : "text-white/70"}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};