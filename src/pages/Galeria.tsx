import { useState } from "react";
import { Filter, X, Expand, Upload } from "lucide-react";
import { cn } from "../lib/utils";

// Real high-quality images 
const INITIAL_IMAGES = [
  { id: 1, url: "https://images.unsplash.com/photo-1517584428059-e93233261272?auto=format&fit=crop&q=80&w=1200", title: "Gelo Eterno", tags: ["Paisagens", "Gelo"] },
  { id: 2, url: "https://images.unsplash.com/photo-1521404106606-d586940de3bb?auto=format&fit=crop&q=80&w=1200", title: "Navio Ary Rongel", tags: ["Navio", "Operação 40"] },
  { id: 3, url: "https://images.unsplash.com/photo-1534954452093-f111811a2fba?auto=format&fit=crop&q=80&w=1200", title: "Pinguim Antártico", tags: ["Fauna antártica"] },
  { id: 4, url: "https://images.unsplash.com/photo-1555231737-674b6bd2bd61?auto=format&fit=crop&q=80&w=1200", title: "Formação Glacial", tags: ["Paisagens"] },
  { id: 5, url: "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?auto=format&fit=crop&q=80&w=1200", title: "Expedição Externa", tags: ["Expedições externas", "EACF"] },
  { id: 6, url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200", title: "Pesquisador em campo", tags: ["Retratos", "Ciência"] },
  { id: 7, url: "https://images.unsplash.com/photo-1621271167732-c64beabef911?auto=format&fit=crop&q=80&w=1200", title: "Noite Longa", tags: ["Paisagens", "Inverno"] },
  { id: 8, url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200", title: "Laboratório A", tags: ["EACF", "Rotina da missão"] },
];

const TAGS = ["Todas", "EACF", "Navio", "Acampamento", "Paisagens", "Rotina da missão", "Fauna antártica", "Expedições externas", "Retratos"];

export default function Galeria() {
  const [activeTag, setActiveTag] = useState("Todas");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState(INITIAL_IMAGES);
  const [isUploading, setIsUploading] = useState(false);

  const filteredImages = activeTag === "Todas" 
    ? images 
    : images.filter(i => i.tags.includes(activeTag));

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // Simulate direct upload
      setTimeout(() => {
        const fakeUrl = URL.createObjectURL(file);
        setImages([{ id: Date.now(), url: fakeUrl, title: file.name, tags: ['Upload Recente'] }, ...images]);
        setIsUploading(false);
      }, 1500);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-2 py-0.5 border border-accent/50 text-accent text-[9px] uppercase tracking-widest">Acervo Visual</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic tracking-tight mb-6 text-foreground">
                Arquivo Visual
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed mb-8">
                Catálogo fotográfico em alta resolução documentando a paisagem, as operações e a experiência humana na Antártica.
              </p>
            </div>
            {/* Upload Button */}
            <div className="flex-shrink-0">
              <label className="flex items-center gap-2 px-6 py-3 cursor-pointer bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-bold hover:bg-accent hover:text-white transition-colors">
                <Upload className="w-4 h-4" />
                {isUploading ? 'Enviando...' : 'Fazer Upload de Foto'}
                <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} disabled={isUploading} />
              </label>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={cn(
                  "px-4 py-1 rounded-sm text-[11px] uppercase tracking-widest whitespace-nowrap transition-colors border",
                  activeTag === tag 
                    ? "bg-foreground text-background border-foreground font-medium" 
                    : "bg-transparent text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </header>

        {/* Cinematic Masonry/Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="group relative break-inside-avoid overflow-hidden bg-card border border-border cursor-zoom-in ring-1 ring-transparent hover:ring-accent/50 transition-all"
              onClick={() => setSelectedImage(image.url)}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-1000 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-lg tracking-wide font-medium mb-3">{image.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {image.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 border border-white/20 bg-black/40 backdrop-blur-md rounded-sm text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-black/80 p-2 rounded-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                 <Expand className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Fullscreen Viewer */}
        {selectedImage && (
          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-300">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-colors z-[101]"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={selectedImage} 
              alt="Fullscreen" 
              className="max-w-full max-h-screen object-contain p-4"
            />
          </div>
        )}
      </div>
    </div>
  );
}
