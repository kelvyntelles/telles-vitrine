import { AnuncioCard } from "@/components/anuncio-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroTvSection } from "@/components/hero-tv-section/hero-tv-section";
import { SectionHeader } from "@/components/section-header/section-header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <div className="meu-container flex-1">
        <HeroTvSection />

        <div className="mt-8 pb-3">
          <SectionHeader 
            titulo="Confira os anúncios" 
            subtitulo="Conheça os melhores negócios, produtos e serviços da nossa região." 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <AnuncioCard />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
