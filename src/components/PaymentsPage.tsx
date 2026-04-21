import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, TrendingUp, DollarSign, Clock } from "lucide-react";

const payments = [
  { id: "PAY-10023", customer: "Chioma Okereke", amount: "₦12,500", status: "Paid", date: "2 mins ago", ref: "T7483920" },
  { id: "PAY-10022", customer: "Sarah Alabi", amount: "₦45,000", status: "Paid", date: "3 hours ago", ref: "T7483921" },
  { id: "PAY-10021", customer: "Babajide Williams", amount: "₦8,000", status: "Pending", date: "6 hours ago", ref: "T7483922" },
  { id: "PAY-10020", customer: "Emeka Obi", amount: "₦22,000", status: "Paid", date: "Yesterday", ref: "T7483923" },
  { id: "PAY-10019", customer: "Amina Yusuf", amount: "₦15,000", status: "Pending", date: "2 days ago", ref: "T7483924" },
];

export function PaymentsPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-white">Revenue</h1>
          <p className="text-slate-500 font-medium">Automatic payouts via Paystack</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 px-6">
            <Download className="w-4 h-4 mr-2" />
            Statement
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-500 rounded-xl px-8 font-black uppercase tracking-widest text-[11px] text-white shadow-lg shadow-orange-950/40 border border-orange-500/20">
            Force Payout
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RevenueCard title="Total Revenue" value="₦2,840,000" icon={TrendingUp} trend="+18% this month" />
        <RevenueCard title="Pending Payout" value="₦432,000" icon={Clock} />
        <RevenueCard title="Success Rate" value="98.2%" icon={DollarSign} isSuccess />
      </div>

      <div className="bg-[#0A0A0A] rounded-[40px] p-8 shadow-2xl border border-white/5 relative overflow-hidden">
        <div className="flex items-center justify-between mb-8">
           <h3 className="text-xl font-bold text-white tracking-tight">Recent Transactions</h3>
           <Button variant="link" className="text-orange-500 font-bold uppercase tracking-widest text-[10px] p-0">View All</Button>
        </div>

        <div className="rounded-2xl border border-white/5 overflow-hidden">
          <Table>
            <TableHeader className="bg-white/[0.02]">
              <TableRow className="border-white/5 hover:bg-transparent">
                <TableHead className="py-5 px-6 text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">Reference</TableHead>
                <TableHead className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">Customer</TableHead>
                <TableHead className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">Amount</TableHead>
                <TableHead className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">Status</TableHead>
                <TableHead className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">Date</TableHead>
                <TableHead className="text-right px-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id} className="border-white/5 hover:bg-white/[0.03] transition-colors group">
                  <TableCell className="py-5 px-6">
                    <span className="font-mono text-xs text-slate-400 group-hover:text-orange-400 transition-colors uppercase">{payment.id}</span>
                  </TableCell>
                  <TableCell className="font-bold text-white">{payment.customer}</TableCell>
                  <TableCell className="font-black text-white">{payment.amount}</TableCell>
                  <TableCell>
                    <Badge className={cn(
                      "rounded-lg px-2.5 py-1 font-black uppercase tracking-widest text-[9px] border",
                      payment.status === "Paid" ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-orange-500/10 text-orange-400 border-orange-500/20"
                    )}>
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-600 font-bold text-[11px] uppercase tracking-tighter">{payment.date}</TableCell>
                  <TableCell className="text-right px-6">
                    <Button variant="ghost" size="icon" className="text-slate-600 hover:text-white rounded-xl hover:bg-white/5">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

function RevenueCard({ title, value, icon: Icon, trend, isSuccess }: any) {
  return (
    <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[32px] relative overflow-hidden transition-all hover:bg-[#0d0d0d] group">
       <div className="absolute -top-4 -right-4 w-32 h-32 bg-orange-600/5 blur-[48px] rounded-full group-hover:bg-orange-600/10 transition-colors"></div>
       <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
             <Icon className={cn("w-5 h-5", isSuccess ? "text-green-400" : "text-orange-500")} />
          </div>
          <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-black">{title}</span>
       </div>
       <div className="text-3xl font-black text-white tracking-tight">{value}</div>
       {trend && (
         <div className="mt-3 text-[10px] font-black uppercase tracking-widest text-green-400 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            {trend}
         </div>
       )}
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

