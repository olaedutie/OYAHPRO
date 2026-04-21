import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, CreditCard, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: 'Mon', sales: 4000, leads: 24 },
  { name: 'Tue', sales: 3000, leads: 18 },
  { name: 'Wed', sales: 2000, leads: 15 },
  { name: 'Thu', sales: 2780, leads: 27 },
  { name: 'Fri', sales: 1890, leads: 32 },
  { name: 'Sat', sales: 2390, leads: 35 },
  { name: 'Sun', sales: 3490, leads: 29 },
];

export function DashboardHome() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-white mb-2">Lagos Store Overview</h1>
          <p className="text-slate-500 font-medium">Active since Oct 2023</p>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
            <span className="text-[10px] text-green-400 font-black uppercase tracking-[0.2em]">AI Sales Active</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Messages" value="12,402" icon={MessageSquare} />
        <StatCard title="Leads Captured" value="843" icon={Users} subValue="+12% vs last week" subValueColor="text-green-400" />
        <StatCard 
          title="Sales Made" 
          value="₦1,280,000" 
          icon={CreditCard} 
          isGradient 
          progress={72}
        />
        <StatCard title="Conv. Rate" value="14.2%" icon={TrendingUp} subValue="Industry Leader" subValueColor="text-blue-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 bg-[#080808] border border-white/5 rounded-[32px] p-8 relative overflow-hidden transition-all hover:border-white/10 group">
           <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white tracking-tight">AI Monitor Live</h3>
              <div className="flex gap-2">
                 <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                 <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                 <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
           </div>
           <div className="space-y-4 font-mono text-[11px]">
              <div className="text-slate-500"><span className="text-slate-600">[14:22:04]</span> INCOMING: "How much are the black shoes?"</div>
              <div className="text-orange-400"><span className="text-orange-900">[14:22:05]</span> OYAH PROCESSING: Match found {"->"} Product_DB[id:992]</div>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 group-hover:bg-white/10 transition-all">
                 <p className="text-blue-400 mb-2 font-black uppercase tracking-widest text-[9px]">Reply Generated</p>
                 <p className="text-white italic leading-relaxed text-sm">"These are ₦10,000 😊 Would you like to order now or see more options? We only have 3 left in stock today!"</p>
              </div>
              <div className="text-green-400"><span className="text-green-900">[14:22:15]</span> TRIGGER: Interest detected (High Intent)</div>
           </div>
           <div className="absolute -bottom-4 -right-4 w-64 h-32 bg-orange-600/10 blur-[64px] rounded-full"></div>
        </div>

        <Card className="lg:col-span-2 rounded-[32px] border-none shadow-2xl bg-[#0a0a0a] overflow-hidden">
          <CardHeader className="p-8">
            <CardTitle className="text-xl font-bold text-white">Conversion Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-[250px] p-8 pt-0">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 10}} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{backgroundColor: '#0f172a', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)'}}
                  itemStyle={{color: '#fff'}}
                />
                <Line type="monotone" dataKey="leads" stroke="#f97316" strokeWidth={3} dot={{r: 4, fill: '#f97316', strokeWidth: 0}} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, subValue, subValueColor, isGradient, progress }: any) {
  if (isGradient) {
    return (
      <div className="bg-gradient-to-br from-orange-600 to-orange-950 border border-orange-500/30 p-6 rounded-[28px] relative overflow-hidden transition-all hover:scale-[1.02]">
        <p className="text-[10px] text-orange-200 uppercase tracking-[0.2em] font-black z-10 relative">{title}</p>
        <h3 className="text-3xl font-black text-white mt-2 z-10 relative">{value}</h3>
        {progress && (
          <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden z-10 relative">
            <div className="bg-white h-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
          </div>
        )}
        <div className="absolute top-0 right-0 p-4 opacity-10 z-0">
          <Icon className="w-16 h-16 text-white" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-[28px] relative overflow-hidden transition-all hover:border-white/10 hover:bg-[#0d0d0d] group">
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
        <Icon className="w-16 h-16 text-white" />
      </div>
      <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black">{title}</p>
      <h3 className="text-3xl font-light text-white mt-2 tracking-tight">{value}</h3>
      {subValue && (
        <span className={cn("text-[10px] font-black uppercase tracking-widest mt-2 block", subValueColor)}>
          {subValue}
        </span>
      )}
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

