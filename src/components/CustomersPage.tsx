import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, Filter, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const customers = [
  { name: "Chioma Okereke", phone: "+234 812 345 6789", status: "Paid", lastMessage: "Thank you for the shoes!", date: "2 mins ago" },
  { name: "Babajide Williams", phone: "+234 901 234 5678", status: "Interested", lastMessage: "Do you have size 42?", date: "15 mins ago" },
  { name: "Amina Yusuf", phone: "+234 703 456 7890", status: "New", lastMessage: "Hello, how much?", date: "1 hour ago" },
  { name: "Emeka Obi", phone: "+234 816 789 0123", status: "Interested", lastMessage: "Will it be delivered today?", date: "3 hours ago" },
  { name: "Sarah Alabi", phone: "+234 905 123 4567", status: "Paid", lastMessage: "Ordered!", date: "Yesterday" },
];

export function CustomersPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-white">Pipeline</h1>
          <p className="text-slate-500 font-medium">Capture and convert every conversation.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-500 rounded-xl px-6 font-bold text-xs uppercase tracking-widest text-white shadow-lg shadow-orange-900/20">
            Export CRM
          </Button>
        </div>
      </div>

      <div className="bg-[#0A0A0A] rounded-[32px] p-8 shadow-2xl border border-white/5">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <Input 
            placeholder="Search leads..." 
            className="pl-12 rounded-2xl border-white/5 bg-white/5 focus:ring-orange-500 focus:border-orange-500 h-14 text-white placeholder:text-slate-600"
          />
        </div>

        <div className="rounded-2xl border border-white/5 overflow-hidden">
          <Table>
            <TableHeader className="bg-white/[0.02]">
              <TableRow className="border-white/5 hover:bg-transparent">
                <TableHead className="py-5 px-6 text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">Customer</TableHead>
                <TableHead className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">Phone</TableHead>
                <TableHead className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">Status</TableHead>
                <TableHead className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">Recent Activity</TableHead>
                <TableHead className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">Time</TableHead>
                <TableHead className="text-right px-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow 
                  key={customer.phone} 
                  className={cn(
                    "border-white/5 hover:bg-white/[0.03] transition-colors border-l-4",
                    customer.status === "Paid" ? "border-l-green-500" :
                    customer.status === "Interested" ? "border-l-orange-500" :
                    "border-l-slate-700"
                  )}
                >
                  <TableCell className="py-5 px-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-10 h-10 border border-white/10">
                        <AvatarFallback className="bg-white/5 text-white font-bold">
                          {customer.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-bold text-white">{customer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-500 font-mono text-[11px]">{customer.phone}</TableCell>
                  <TableCell>
                    <Badge className={cn(
                      "rounded-lg px-2.5 py-1 font-black uppercase tracking-widest text-[9px] border",
                      customer.status === "Paid" ? "bg-green-500/10 text-green-400 border-green-500/20" :
                      customer.status === "Interested" ? "bg-orange-500/10 text-orange-400 border-orange-500/20" :
                      "bg-white/5 text-slate-400 border-white/10"
                    )}>
                      {customer.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-[250px] truncate text-slate-400 text-sm font-medium italic">"{customer.lastMessage}"</TableCell>
                  <TableCell className="text-slate-600 text-[11px] uppercase font-bold tracking-tighter">{customer.date}</TableCell>
                  <TableCell className="text-right px-6">
                    <Button variant="ghost" size="icon" className="text-slate-600 hover:text-white">
                      <MoreHorizontal className="w-5 h-5" />
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

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

