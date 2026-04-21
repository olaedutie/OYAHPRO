import { LayoutDashboard, Users, MessageSquare, CreditCard, Settings, Zap, TrendingUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Users, label: "Customers", href: "/customers" },
  { icon: MessageSquare, label: "Conversations", href: "/conversations" },
  { icon: CreditCard, label: "Payments", href: "/payments" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-[#080808] text-slate-200 h-screen flex flex-col border-r border-white/5 relative z-20">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(242,125,38,0.3)] group transition-transform hover:scale-110">
          <Zap className="text-white w-6 h-6 fill-current" />
        </div>
        <span className="text-2xl font-black tracking-tighter text-white">OYAH <span className="text-orange-500">PRO</span></span>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
                isActive 
                  ? "bg-white/5 text-orange-400 font-bold border border-white/10" 
                  : "text-slate-500 hover:text-white"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-orange-500" : "group-hover:text-white")} />
              <span className="uppercase tracking-widest text-[10px] font-black">{item.label}</span>
              {isActive && (
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 bg-gradient-to-t from-orange-900/10 to-transparent">
        <div className="bg-white/5 rounded-2x border border-white/10 p-5 group transition-all hover:bg-white/10">
          <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-1">Plan Status</div>
          <div className="text-sm text-white font-bold mb-3 flex items-center gap-2">
             Standard Growth
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          </div>
          <button className="w-full py-2.5 bg-orange-600 rounded-lg text-[10px] font-black uppercase tracking-widest text-white hover:bg-orange-500 transition-all shadow-lg shadow-orange-900/20 active:scale-95">Upgrade Pro</button>
        </div>
      </div>
    </div>
  );
}

