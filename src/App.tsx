
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ClientDashboard from "./pages/ClientDashboard";
import TailorDashboard from "./pages/TailorDashboard";
import SearchTailors from "./pages/SearchTailors";
import ChatPage from "./pages/ChatPage";
import OrderPage from "./pages/OrderPage";
import TailorProfile from "./pages/TailorProfile";
import PublicationsPage from "./pages/PublicationsPage";
import OrderDetails from "./pages/OrderDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/tailor-dashboard" element={<TailorDashboard />} />
          <Route path="/search-tailors" element={<SearchTailors />} />
          <Route path="/tailor/:id" element={<TailorProfile />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
