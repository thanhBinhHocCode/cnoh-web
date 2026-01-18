import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import OrderPage from "./pages/OrderPage";
import StoresPage from "./pages/StoresPage";
import CareersPage from "./pages/CareersPage";
import FranchisePage from "./pages/FranchisePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thuc-don" element={<MenuPage />} />
          <Route path="/ve-o-hoen" element={<AboutPage />} />
          <Route path="/dat-mon" element={<OrderPage />} />
          <Route path="/cua-hang" element={<StoresPage />} />
          <Route path="/tuyen-dung" element={<CareersPage />} />
          <Route path="/nhuong-quyen" element={<FranchisePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
