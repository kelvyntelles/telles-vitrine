import { ContatoSection } from "@/components/contato-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroAnuncio } from "@/components/hero-anuncio";
import { HeroAnuncioSection } from "@/components/hero-anuncio-section";
import { Logo } from "@/components/logo";
import { SectionHeader } from "@/components/section-header/section-header";
import { Anuncio } from "@/types/Anuncio";
import { ANUNCIOS_DATA } from "@/utils";
import { Camera, Clock3, FaceSlightlyFrowning, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function AnuncioPage({ params }: {params: Promise<{ slug: string }>}) {
    const listaDeAnuncios = ANUNCIOS_DATA
    const { slug } = await params

    function getAnuncio(anuncios: Anuncio[], slug: string) {
    return anuncios.filter(anuncio => anuncio.slug === slug)[0];
    }

    const anuncio = getAnuncio(listaDeAnuncios, slug);

    if (!anuncio || anuncio.ativo === false) {
        return (
            <div className="flex flex-col gap-2 justify-center items-center h-screen">
                <Logo />
                <h1 className="text-2xl flex items-center gap-2">
                    Anúncio não encontrado
                    <FaceSlightlyFrowning />
                </h1>
                <Link href="/" className="text-brand">Lista de anúncios</Link>
            </div>
        )
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            
            <HeroAnuncioSection 
                capa={anuncio.capa}
                logo={anuncio.logo}
                nome={anuncio.nome}
                categoria={anuncio.categoria}
                descricao={anuncio.descricao}
                localizacao={`${anuncio.localizacao.cidade} - ${anuncio.localizacao.estado}`}
                whatsapp={anuncio.contato.whatsapp}
            />

            <div className="meu-container pt-0 md:pt-6 flex-1">
                <div className="pb-5">
                    <SectionHeader 
                        titulo="Sobre nós" 
                        subtitulo={anuncio.sobre}
                    />
                    { anuncio.diferenciais.length >= 1 ? 
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-6 gap-2">
                        {anuncio.diferenciais.map((diferencial, index) => (
                            <div key={index} className="p-2 border border-neutral-700 rounded text-center text-secondary text-xs">
                                {diferencial}
                            </div>
                        ))}
                    </div>
                    : null }
                </div>

                { anuncio.servicos ? 
                <div className="pb-5">
                    <SectionHeader 
                        titulo="Nossos serviços" 
                        subtitulo="Confira o que temos de melhor para você."
                    />
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
                        {anuncio.servicos.map((servico, index) => (
                            <div className="flex flex-col gap-2 p-2 border rounded border-neutral-700" key={index}>
                                <h3 className="font-bold">{servico.nome}</h3>
                                <p className="text-xs text-secondary">{servico.descricao}</p>
                            </div>
                        ))}
                    </div>
                </div>
                : null }

                {anuncio.galeria ? (
                    <div className="pb-5">
                        <SectionHeader 
                            titulo="Galeria" 
                            subtitulo="Confira alguns momentos especiais do nosso espaço e dos nossos serviços."
                        />

                        <div className="
                            mt-5
                            flex gap-3 overflow-x-auto pb-3
                            md:grid md:grid-cols-4 md:overflow-x-visible
                        ">
                            {anuncio.galeria.map((imagem, index) => (
                                <div
                                    key={index}
                                    className="
                                        relative h-48 w-64 shrink-0 overflow-hidden rounded-lg
                                        md:h-56 md:w-full
                                    "
                                >
                                    <Image
                                        src={imagem}
                                        alt={`Imagem ${index + 1} da galeria`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null }

                {/* Seção de contatos do anuncio */}
                <ContatoSection anuncio={anuncio} />

            </div>

            {/* Rodapé do site */}
            <Footer />
        </div>
    )
}