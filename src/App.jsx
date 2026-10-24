import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollManager from "./components/ScrollManager";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

function AppContent() {
  const location = useLocation();

  const isProjectDetailsPage = location.pathname.startsWith("/projects/");

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <ScrollManager />
      <ScrollProgress />
      {!isProjectDetailsPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;