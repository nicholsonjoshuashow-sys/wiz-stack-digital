import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PenetrationTesting from "./pages/PenetrationTesting";
import SecurityAssessmentsConsulting from "./pages/SecurityAssessmentsConsulting";
import CISO from "./pages/CISO";
import IncidentResponse from "./pages/IncidentResponse";
import InsiderThreat from "./pages/InsiderThreat";
import TabletopExercises from "./pages/TabletopExercises";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
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
          <Route path="/services/security-assessments-consulting" element={<SecurityAssessmentsConsulting />} />
          <Route path="/services/penetration-testing" element={<PenetrationTesting />} />
          <Route path="/services/CISO" element={<CISO />} />
          <Route path="/services/IR" element={<IncidentResponse />} />
          <Route path="/services/insiderthreat" element={<InsiderThreat />} />
          <Route path="/services/tabletop_exercises" element={<TabletopExercises />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
