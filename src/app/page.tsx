import { Header } from "@/components/header";
import { HeroTvSection } from "@/components/hero-tv-section/hero-tv-section";
import { SectionHeader } from "@/components/section-header/section-header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="meu-container">
        <HeroTvSection />

        <div className="mt-8 pb-24 md:pb-8">
          <SectionHeader 
            titulo="Confira os anúncios" 
            subtitulo="Conheça os melhores negócios, produtos e serviços da nossa região." 
          />
        </div>

        <div>
          <button>Anunciar</button>
        </div>
      </div>
    </div>
  );
}
