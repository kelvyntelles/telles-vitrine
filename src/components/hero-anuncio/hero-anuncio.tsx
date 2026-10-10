import { Badge } from "@/components/badge";
import { ArrowUpRight, CheckCircle2, MapPin, MessageCircle, Navigation } from "lucide-react";
import Image from "next/image";

type HeroAnuncioProps = {
    capa: string;
    logo: string;
    nome: string;
    descricao: string;
    categoria: string;
    whatsappUrl: string;
    cidade: string;
    estado: string;
    enderecoCompleto?: string;
    mapaUrl: string;
}

export const HeroAnuncio = ({categoria, nome, descricao, capa, logo, whatsappUrl, mapaUrl, cidade, estado, enderecoCompleto}: HeroAnuncioProps) => {
    return (
        <section className="relative">
            <div className="relative min-h-122.5 overflow-hidden md:min-h-142.5">
                <Image
                    src={capa}
                    alt={`Capa de ${nome}`}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                {/* Gradientes para melhorar a leitura do conteúdo */}
                <div className="absolute inset-0 bg-linear-to-r from-[#151515] via-[#151515]/85 to-[#151515]/20" />
                <div className="absolute inset-0 bg-linear-to-t from-[#151515] via-transparent to-[#151515]/20" />

                <div className="relative mx-auto flex min-h-122.5 max-w-7xl items-center px-5 py-16 md:min-h-142.5 md:px-8 md:py-20">
                    <div className="max-w-2xl">
                        {/* Categoria e localização */}
                        <div className="mb-7 flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#9282FA]/30 bg-[#9282FA]/10 px-3.5 py-2 text-xs font-semibold text-[#C4B9FF] backdrop-blur-md sm:text-sm">
                                <span className="size-1.5 rounded-full bg-[#9282FA]" />
                                {categoria}
                            </span>

                            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-xs text-white/80 backdrop-blur-md sm:text-sm">
                                <MapPin size={14} />
                                {cidade} -{" "}
                                {estado}
                            </span>
                        </div>

                        {/* Logo */}
                        <div className="mb-6 flex size-24 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white p-2 shadow-2xl shadow-black/30 sm:size-28">
                            <Image
                                src={logo}
                                alt={`Logo de ${nome}`}
                                width={112}
                                height={112}
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#B9ACFF] sm:text-sm">
                            Conheça nosso negócio
                        </p>

                        <h1 className="max-w-xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                            {nome}
                            <span className="text-[#9282FA]">.</span>
                        </h1>

                        <p className="mt-5 max-w-lg text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                            {descricao}
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl bg-[#9282FA] px-6 py-4 font-bold text-[#151515] shadow-lg shadow-[#9282FA]/10 transition hover:-translate-y-0.5 hover:bg-[#A99CFF]"
                            >
                                <MessageCircle size={20} />
                                Falar pelo WhatsApp
                                <ArrowUpRight size={18} />
                            </a>

                            {enderecoCompleto && (
                                <a
                                    href={mapaUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/15 bg-black/20 px-6 py-4 font-semibold text-white backdrop-blur-md transition hover:border-white/30 hover:bg-white/10"
                                >
                                    <Navigation size={18} />
                                    Como chegar
                                </a>
                            )}
                        </div>

                        <div className="mt-7 flex items-center gap-2 text-xs text-white/50 sm:text-sm">
                            <CheckCircle2
                                size={16}
                                className="text-[#9282FA]"
                            />
                            Conheça, encontre e entre em contato.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}