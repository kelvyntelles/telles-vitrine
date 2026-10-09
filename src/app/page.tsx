import { AnuncioCard } from "@/components/anuncio-card";
import { BannerAnuncio } from "@/components/banner-anuncio/banner-anuncio";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroTvSection } from "@/components/hero-tv-section/hero-tv-section";
import { SectionHeader } from "@/components/section-header/section-header";
import { Anuncio } from "@/types/Anuncio";
import { ANUNCIOS_DATA } from "@/utils";

export default function Home() {
  const listaDeAnuncios = ANUNCIOS_DATA
  
  function getAnuncios(anuncios: Anuncio[]) {
    return anuncios.filter(anuncio => anuncio.ativo === true);
  }

  const anunciosAtivos = getAnuncios(listaDeAnuncios);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <div className="meu-container flex-1">
        <HeroTvSection />

        <div className="flex flex-col gap-8">
          <BannerAnuncio
              nome="Rádio Telles Notícias"
              imagem="/images/banners/radio-telles.png"
              href="https://radiotelles.com/"
          />

          <section>
              <h2 className="mb-2 text-xl font-bold">
                  Confira os anúncios
              </h2>

              <p className="mb-6 text-sm text-secondary">
                  Conheça os melhores negócios, produtos e serviços da nossa região.
              </p>

              <div className="flex flex-col gap-6">
                  {anunciosAtivos.map((anuncio, index) => (
                      <AnuncioCard
                          key={anuncio.id}
                          imagemLogo={anuncio.logo}
                          imagemCapa={anuncio.capa}
                          categoria={anuncio.categoria}
                          nome={anuncio.nome}
                          descricao={anuncio.descricao}
                          localizacao={`${anuncio.localizacao.cidade} - ${anuncio.localizacao.estado}`}
                          slug={anuncio.slug}
                          imagemEsquerda={index % 2 === 0}
                      />
                  ))}
              </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
