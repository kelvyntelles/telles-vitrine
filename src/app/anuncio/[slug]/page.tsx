"use client";

import { AnuncioNotFound } from "@/components/anuncio-not-found";
import { AnunciosRelacionadosSection } from "@/components/anuncios-relacionados-section";
import { ContatoSection } from "@/components/contato-section";
import { Footer } from "@/components/footer";
import { GaleriaSection } from "@/components/galeria-section/galeria-section";
import { Header } from "@/components/header";
import { HeroAnuncio } from "@/components/hero-anuncio";
import { InformacoesRapidasSection } from "@/components/informacoes-rapidas-section";
import { ServicosSection } from "@/components/servicos-section/servicos-section";
import { SobreSection } from "@/components/sobre-section";
import { Anuncio } from "@/types/Anuncio";
import { ANUNCIOS_DATA } from "@/utils";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    Images,
    MapPin,
    MessageCircle,
    Navigation,
    Phone,
    Sparkles,
    X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function AnuncioPage() {
    const params = useParams<{ slug: string }>();
    const slug = params.slug;

    const anuncio = ANUNCIOS_DATA.find(
        (item: Anuncio) => item.slug === slug
    );

    if (!anuncio || !anuncio.ativo) {
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
        <main className="min-h-screen overflow-hidden bg-[#151515] text-white">
            {/* Header */}
            <Header isAnuncioPage={true} />

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
                horarios={anuncio.horarios}
            />

            {/* Outros anúncios */}
            <AnunciosRelacionadosSection anuncioSlug={anuncio.slug} />

            {/* Rodapé */}
            <Footer />

            {/* Botão flutuante de WhatsApp */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Falar com ${anuncio.nome} pelo WhatsApp`}
                className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full border border-white/10 bg-[#9282FA] text-[#151515] shadow-xl shadow-black/30 transition hover:scale-105 hover:bg-[#A99CFF] md:bottom-7 md:right-7"
            >
                <MessageCircle size={25} />
            </a>
        </main>
    );
}
