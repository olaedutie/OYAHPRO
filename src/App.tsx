import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { DashboardHome } from "./components/DashboardHome";
import { CustomersPage } from "./components/CustomersPage";
import { ConversationsPage } from "./components/ConversationsPage";
import { PaymentsPage } from "./components/PaymentsPage";
import { SettingsPage } from "./components/SettingsPage";

export default function App() {
  return (
    <Router>
      <div className="flex bg-[#050505] min-h-screen text-slate-200 antialiased selection:bg-orange-500/30">
        <Sidebar />
        <main className="flex-1 overflow-y-auto h-screen scroll-smooth">
          {/* Subtle background glow */}
          <div className="fixed top-0 right-0 w-[800px] h-[600px] bg-orange-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
          
          <div className="p-8 lg:p-12 max-w-[1600px] mx-auto relative z-10">
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/customers" element={<CustomersPage />} />
              <Route path="/conversations" element={<ConversationsPage />} />
              <Route path="/payments" element={<PaymentsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}


