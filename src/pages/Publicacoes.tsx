import { Download, ExternalLink, FileText, BookOpen } from "lucide-react";

export default function Publicacoes() {
  const publicacoes = [
    {
      id: 1,
      title: "Impactos Neuropsicológicos do Inverno Antártico na Equipe da EACF",
      authors: "Silva, M.; Pereira, J.; Costa, L.",
      journal: "Polar Medicine Review",
      year: 2023,
      doi: "10.1234/pmr.2023.045",
      type: "Artigo",
      tags: ["Saúde Mental", "Inverno", "Confinamento"]
    },
    {
      id: 2,
      title: "Estratégias de Coping e Adaptação Social durante a Operação 40",
      authors: "Almeida, R.; Santos, F.",
      journal: "Journal of Extreme Environments",
      year: 2022,
      doi: "10.5678/jee.2022.012",
      type: "Artigo",
      tags: ["Coping", "Social", "Operação 40"]
    },
    {
      id: 3,
      title: "Isolamento e Cronobiologia: Alterações de Sono em Ambientes ICE",
      authors: "Ferreira, A.; Lima, P.",
      journal: "Annals of Human Biology in ICE",
      year: 2024,
      doi: "10.9012/ahb.2024.089",
      type: "Artigo",
      tags: ["Sono", "Ambiente ICE"]
    },
    {
      id: 4,
      title: "A Vida no Gelo: Relatos Inéditos PROANTAR",
      authors: "Universidade Federal | SaúdeAntar",
      journal: "Editora Polar",
      year: 2021,
      doi: "",
      type: "E-book",
      tags: ["História", "PROANTAR", "Relatos"]
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-2 py-0.5 border border-accent/50 text-accent text-[9px] uppercase tracking-widest">Base de Dados</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic tracking-tight mb-6 text-foreground">
            Publicações Científicas
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl font-light leading-relaxed">
            Acervo de artigos científicos, teses e publicações resultantes da pesquisa sobre comportamento, medicina polar e adaptação em missões antárticas.
          </p>
        </header>

        <div className="flex flex-col gap-6">
          {publicacoes.map((pub) => (
            <div key={pub.id} className="group p-6 md:p-8 border border-border bg-card hover:bg-muted/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6 ring-1 ring-transparent hover:ring-accent/50">
              
              <div className="flex items-start gap-6 flex-1">
                <div className="hidden md:flex mt-1 p-3 bg-muted text-muted-foreground group-hover:text-accent group-hover:bg-accent/10 transition-colors border border-border">
                  {pub.type === "E-book" ? <BookOpen className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-[9px] font-semibold text-accent uppercase tracking-[0.2em]">{pub.type}</span>
                    <span className="text-[10px] text-muted-foreground font-mono">{pub.year}</span>
                    <div className="flex gap-2">
                      {pub.tags.map(tag => (
                        <span key={tag} className="text-[9px] px-2 py-0.5 uppercase tracking-widest bg-muted text-foreground/70 border border-border">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-2 leading-tight text-foreground group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1 font-light tracking-wide">
                    <span className="font-medium text-foreground">{pub.authors}</span> • {pub.journal}
                  </p>
                  {pub.doi && (
                    <p className="text-[10px] text-muted-foreground/70 uppercase tracking-widest">
                      DOI: <a href={`https://doi.org/${pub.doi}`} className="hover:text-accent transition-colors hover:underline">{pub.doi}</a>
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-border md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-6">
                <button className="flex items-center justify-center gap-2 px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold border border-foreground/20 hover:bg-foreground hover:text-background transition-colors w-full md:w-auto text-foreground">
                  <Download className="w-4 h-4" /> PDF
                </button>
                <button className="flex items-center justify-center p-3 border border-foreground/20 hover:bg-muted transition-colors text-foreground">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
