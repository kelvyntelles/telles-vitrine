"use client";

import { AnuncioNotFound } from "@/components/anuncio-not-found";
import { ContatoSection } from "@/components/contato-section";
import { Footer } from "@/components/footer";
import { GaleriaSection } from "@/components/galeria-section/galeria-section";
import { HeroAnuncio } from "@/components/hero-anuncio";
import { InformacoesRapidasSection } from "@/components/informacoes-rapidas-section";
import { ServicosSection } from "@/components/servicos-section/servicos-section";
import { SobreSection } from "@/components/sobre-section";
import { buscarAnuncio } from "@/services/anuncios";
import { Anuncio } from "@/types/Anuncio";
import { MessageCircle } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AnuncioPage() {
    const params = useParams<{ slug: string }>();
    const slug = params.slug;

    const [anuncio, setAnuncio] = useState<Anuncio | null>(null);
    const [carregando, setCarregando] = useState(true);
    const [naoEncontrado, setNaoEncontrado] = useState(false);

    useEffect(() => {
        async function carregarAnuncio() {
            try {
                setCarregando(true);
                setNaoEncontrado(false);

                const dados = await buscarAnuncio(slug);
                setAnuncio(dados);
            } catch (error) {
                setAnuncio(null);

                if (
                    error instanceof Error &&
                    error.message === "Anúncio não encontrado"
                ) {
                    setNaoEncontrado(true);
                } else {
                    console.error("Erro ao carregar anúncio:", error);
                }
            } finally {
                setCarregando(false);
            }
        }

        carregarAnuncio();
    }, [slug]);

    if (carregando) {
        return <p>Carregando anúncio...</p>;
    }

    if (naoEncontrado || !anuncio) {
        return <AnuncioNotFound />;
    }

    const whatsapp = anuncio.contato.whatsapp.replace(/\D/g, "");

    const mensagem = encodeURIComponent(
        `Olá! Conheci a ${anuncio.nome} pelo Vitrine+ e gostaria de mais informações.`
    );

    const whatsappUrl = `https://wa.me/55${whatsapp}?text=${mensagem}`;

    const endereco = anuncio.localizacao.endereco?.trim();

    const enderecoCompleto = [
        endereco,
        anuncio.localizacao.cidade,
        anuncio.localizacao.estado,
    ]
        .filter(Boolean)
        .join(", ");

    const mapaUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        enderecoCompleto
    )}`;

    const temGaleria = Boolean(anuncio.galeria?.length);

    return (
        <main 
            className="min-h-screen overflow-hidden bg-[#151515] text-white"
            style={
                {
                "--brand": anuncio.color_brand || "#9282FA",
                } as React.CSSProperties
            }
        >
            {/* Hero */}
            <HeroAnuncio 
                capa={anuncio.capa}
                logo={anuncio.logo}
                nome={anuncio.nome}
                descricao={anuncio.descricao}
                categoria={anuncio.categoria}
                whatsappUrl={whatsappUrl}
                mapaUrl={mapaUrl}
                cidade={anuncio.localizacao.cidade}
                estado={anuncio.localizacao.estado}
                enderecoCompleto={enderecoCompleto}
            />

            {/* Informações rápidas */}
            <InformacoesRapidasSection
                cidade={anuncio.localizacao.cidade}
                estado={anuncio.localizacao.estado}
                endereco={endereco}
                whatsappUrl={whatsappUrl}
                categoria={anuncio.categoria}
            />

            {/* Sobre nós */}
            {anuncio.sobre && (
                <SobreSection 
                    sobre={anuncio.sobre}
                    diferenciais={anuncio.diferenciais}
                />
            )}

            {/* Serviços */}
            {anuncio.servicos?.length ? (
                <ServicosSection 
                    anuncioNome={anuncio.nome}
                    whatsappUrl={whatsappUrl}
                    servicos={anuncio.servicos}
                />
            ) : null}

            {/* Galeria */}
            {temGaleria && (
                <GaleriaSection 
                    anuncioNome={anuncio.nome}
                    galeria={anuncio.galeria}
                />
            )}

            {/* Localização e contato */}
            <ContatoSection 
                whatsappUrl={whatsappUrl}
                enderecoCompleto={enderecoCompleto}
                mapaUrl={mapaUrl}
                instagramUrl={anuncio.contato.instagram_url}
                siteUrl={anuncio.contato.site_url}
                site={anuncio.contato.site}
                horarios={anuncio.horarios}
            />

            {/* Rodapé */}
            <Footer isAnuncioPage={true} />

            {/* Botão flutuante de WhatsApp */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Falar com ${anuncio.nome} pelo WhatsApp`}
                className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full border border-white/10 bg-brand text-[#151515] shadow-xl shadow-black/30 transition hover:scale-105 hover:bg-brand md:bottom-7 md:right-7"
            >
                <MessageCircle size={25} />
            </a>
        </main>
    );
}
