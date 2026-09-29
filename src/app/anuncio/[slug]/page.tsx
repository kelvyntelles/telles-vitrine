import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroAnuncioSection } from "@/components/hero-anuncio-section";
import { Logo } from "@/components/logo";
import { SectionHeader } from "@/components/section-header/section-header";
import { Anuncio } from "@/types/Anuncio";
import { ANUNCIOS_DATA } from "@/utils";
import { FaceSlightlyFrowning } from "lucide-react";
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
                whatsapp={anuncio.whatsapp}
            />

            <div className="meu-container flex-1">
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
                    : "" }
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
                : "" }
            </div>
            
            <Footer />
        </div>
    )
}