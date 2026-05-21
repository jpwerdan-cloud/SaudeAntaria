import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-md pt-16 pb-8 px-6 md:px-12 mt-24 transition-colors duration-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight mb-4 inline-block">
            SaúdeAntar-ia
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Memórias visuais, ciência e experiências pessoais nas missões antárticas brasileiras.
            Um projeto documental e científico.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium mb-4 text-primary">Navegação</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/sobre" className="hover:text-accent transition-colors">Sobre o Projeto</Link></li>
            <li><Link to="/operacoes" className="hover:text-accent transition-colors">Operações (38-44)</Link></li>
            <li><Link to="/galeria" className="hover:text-accent transition-colors">Galeria de Fotos</Link></li>
            <li><Link to="/videos" className="hover:text-accent transition-colors">Vídeos & Filmes</Link></li>
            <li><Link to="/blog" className="hover:text-accent transition-colors">Jornal Editorial</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4 text-primary">Acervo Científico</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/publicacoes" className="hover:text-accent transition-colors">Publicações Acadêmicas</Link></li>
            <li><Link to="/entrevistas" className="hover:text-accent transition-colors">Entrevistas & Depoimentos</Link></li>
            <li><Link to="/tags/saude-mental" className="hover:text-accent transition-colors">Saúde Mental & Coping</Link></li>
            <li><Link to="/tags/medicina-polar" className="hover:text-accent transition-colors">Medicina Polar</Link></li>
            <li><Link to="/tags/proantar" className="hover:text-accent transition-colors">PROANTAR</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4 text-primary">Conexão</h4>
          <ul className="space-y-2 text-sm text-muted-foreground mb-6">
            <li><Link to="/contato" className="hover:text-accent transition-colors">Contato Oficial</Link></li>
            <li><a href="#" className="hover:text-accent transition-colors">Apoie o Projeto</a></li>
          </ul>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5"/></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5"/></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-5 h-5"/></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5"/></a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-border/40 text-center md:text-left text-xs text-muted-foreground flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} SaúdeAntar-ia. Todos os direitos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link>
          <Link to="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link>
        </div>
      </div>
    </footer>
  );
}
