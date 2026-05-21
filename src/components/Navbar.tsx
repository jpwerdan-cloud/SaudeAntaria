import { Link } from "react-router-dom";
import { useTheme } from "../components/theme-provider";
import { Moon, Sun, Search, Menu, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-10 py-4 h-20 flex items-center",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-gradient-to-b from-background to-transparent border-transparent"
      )}
    >
      <div className="w-full flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter uppercase">
          SaúdeAntar<span className="text-accent">-ia</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/sobre" className="hover:text-foreground transition-colors">Sobre</Link>
          <Link to="/operacoes" className="hover:text-foreground transition-colors">Operações</Link>
          <Link to="/galeria" className="hover:text-foreground transition-colors">Galeria</Link>
          <Link to="/videos" className="hover:text-foreground transition-colors">Vídeos</Link>
          <Link to="/publicacoes" className="hover:text-foreground transition-colors">Ciência</Link>
          <Link to="/mapa" className="hover:text-foreground transition-colors">Mapa</Link>
          <Link to="/entrevistas" className="hover:text-foreground transition-colors">Entrevistas</Link>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex items-center gap-3 text-[10px] tracking-widest font-medium">
            <span className="text-foreground">PT</span>
            <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">EN</span>
            <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">ES</span>
          </div>
          
          <div className="hidden md:block w-px h-4 bg-border"></div>

          <button className="p-1 hover:text-accent transition-colors">
            <Search className="w-5 h-5 text-foreground/80" />
          </button>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            {theme === "dark" ? <div className="w-4 h-4 bg-accent rounded-full blur-[2px]"></div> : <Sun className="w-4 h-4 text-accent" />}
          </button>
          
          <button className="lg:hidden p-1 hover:text-accent transition-colors">
            <Menu className="w-5 h-5 text-foreground/80" />
          </button>
        </div>
      </div>
    </nav>
  );
}
