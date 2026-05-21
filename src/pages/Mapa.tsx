import { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { BookOpen, Camera, Play, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

const LOCATIONS = [
  {
    id: 1,
    position: { lat: -62.0833, lng: -58.3833 },
    title: "Estação Antártica Comandante Ferraz (EACF)",
    type: "Estação",
    description: "Base científica brasileira. Foco em biologia marinha, glaciologia e neuropsicologia em ambientes ICE.",
    media: { photos: 24, videos: 5, pubs: 12 },
    gallery: [
      "https://images.unsplash.com/photo-1548231264-b69ee95e5b30?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517584428059-e93233261272?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534954452093-f111811a2fba?auto=format&fit=crop&q=80"
    ],
    link: "/sobre"
  },
  {
    id: 2,
    position: { lat: -63.3166, lng: -57.9000 },
    title: "Acampamento Avançado - Operação 42",
    type: "Acampamento",
    description: "Pesquisa de comportamento humano em isolamento severo.",
    media: { photos: 18, videos: 2, pubs: 3 },
    gallery: [
      "https://images.unsplash.com/photo-1540198031541-b0e7d70404a3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1490682143684-14369e18dce8?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1463137887372-520ab428ecbf?auto=format&fit=crop&q=80"
    ],
    link: "/operacoes"
  },
  {
    id: 3,
    position: { lat: -62.4500, lng: -59.5000 },
    title: "Baía do Almirantado",
    type: "Observação",
    description: "Encontros com a fauna antártica e monitoramento climático.",
    media: { photos: 45, videos: 8, pubs: 0 },
    gallery: [
      "https://images.unsplash.com/photo-1534954452093-f111811a2fba?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517584428059-e93233261272?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521404106606-d586940de3bb?auto=format&fit=crop&q=80"
    ],
    link: "/galeria"
  },
  {
    id: 4,
    position: { lat: -61.0500, lng: -56.2000 },
    title: "Travessia do Drake",
    type: "Navio Ary Rongel",
    description: "Documentário sobre a dinâmica a bordo durante as tempestades no canal de Drake.",
    media: { photos: 8, videos: 3, pubs: 1 },
    gallery: [
      "https://images.unsplash.com/photo-1500350730164-88aa380fb359?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521404106606-d586940de3bb?auto=format&fit=crop&q=80"
    ],
    link: "/videos"
  }
];

function MarkerWithInfoWindow({ location, onClose, onImageClick }: { location: typeof LOCATIONS[0], onClose: () => void, onImageClick: (images: string[], idx: number) => void }) {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AdvancedMarker 
        ref={markerRef} 
        position={location.position} 
        onClick={() => setOpen(true)}
      >
        <Pin background="#050505" borderColor="#A5D8FF" glyphColor="#A5D8FF" />
      </AdvancedMarker>
      
      {open && (
        <InfoWindow anchor={marker} onCloseClick={() => { setOpen(false); onClose(); }}>
          <div className="p-1.5 max-w-[280px] font-sans text-black bg-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[9px] uppercase tracking-widest text-[#050505] border border-[#050505]/20 px-1 py-0.5">{location.type}</span>
            </div>
            <h3 className="font-medium text-lg leading-tight tracking-tight text-[#050505] mb-2">{location.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed font-light mb-4">{location.description}</p>
            
            {location.gallery && location.gallery.length > 0 && (
              <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide snap-x">
                {location.gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    className="w-16 h-16 object-cover flex-shrink-0 cursor-zoom-in snap-start border border-black/10 hover:opacity-80 transition-opacity"
                    onClick={() => onImageClick(location.gallery, idx)}
                  />
                ))}
              </div>
            )}

            <div className="flex gap-4 mb-4 border-t border-gray-200 pt-3">
              <div className="flex items-center gap-1.5 text-xs font-mono text-gray-600" title="Fotos">
                <Camera className="w-3.5 h-3.5" /> <span>{location.media.photos}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-gray-600" title="Vídeos">
                <Play className="w-3.5 h-3.5" /> <span>{location.media.videos}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-gray-600" title="Publicações">
                <BookOpen className="w-3.5 h-3.5" /> <span>{location.media.pubs}</span>
              </div>
            </div>

            <Link 
              to={location.link} 
              className="flex items-center justify-between w-full p-2.5 bg-[#050505] text-[#F5F5F5] rounded-sm text-[10px] uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors"
            >
              <span>Explorar Acervo</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

export default function Mapa() {
  const [lightboxData, setLightboxData] = useState<{ images: string[], currentIndex: number } | null>(null);

  const openLightbox = (images: string[], index: number) => {
    setLightboxData({ images, currentIndex: index });
  };

  const closeLightbox = () => setLightboxData(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxData) {
      setLightboxData({
        ...lightboxData,
        currentIndex: (lightboxData.currentIndex + 1) % lightboxData.images.length
      });
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxData) {
      setLightboxData({
        ...lightboxData,
        currentIndex: (lightboxData.currentIndex - 1 + lightboxData.images.length) % lightboxData.images.length
      });
    }
  };

  if (!hasValidKey) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex items-center justify-center bg-background transition-colors duration-700">
        <div className="max-w-xl border border-white/10 bg-card p-8 text-center ring-1 ring-white/5">
          <h2 className="font-display text-3xl font-light italic text-white mb-6">Mapa Interativo Temporariamente Indisponível</h2>
          <p className="text-white/70 mb-8 font-light leading-relaxed text-left">
            Para visualizar o mapa das expedições antárticas, é necessário configurar a chave do <strong>Google Maps Platform</strong>.
          </p>
          <div className="text-left text-sm text-white/50 space-y-4 bg-white/5 p-6 rounded-sm border border-white/5">
            <p><strong className="text-white">Passo 1:</strong> <a href="https://console.cloud.google.com/google/maps-apis/start?utm_campaign=gmp-code-assist-ais" target="_blank" rel="noopener" className="text-accent hover:underline">Obtenha uma chave de API</a></p>
            <p><strong className="text-white">Passo 2:</strong> Adicione a chave como Secret no AI Studio:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Abra as <strong>Configurações</strong> (ícone ⚙️ no canto superior direito)</li>
              <li>Acesse a aba <strong>Secrets</strong></li>
              <li>Crie uma nova Secret chamada <code className="text-accent bg-black/30 px-1 py-0.5 rounded">GOOGLE_MAPS_PLATFORM_KEY</code></li>
              <li>Cole a sua chave de API e pressione <strong>Enter</strong></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen flex flex-col bg-background transition-colors duration-700 relative z-10">
      <div className="absolute top-20 left-0 w-full z-20 pointer-events-none p-6 md:p-10">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="px-2 py-0.5 border border-accent/50 text-accent text-[9px] uppercase tracking-widest bg-background/80 backdrop-blur-md transition-colors duration-700">Geo-Mapeamento</span>
          <h1 className="font-display text-3xl text-foreground italic tracking-tight bg-background/80 px-4 py-1 backdrop-blur-md border border-border transition-colors duration-700">
            Cartografia PROANTAR
          </h1>
        </div>
      </div>
      
      <div className="flex-1 w-full bg-[#050505] relative">
        <APIProvider apiKey={API_KEY} version="weekly">
          <Map
            defaultCenter={{ lat: -62.2, lng: -58.5 }} // Centered around King George Island / EACF
            defaultZoom={7}
            mapId="DEMO_MAP_ID"
            colorScheme="DARK"
            internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
            style={{ width: '100%', height: '100%' }}
            disableDefaultUI={false}
            mapTypeControl={false}
            streetViewControl={false}
          >
            {LOCATIONS.map(loc => (
              <MarkerWithInfoWindow key={loc.id} location={loc} onClose={() => {}} onImageClick={openLightbox} />
            ))}
          </Map>
        </APIProvider>

        {/* Ambient Map Gradients to blend into Editorial Aesthetic */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />

        {/* Lightbox Overlay */}
        {lightboxData && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>
            
            {lightboxData.images.length > 1 && (
              <button 
                className="absolute left-6 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white/50 hover:text-white rounded-full hover:bg-black/80 transition-colors"
                onClick={prevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            <img 
              src={lightboxData.images[lightboxData.currentIndex]} 
              alt="High resolution gallery image" 
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {lightboxData.images.length > 1 && (
              <button 
                className="absolute right-6 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white/50 hover:text-white rounded-full hover:bg-black/80 transition-colors"
                onClick={nextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm px-4 py-2 bg-black/50 rounded-full">
              {lightboxData.currentIndex + 1} / {lightboxData.images.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
