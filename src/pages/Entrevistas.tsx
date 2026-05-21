import { Play, Quote } from "lucide-react";

export default function Entrevistas() {
  const entrevistas = [
    {
      id: 1,
      name: "Dra. Helena Martins",
      role: "Psicóloga - Operação 42",
      quote: "O isolamento absoluto não revela quem você quer ser, revela quem você realmente é.",
      cover: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Cmdt. Silva Alves",
      role: "Comandante Navio Ary Rongel",
      quote: "No canal de Drake, o mar dita as regras. A mente precisa estar tão serena quanto um lago para liderar.",
      cover: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Dr. Carlos Mendes",
      role: "Chefe Científico - PROANTAR",
      quote: "Nós viemos estudar a Antártica, mas a Antártica acaba estudando o nosso comportamento coletivo.",
      cover: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-2 py-0.5 border border-accent/50 text-accent text-[9px] uppercase tracking-widest">PROANTAR Oficial</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic tracking-tight mb-6 text-foreground">
            Entrevistas & Depoimentos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed">
            Relatos viscerais sobre a convivência humana, o coping psicológico e os limites da adaptação em um dos ambientes mais extremos do planeta.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {entrevistas.map((entrevista) => (
            <div key={entrevista.id} className="group relative overflow-hidden bg-card border border-border ring-1 ring-transparent hover:ring-accent/50 transition-all duration-300">
              <div className="aspect-[3/4] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={entrevista.cover} 
                  alt={entrevista.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-20" />
                
                <div className="absolute top-6 left-6 text-white/50 z-30 opacity-60">
                  <Quote className="w-6 h-6" />
                </div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-30">
                  <p className="text-xl md:text-xl font-display text-white italic mb-6 leading-relaxed opacity-90 delay-100 transition-opacity">
                    "{entrevista.quote}"
                  </p>
                  <div>
                    <h3 className="font-medium text-white text-lg tracking-wide">{entrevista.name}</h3>
                    <p className="text-accent text-[10px] font-semibold uppercase tracking-[0.2em] mt-1">{entrevista.role}</p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-[10px] uppercase tracking-widest">Assistir Relato</span>
                    <button className="bg-white text-black p-2 hover:bg-accent transition-colors">
                      <Play className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
