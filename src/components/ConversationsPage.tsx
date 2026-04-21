import * as React from "react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Send, Sparkles, Phone, MoreVertical, Search, Zap } from "lucide-react";
import { generateSalesResponse } from "../services/ai";

const initialContacts = [
  { id: "1", name: "Chioma Okereke", phone: "+234 812 345 6789", lastMessage: "Thank you for the shoes!", time: "2m ago", status: "Paid" },
  { id: "2", name: "Babajide Williams", phone: "+234 901 234 5678", lastMessage: "Do you have size 42?", time: "15m ago", status: "Interested" },
  { id: "3", name: "Amina Yusuf", phone: "+234 703 456 7890", lastMessage: "Hello, how much?", time: "1h ago", status: "New" },
];

export function ConversationsPage() {
  const [selectedContact, setSelectedContact] = useState(initialContacts[0]);
  const [messages, setMessages] = useState([
    { role: "user", content: "How much are the black office shoes?", time: "2:30 PM" },
    { role: "assistant", content: "This one is ₦10,000 😊 Would you like to order now or see more options?", time: "2:31 PM" },
    { role: "user", content: "I'll take one. Do you deliver to Lekki?", time: "2:35 PM" },
    { role: "assistant", content: "Yes we deliver nationwide 🚚 Delivery to Lekki is ₦2,000. Should I confirm your order now?", time: "2:36 PM" },
  ]);
  const [input, setInput] = useState("");
  const [isAiTyping, setIsAiTyping] = useState(false);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, content: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    setIsAiTyping(true);
    const aiResponse = await generateSalesResponse(input, messages.map(m => ({ 
      role: m.role === 'assistant' ? 'model' : 'user', 
      parts: [{ text: m.content }] 
    })));
    
    setMessages(prev => [...prev, { 
      role: "assistant", 
      content: aiResponse || "I'm not sure how to respond to that yet. Want to see our products?", 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }]);
    setIsAiTyping(false);
  };

  return (
    <div className="h-[calc(100vh-160px)] flex bg-[#080808] rounded-[40px] shadow-2xl border border-white/5 overflow-hidden">
      {/* Contact List */}
      <div className="w-80 border-r border-white/5 flex flex-col bg-[#050505]">
        <div className="p-8">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
            <Input placeholder="Search messages..." className="pl-12 h-12 rounded-2xl bg-white/5 border-white/5 text-sm placeholder:text-slate-600" />
          </div>
        </div>
        <ScrollArea className="flex-1 px-4">
          {initialContacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className={cn(
                "w-full p-4 mb-2 flex items-center gap-4 transition-all rounded-[24px] group border border-transparent",
                selectedContact.id === contact.id 
                  ? "bg-white/5 border-white/10 shadow-lg" 
                  : "hover:bg-white/[0.02]"
              )}
            >
              <Avatar className="w-12 h-12 border border-white/10">
                <AvatarFallback className="bg-white/5 text-white font-bold">{contact.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="font-bold text-white text-sm truncate">{contact.name}</span>
                  <span className="text-[10px] text-slate-600 font-bold uppercase whitespace-nowrap">{contact.time}</span>
                </div>
                <div className="text-xs text-slate-500 truncate">{contact.lastMessage}</div>
              </div>
            </button>
          ))}
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-[#080808]">
        {/* Chat Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12 border border-white/10">
              <AvatarFallback className="bg-white/5 text-white font-bold">{selectedContact.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-black text-white text-lg tracking-tight leading-tight">{selectedContact.name}</div>
              <div className="text-[10px] text-green-500 flex items-center gap-2 font-black uppercase tracking-widest mt-1">
                <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
                WhatsApp Cloud Active
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <Badge className={cn(
                "rounded-full px-3 py-1 font-black uppercase tracking-[0.2em] text-[9px] border-none",
                selectedContact.status === "Paid" ? "bg-green-500/10 text-green-400" : "bg-orange-500/10 text-orange-400"
              )}>
                {selectedContact.status}
              </Badge>
            <div className="w-px h-6 bg-white/10 mx-2"></div>
            <Button variant="ghost" size="icon" className="text-slate-500 hover:text-white rounded-xl bg-white/5">
              <Phone className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-500 hover:text-white rounded-xl bg-white/5">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Message Container */}
        <ScrollArea className="flex-1 p-8 bg-gradient-to-b from-transparent to-black/20">
          <div className="space-y-8">
            <div className="text-center">
              <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-black px-4 py-1.5 bg-white/5 rounded-full border border-white/5">Authentication Verified</span>
            </div>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-[70%] space-y-2`}>
                  <div className={`px-5 py-4 rounded-[28px] shadow-xl border leading-relaxed ${m.role === "user" 
                    ? "bg-[#0A0A0A] border-white/5 text-slate-200 rounded-tl-none" 
                    : "bg-orange-600 border-orange-500 text-white rounded-tr-none shadow-orange-900/20"}`}>
                    <p className="text-sm font-medium">{m.content}</p>
                  </div>
                  <div className={`text-[10px] font-black uppercase tracking-widest text-slate-600 px-2 ${m.role === "assistant" ? "text-right" : ""}`}>{m.time}</div>
                </div>
              </div>
            ))}
            {isAiTyping && (
              <div className="flex justify-end p-4">
                 <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 animate-pulse">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">OYAH analyzing intent...</span>
                 </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Chat Input */}
        <div className="p-8 border-t border-white/5 bg-white/[0.01]">
          <form className="flex items-center gap-4" onSubmit={handleSend}>
            <div className="flex-1 relative group">
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Talk to customer..." 
                className="h-16 rounded-[24px] px-8 bg-white/5 border-white/5 focus-visible:ring-1 focus-visible:ring-orange-500 transition-all text-sm text-white placeholder:text-slate-600"
              />
              <button 
                type="button"
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-orange-500 hover:text-orange-400 transition-colors"
              >
                <Zap className="w-5 h-5 fill-current" />
              </button>
            </div>
            <Button size="icon" className="w-16 h-16 rounded-[24px] bg-orange-600 hover:bg-orange-500 shadow-2xl shadow-orange-950/40 transition-transform active:scale-95 group">
              <Send className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </form>
          
          <div className="mt-6 bg-orange-600/5 border border-orange-500/10 rounded-2xl p-4 flex items-center justify-between">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                   <Sparkles className="w-4 h-4 text-orange-400" />
                </div>
                <p className="text-[11px] font-bold text-slate-400 italic">"User asked about delivery. AI recommending 'Flat Rate Lagos' option."</p>
             </div>
             <Button variant="ghost" size="sm" className="text-orange-500 font-black uppercase tracking-widest text-[9px] hover:bg-orange-500 hover:text-white px-4 rounded-xl">Apply AI Action</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

