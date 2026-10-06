import { ContatoSection } from "@/components/contato-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroAnuncioSection } from "@/components/hero-anuncio-section";
import { Logo } from "@/components/logo";
import { SectionHeader } from "@/components/section-header/section-header";
import { ServicoCard } from "@/components/servico-card";
import { Anuncio } from "@/types/Anuncio";
import { ANUNCIOS_DATA } from "@/utils";
import { FaceSlightlyFrowning } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function AnuncioPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const anuncio = ANUNCIOS_DATA.find(
        (anuncio: Anuncio) => anuncio.slug === slug
    );

    if (!anuncio || !anuncio.ativo) {
        return (
            <div className="flex h-screen flex-col items-center justify-center gap-2">
                <Logo />

                <h1 className="flex items-center gap-2 text-2xl">
                    Anúncio não encontrado
                    <FaceSlightlyFrowning />
                </h1>

                <Link href="/" className="text-brand">
                    Lista de anúncios
                </Link>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                <HeroAnuncioSection
                    capa={anuncio.capa}
                    logo={anuncio.logo}
                    nome={anuncio.nome}
                    categoria={anuncio.categoria}
                    descricao={anuncio.descricao}
                    localizacao={`${anuncio.localizacao.cidade} - ${anuncio.localizacao.estado}`}
                    whatsapp={anuncio.contato.whatsapp}
                />

                <div className="meu-container pt-0 md:pt-6">
                    {/* Sobre nós */}
                    <section className="pb-8">
                        <SectionHeader
                            titulo="Sobre nós"
                            subtitulo={anuncio.sobre}
                        />

                        {anuncio.diferenciais?.length ? (
                            <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-6">
                                {anuncio.diferenciais.map((diferencial, index) => (
                                    <ServicoCard
                                        key={index}
                                        nome={diferencial}
                                    />
                                ))}
                            </div>
                        ) : null}
                    </section>

                    {/* Serviços */}
                    {anuncio.servicos?.length ? (
                        <section className="pb-8">
                            <SectionHeader
                                titulo="Nossos serviços"
                                subtitulo="Confira o que temos de melhor para você."
                            />

                            <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
                                {anuncio.servicos.map((servico, index) => (
                                    <ServicoCard
                                        key={index}
                                        nome={servico.nome}
                                        descricao={servico.descricao}
                                    />
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {/* Galeria */}
                    {anuncio.galeria?.length ? (
                        <section className="pb-8">
                            <SectionHeader
                                titulo="Galeria"
                                subtitulo="Confira alguns momentos especiais do nosso espaço e dos nossos serviços."
                            />

                            <div className="
                                mt-5
                                flex gap-3 overflow-x-auto pb-3
                                md:grid md:grid-cols-3
                                lg:grid-cols-4
                                md:overflow-x-visible
                            ">
                                {anuncio.galeria.map((imagem, index) => (
                                    <div
                                        key={index}
                                        className="
                                            relative h-48 w-64 shrink-0
                                            overflow-hidden rounded-lg
                                            md:h-56 md:w-full
                                        "
                                    >
                                        <Image
                                            src={imagem}
                                            alt={`Imagem ${index + 1} da galeria de ${anuncio.nome}`}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {/* Contato */}
                    <ContatoSection anuncio={anuncio} />
                </div>
            </main>

            <Footer />
        </div>
    );
}