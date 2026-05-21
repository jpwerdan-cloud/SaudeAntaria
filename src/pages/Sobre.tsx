export default function Sobre() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-2 py-0.5 border border-accent/50 text-accent text-[9px] uppercase tracking-widest">A Expedição</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic tracking-tight mb-8 leading-tight text-foreground">
            Sobre o Projeto <br />
            <span className="text-muted-foreground">SaúdeAntar-ia</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-8 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            <p>
              O projeto <span className="font-medium text-foreground italic">SaúdeAntar-ia</span> é uma iniciativa multidisciplinar dedicada a catalogar, analisar e apresentar as experiências psicológicas, fisiológicas e sociais de pesquisadores em missões antárticas brasileiras (PROANTAR).
            </p>
            <p>
              Nossa missão é explorar as profundezas do comportamento humano quando submetido a condições de extremo isolamento, confinamento e condições ambientais severas em ambientes ICE (Isolated, Confined, and Extreme).
            </p>
            <p>
              Através de documentários, arquivo fotográfico, entrevistas abertas e dados neuropsicológicos, procuramos não apenas avançar a psicologia polar, mas também contar as histórias viscerais daqueles que habitam os confins do nosso planeta.
            </p>
          </div>

          <div className="space-y-8">
            <div className="aspect-[4/3] relative overflow-hidden bg-card border border-border ring-1 ring-transparent hover:ring-accent/50 transition-all filter grayscale hover:grayscale-0 duration-700 cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1548231264-b69ee95e5b30?auto=format&fit=crop&q=80" 
                alt="Estação Antártica" 
                className="w-full h-full object-cover transition-transform duration-1000 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 z-20" />
              <div className="absolute bottom-4 right-4 text-[9px] font-mono tracking-widest text-primary-foreground bg-primary/80 backdrop-blur-md px-2 py-1 border border-primary-foreground/10 z-30">
                LAT -62.0833 / LON -58.3833
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <h4 className="font-display text-4xl font-light italic text-foreground mb-2">44+</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-semibold">Operações PROANTAR</p>
              </div>
              <div>
                <h4 className="font-display text-4xl font-light italic text-foreground mb-2">3.2k</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-semibold">Horas de Arquivo</p>
              </div>
              <div>
                <h4 className="font-display text-4xl font-light italic text-foreground mb-2">150+</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-semibold">Entrevistas Analisadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
