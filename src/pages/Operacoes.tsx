import { useState, useMemo } from "react";
import { Filter, Play, Image as ImageIcon } from "lucide-react";
import { cn } from "../lib/utils";

// Mock data
const OPERACOES = ["Operação 38", "Operação 39", "Operação 40", "Operação 41", "Operação 42", "Operação 43", "Operação 44"];
const CATEGORIAS = ["EACF", "Navio", "Acampamento", "Paisagens", "Rotina da missão", "Fauna antártica", "Expedições externas", "Retratos"];

const MOCK_ITEMS = Array.from({ length: 24 }).map((_, i) => ({
  id: i,
  title: `Registro Antártico ${i + 1}`,
  operation: OPERACOES[i % OPERACOES.length],
  category: CATEGORIAS[i % CATEGORIAS.length],
  type: i % 3 === 0 ? "video" : "photo",
  cover: `https://images.unsplash.com/photo-${1500000000000 + i * 10000}?auto=format&fit=crop&q=80&w=600`, // Unsplash pattern mock
  tags: ["Antártica", "PROANTAR", i % 2 === 0 ? "saúde mental" : "gelo"]
}));

// Real high-quality images for placeholders
const IMAGES = [
  "https://images.unsplash.com/photo-1517584428059-e93233261272?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1521404106606-d586940de3bb?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534954452093-f111811a2fba?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1621271167732-c64beabef911?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80",
];

export default function Operacoes() {
  const [activeOp, setActiveOp] = useState<string>("Todas");
  const [activeCat, setActiveCat] = useState<string>("Todas");

  // Mix images for items
  const mixedItems = useMemo(() => {
    return MOCK_ITEMS.map((item, index) => ({
      ...item,
      cover: IMAGES[index % IMAGES.length]
    }));
  }, []);

  const filteredItems = mixedItems.filter(item => {
    const matchOp = activeOp === "Todas" || item.operation === activeOp;
    const matchCat = activeCat === "Todas" || item.category === activeCat;
    return matchOp && matchCat;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-2 py-0.5 border border-accent/50 text-accent text-[9px] uppercase tracking-widest">Catálogo Oficial</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic tracking-tight mb-6">
            Operações do PROANTAR
          </h1>
          <p className="text-lg text-white/70 max-w-3xl font-light">
            Navegue pelos registros documentais, fotográficos e científicos das missões antárticas.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-col gap-6 mb-12">
          {/* Operations Filter */}
          <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide border-b border-white/5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 whitespace-nowrap"><Filter className="w-3 h-3 inline mr-2"/> Missão</span>
            <button
              onClick={() => setActiveOp("Todas")}
              className={cn("px-4 py-1 rounded-sm text-[11px] uppercase tracking-widest whitespace-nowrap transition-colors border", activeOp === "Todas" ? "bg-white text-black border-white" : "border-white/5 text-white/50 hover:bg-white/5 hover:text-white")}
            >
              Todas
            </button>
            {OPERACOES.map(op => (
               <button
               key={op}
               onClick={() => setActiveOp(op)}
               className={cn("px-4 py-1 rounded-sm text-[11px] uppercase tracking-widest whitespace-nowrap transition-colors border", activeOp === op ? "bg-white text-black border-white" : "border-white/5 text-white/50 hover:bg-white/5 hover:text-white")}
             >
               {op}
             </button>
            ))}
          </div>

          {/* Categories Filter */}
          <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide border-b border-white/5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 whitespace-nowrap">Categoria</span>
            <button
              onClick={() => setActiveCat("Todas")}
              className={cn("px-4 py-1 rounded-sm text-[11px] uppercase tracking-widest whitespace-nowrap transition-colors border", activeCat === "Todas" ? "bg-accent/20 text-accent border-accent/50" : "border-white/5 text-white/50 hover:bg-white/5 hover:text-white")}
            >
              Todas
            </button>
            {CATEGORIAS.map(cat => (
               <button
               key={cat}
               onClick={() => setActiveCat(cat)}
               className={cn("px-4 py-1 rounded-sm text-[11px] uppercase tracking-widest whitespace-nowrap transition-colors border", activeCat === cat ? "bg-accent/20 text-accent border-accent/50" : "border-white/5 text-white/50 hover:bg-white/5 hover:text-white")}
             >
               {cat}
             </button>
            ))}
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="group cursor-pointer flex flex-col gap-3">
              <div className="relative aspect-[4/3] overflow-hidden bg-card border border-white/5 ring-1 ring-white/0 hover:ring-accent/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={item.cover} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors z-20" />
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md p-1.5 rounded-sm text-white border border-white/10 z-30">
                  {item.type === 'video' ? <Play className="w-3 h-3 fill-current" /> : <ImageIcon className="w-3 h-3" />}
                </div>
              </div>
              <div>
                <p className="text-[9px] font-semibold text-accent uppercase tracking-[0.2em] mb-1">
                  {item.operation} • {item.category}
                </p>
                <h3 className="font-medium text-sm tracking-wide text-white group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-32 text-center text-muted-foreground">
            <p className="text-xl">Nenhum registro encontrado para estes filtros.</p>
          </div>
        )}
      </div>
    </div>
  );
}
