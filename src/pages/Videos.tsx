import { Film, PlayCircle } from "lucide-react";

export default function Videos() {
  const videos = [
    { id: 1, title: "A Longa Noite", desc: "Rotina de confinamento no Estação", duration: "45:00", thumb: "https://images.unsplash.com/photo-1517584428059-e93233261272?auto=format&fit=crop&q=80" },
    { id: 2, title: "Travessia de Drake", desc: "A bordo do navio polar", duration: "1:20:00", thumb: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80" },
    { id: 3, title: "Isolamento Branco", desc: "Efeitos do ICE no cérebro", duration: "32:15", thumb: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80" },
    { id: 4, title: "Laboratório Externo", desc: "Campo e perigos", duration: "18:40", thumb: "https://images.unsplash.com/photo-1555231737-674b6bd2bd61?auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-0.5 border border-accent/50 text-accent text-[9px] uppercase tracking-widest">Documentários</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic tracking-tight mb-4">
              Vídeos & Documentários
            </h1>
            <p className="text-lg text-white/70 font-light max-w-2xl text-balance">
               Filmes e arquivos audiovisuais do extremo sul.
            </p>
          </div>
          <Film className="w-12 h-12 text-white/10 hidden md:block" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map(v => (
            <div key={v.id} className="group cursor-pointer">
              <div className="aspect-video relative overflow-hidden bg-card border border-white/5 mb-4 ring-1 ring-white/0 hover:ring-accent/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img src={v.thumb} alt={v.title} className="w-full h-full object-cover transition-transform duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center z-20">
                  <PlayCircle className="w-16 h-16 text-white/50 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 text-[10px] font-mono text-white border border-white/10 z-30">
                  {v.duration}
                </div>
              </div>
              <h3 className="text-xl font-medium tracking-wide mb-1 text-white group-hover:text-accent transition-colors">{v.title}</h3>
              <p className="text-white/60 text-sm font-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
