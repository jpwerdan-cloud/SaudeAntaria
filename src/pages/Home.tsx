import { Link } from "react-router-dom";
import { Play, Info, ChevronRight } from "lucide-react";

// Mock data to simulate the premium content
const DESTAQUES = [
  { id: 1, title: "Sob a Tempestade Branca", type: "Documentário", cover: "https://images.unsplash.com/photo-1517584428059-e93233261272?auto=format&fit=crop&q=80" },
  { id: 2, title: "Isolamento Extremo", type: "Depoimentos", cover: "https://images.unsplash.com/photo-1521404106606-d586940de3bb?auto=format&fit=crop&q=80" },
  { id: 3, title: "Medicina Polar: EACF", type: "Série", cover: "https://images.unsplash.com/photo-1534954452093-f111811a2fba?auto=format&fit=crop&q=80" },
  { id: 4, title: "Inverno sem Sol", type: "Filme", cover: "https://images.unsplash.com/photo-1621271167732-c64beabef911?auto=format&fit=crop&q=80" },
  { id: 5, title: "Navio Ary Rongel", type: "Expedição", cover: "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?auto=format&fit=crop&q=80" },
];

const PROJETOS = [
  { id: 1, title: "Coping em Ambientes ICE", category: "Ciência", cover: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80" },
  { id: 2, title: "Análise Comportamental", category: "Pesquisa", cover: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80" },
  { id: 3, title: "Limites do Confinamento", category: "Saúde Mental", cover: "https://images.unsplash.com/photo-1518331647614-7a1f04cd34cb?auto=format&fit=crop&q=80" },
];

function MediaCarousel({ title, items }: { title: string, items: any[] }) {
  return (
    <div className="mb-12">
      <div className="px-6 md:px-10 flex items-center justify-between mb-4">
        <h2 className="text-[11px] uppercase tracking-[0.3em] font-semibold text-muted-foreground">{title}</h2>
        <div className="h-px flex-grow mx-6 bg-border"></div>
        <div className="hidden md:flex gap-2">
          <div className="w-8 h-[2px] bg-foreground"></div>
          <div className="w-8 h-[2px] bg-muted"></div>
          <div className="w-8 h-[2px] bg-muted"></div>
        </div>
      </div>
      <div className="flex overflow-x-auto gap-5 px-6 md:px-10 pb-8 pt-2 scrollbar-hide snap-x">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="snap-start shrink-0 relative group w-72 h-40 bg-card border border-border overflow-hidden ring-1 ring-transparent hover:ring-accent/50 transition-all cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src={item.cover} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 p-4 w-full bg-gradient-to-t from-black/80 to-transparent z-20">
              <div className="text-[10px] text-accent uppercase tracking-widest mb-1 opacity-80 group-hover:opacity-100 transition-opacity">{item.category || item.type}</div>
              <div className="text-sm font-medium tracking-wide text-white">{item.title}</div>
            </div>
          </div>
        ))}
        {/* "Ver Mais" card */}
        <div className="snap-start shrink-0 relative group w-72 h-40 bg-card border border-border overflow-hidden opacity-50 hover:opacity-100 transition-all flex items-center justify-center cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent"></div>
          <div className="absolute bottom-0 p-4 w-full text-center">
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors">Ver Mais</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col bg-background transition-colors duration-700 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-accent/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex flex-col justify-end pb-12 z-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div 
             className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-[slowZoom_30s_ease-in-out_infinite_alternate] opacity-40 mix-blend-luminosity"
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548231264-b69ee95e5b30?auto=format&fit=crop&q=80")' }}
           />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full px-6 md:px-10 mt-32">
          <div className="max-w-3xl mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-2 py-0.5 border border-accent/50 text-accent text-[9px] uppercase tracking-widest">PROANTAR Official Archive</span>
              <span className="text-muted-foreground text-[9px] uppercase tracking-widest">Operação Antártica XLII</span>
            </div>
            <h1 className="text-5xl md:text-[84px] leading-[0.9] font-light mb-6 font-display italic tracking-tight text-foreground">
              Silêncio Profundo
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-light mb-8">
              Memórias visuais, ciência e experiências pessoais nas missões antárticas brasileiras. Uma exploração sobre o coping humano em ambientes extremos.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                to="/operacoes"
                className="bg-primary text-primary-foreground px-8 py-3 text-[11px] uppercase tracking-[0.2em] font-bold flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Play className="w-4 h-4 fill-current" /> Assistir Agora
              </Link>
              <Link 
                to="/entrevistas"
                className="bg-card backdrop-blur-md border border-border text-foreground px-8 py-3 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-muted transition-all"
              >
                Explorar Operações
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative z-20 space-y-4 pb-24">
        <MediaCarousel title="Destaques da Temporada" items={DESTAQUES} />
        <MediaCarousel title="Projetos Científicos" items={PROJETOS} />
        <MediaCarousel title="Memórias Visuais" items={[...DESTAQUES].reverse()} />
      </section>

      {/* Floating Elements from theme */}
      <footer className="fixed bottom-6 right-6 md:right-10 z-30 hidden lg:flex items-center gap-4">
        <div className="flex items-center gap-1 bg-background/80 backdrop-blur-md p-2 rounded-md border border-border transition-colors duration-700">
          <span className="text-[9px] text-muted-foreground uppercase tracking-widest mr-2">Operações:</span>
          <span className="w-6 h-6 flex items-center justify-center text-[10px] border border-border hover:border-accent hover:text-accent cursor-pointer transition-colors">38</span>
          <span className="w-6 h-6 flex items-center justify-center text-[10px] border border-border hover:border-accent hover:text-accent cursor-pointer transition-colors">39</span>
          <span className="w-6 h-6 flex items-center justify-center text-[10px] border border-border hover:border-accent hover:text-accent cursor-pointer transition-colors">40</span>
          <span className="w-6 h-6 flex items-center justify-center text-[10px] border border-border hover:border-accent hover:text-accent cursor-pointer transition-colors">41</span>
          <span className="w-6 h-6 flex items-center justify-center text-[10px] border border-accent text-accent">42</span>
          <span className="w-6 h-6 flex items-center justify-center text-[10px] border border-border opacity-30 cursor-not-allowed">43</span>
          <span className="w-6 h-6 flex items-center justify-center text-[10px] border border-border opacity-30 cursor-not-allowed">44</span>
        </div>
      </footer>

      <div className="fixed left-0 top-1/2 -translate-y-1/2 h-48 w-1 hidden lg:flex flex-col gap-2 z-50">
        <div className="w-full h-1/4 bg-accent shadow-[0_0_10px_var(--accent)]"></div>
        <div className="w-full h-1/4 bg-border cursor-pointer hover:bg-foreground/40 transition-colors"></div>
        <div className="w-full h-1/4 bg-border cursor-pointer hover:bg-foreground/40 transition-colors"></div>
        <div className="w-full h-1/4 bg-border cursor-pointer hover:bg-foreground/40 transition-colors"></div>
      </div>
    </div>
  );
}
