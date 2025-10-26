import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Universities from "./pages/Universities";
import Scholarships from "./pages/Scholarships";
import CareerAdvisor from "./pages/CareerAdvisor";
import AIMatcher from "./pages/AIMatcher";
import AIMatcherNew from "./pages/AIMatcherNew";
import ProgramDetail from "./pages/ProgramDetail";
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
          <Route path="/universities" element={<Universities />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/careers" element={<CareerAdvisor />} />
          <Route path="/ai-matcher" element={<AIMatcherNew />} />
          <Route path="/ai-matcher-old" element={<AIMatcher />} />
          <Route path="/program/:id" element={<ProgramDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
