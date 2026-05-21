import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Operacoes from "./pages/Operacoes";
import Entrevistas from "./pages/Entrevistas";
import Publicacoes from "./pages/Publicacoes";
import Sobre from "./pages/Sobre";
import Galeria from "./pages/Galeria";
import Videos from "./pages/Videos";
import Mapa from "./pages/Mapa";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="saudeantar-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="operacoes" element={<Operacoes />} />
            <Route path="entrevistas" element={<Entrevistas />} />
            <Route path="publicacoes" element={<Publicacoes />} />
            <Route path="mapa" element={<Mapa />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="galeria" element={<Galeria />} />
            <Route path="videos" element={<Videos />} />
            <Route path="*" element={<div className="h-[70vh] flex flex-col items-center justify-center text-center"><h1 className="text-4xl font-display mb-4">Página em Construção</h1><p className="text-muted-foreground">O acesso a esta seção ainda não foi liberado.</p></div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
