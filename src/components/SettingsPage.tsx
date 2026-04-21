import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Package, Save, Zap, Trash2, Plus, MessageCircle } from "lucide-react";

export function SettingsPage() {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-white uppercase">System Config</h1>
          <p className="text-slate-500 font-medium">Fine-tune OYAH's intelligence and operations.</p>
        </div>
        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
           <Zap className="w-6 h-6 text-orange-500 fill-current" />
        </div>
      </div>

      <Tabs defaultValue="ai" className="space-y-8">
        <TabsList className="bg-white/5 border border-white/10 rounded-2xl p-1 h-auto flex w-fit">
          <TabsTrigger value="ai" className="rounded-xl px-8 py-3 data-[state=active]:bg-orange-600 data-[state=active]:text-white text-[10px] font-black uppercase tracking-widest text-slate-500 whitespace-nowrap">AI Logic</TabsTrigger>
          <TabsTrigger value="catalog" className="rounded-xl px-8 py-3 data-[state=active]:bg-orange-600 data-[state=active]:text-white text-[10px] font-black uppercase tracking-widest text-slate-500 whitespace-nowrap">Catalog</TabsTrigger>
          <TabsTrigger value="whatsapp" className="rounded-xl px-8 py-3 data-[state=active]:bg-orange-600 data-[state=active]:text-white text-[10px] font-black uppercase tracking-widest text-slate-500 whitespace-nowrap">Channel</TabsTrigger>
        </TabsList>

        <TabsContent value="ai" className="space-y-6">
          <Card className="bg-[#0A0A0A] border-white/5 rounded-[32px] overflow-hidden shadow-2xl">
            <CardHeader className="p-8 border-b border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-4 mb-2">
                 <div className="p-3 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                    <Sparkles className="w-5 h-5 text-orange-500" />
                 </div>
                 <div>
                    <CardTitle className="text-xl font-bold text-white">AI Personality</CardTitle>
                    <CardDescription className="text-slate-500 text-xs mt-1">Customize how OYAH represents your brand.</CardDescription>
                 </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="grid gap-8">
                <div className="space-y-3">
                  <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Tone of Voice</Label>
                  <Input defaultValue="Highly Persuasive, Friendly, Professional" className="h-14 rounded-2xl bg-white/5 border-white/5 text-white placeholder:text-slate-700 focus:ring-1 focus:ring-orange-500 outline-none" />
                </div>
                <div className="space-y-3">
                  <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1 text-orange-500 flex items-center gap-2">
                     <div className="w-1 h-1 bg-orange-500 rounded-full animate-ping" />
                     Knowledge Base Prompt
                  </Label>
                  <textarea 
                    className="w-full min-h-[180px] bg-white/5 border border-white/5 rounded-2xl p-6 text-sm text-slate-300 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-700 leading-relaxed"
                    placeholder="We sell premium Italian shoes in Lagos. Free delivery to VI and Lekki..."
                    defaultValue="We sell premium leather footwear for men and women. Standard delivery in Lagos is ₦2,000. Express delivery is ₦5,000. We have sizes 38-46. AI should always try to push for an immediate sale by mentioning limited stock."
                  />
                </div>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-500 rounded-2xl px-12 h-16 font-black uppercase tracking-widest text-[11px] text-white w-full md:w-auto shadow-2xl shadow-orange-950/60 transition-transform active:scale-95 group">
                <Save className="w-4 h-4 mr-3 group-hover:scale-125 transition-transform" />
                Update Brain Logic
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="catalog" className="space-y-6">
          <Card className="bg-[#0A0A0A] border-white/5 rounded-[32px] overflow-hidden">
            <CardHeader className="p-8 border-b border-white/5">
              <div className="flex items-center gap-4">
                 <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                    <Package className="w-5 h-5 text-blue-400" />
                 </div>
                 <div>
                    <CardTitle className="text-xl font-bold text-white">Product Catalog Management</CardTitle>
                    <CardDescription className="text-slate-500 text-xs mt-1">Items OYAH can recommend to users in conversations.</CardDescription>
                 </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid gap-4">
                 {[
                  { name: "Luxury Leather Loafers", price: "₦25,000", badge: "Hot Seller" },
                  { name: "Black Office Shoes", price: "₦10,000", badge: "Low Stock" },
                  { name: "White Sneakers", price: "₦18,500", badge: "" },
                ].map((product, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-white/[0.04] transition-all">
                     <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center font-black text-orange-500 text-lg">
                           {product.name[0]}
                        </div>
                        <div>
                           <div className="font-bold text-white mb-0.5">{product.name}</div>
                           <div className="text-sm font-black text-orange-500/80">{product.price}</div>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        {product.badge && <span className="text-[9px] font-black uppercase tracking-widest bg-orange-600/10 text-orange-500 px-2 py-1 rounded-md border border-orange-500/20">{product.badge}</span>}
                        <Button variant="ghost" size="icon" className="text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all">
                           <Trash2 className="w-4 h-4" />
                        </Button>
                     </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full h-16 rounded-2xl border-dashed border-2 border-white/5 text-slate-500 font-black uppercase tracking-[0.2em] text-[10px] hover:border-orange-500/50 hover:text-white transition-all bg-transparent">
                 <Plus className="w-4 h-4 mr-2" />
                 Add New Product to DB
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="whatsapp" className="space-y-6 text-center py-10 border-2 border-dashed border-white/5 rounded-[40px]">
           <div className="w-20 h-20 bg-green-500/10 rounded-[32px] flex items-center justify-center mx-auto mb-6 border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.1)]">
              <MessageCircle className="w-10 h-10 text-green-500" />
           </div>
           <h3 className="text-2xl font-black text-white tracking-tighter">WHATSAPP CLOUD API</h3>
           <p className="text-slate-500 max-w-sm mx-auto font-medium">Lagos hub currently connected. All webhooks active and 100% mission healthy.</p>
           <Button className="mt-8 bg-green-600 hover:bg-green-500 rounded-xl px-10 font-black uppercase text-[10px] tracking-widest text-white h-12">Refresh Connection</Button>
        </TabsContent>
      </Tabs>
    </div>
  );
}

