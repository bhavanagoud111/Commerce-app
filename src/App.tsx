import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import Payments from "./pages/Payments";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import BankingCards from "./pages/services/BankingCards";
import MortgagesLoans from "./pages/services/MortgagesLoans";
import InvestmentServices from "./pages/services/InvestmentServices";
import BusinessBanking from "./pages/services/BusinessBanking";
import WealthManagement from "./pages/services/WealthManagement";
import DigitalSecurity from "./pages/services/DigitalSecurity";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
          <Route path="/services/banking-cards" element={<BankingCards />} />
          <Route path="/services/mortgages-loans" element={<MortgagesLoans />} />
          <Route path="/services/investment-services" element={<InvestmentServices />} />
          <Route path="/services/business-banking" element={<BusinessBanking />} />
          <Route path="/services/wealth-management" element={<WealthManagement />} />
          <Route path="/services/digital-security" element={<DigitalSecurity />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
