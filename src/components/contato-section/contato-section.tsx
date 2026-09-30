import Link from "next/link"
import { SectionHeader } from "../section-header/section-header"
import { Camera, Clock3, MapPin, MessageCircle } from "lucide-react"
import { HeroAnuncio } from "../hero-anuncio"
import { Anuncio } from "@/types/Anuncio"

type ContatoSectionProps = {
    anuncio: Anuncio;
}

export const ContatoSection = ({ anuncio }: ContatoSectionProps) => {
    return (
        <div className="pb-5">
            <SectionHeader
                titulo="Contato"
                subtitulo="Estamos prontos para te atender!"
            />

            <div className="mt-6 grid gap-6 md:grid-cols-2">
                {/* Contatos */}
                <div className="grid gap-4 sm:grid-cols-3">
                    {/* WhatsApp */}
                    <Link
                        href={`https://wa.me/55${anuncio.contato.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="
                            flex items-start gap-3 
                            border-b border-b-neutral-800 md:border-b-0 pb-2 md:pb-0
                            md:border-r md:border-r-neutral-800
                        ">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-brand">
                                <MessageCircle size={20} />
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs text-muted-foreground">
                                    WhatsApp
                                </p>

                                <p className="mt-1 text-xs font-medium">
                                    {anuncio.contato.whatsapp_formatado}
                                </p>

                                <span className="mt-1 block text-xs text-brand">
                                    Falar agora →
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Instagram */}
                    <Link
                        href={anuncio.contato.instagram_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="
                            flex items-start gap-3 
                            border-b border-b-neutral-800 md:border-b-0 pb-2 md:pb-0
                            md:border-r md:border-r-neutral-800
                        ">
                            <div className="
                                flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-brand">
                                <Camera size={20} />
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs text-muted-foreground">
                                    Instagram
                                </p>

                                <p className="mt-1 truncate text-xs font-medium">
                                    {anuncio.contato.instagram}
                                </p>

                                <span className="mt-1 block text-xs text-brand">
                                    Seguir →
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Endereço */}
                    <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-brand">
                            <MapPin size={20} />
                        </div>

                        <div className="min-w-0">
                            <p className="text-xs text-muted-foreground">
                                Endereço
                            </p>

                            <p className="mt-1 text-xs leading-4 font-medium">
                                {anuncio.localizacao.endereco}
                            </p>

                            <span className="mt-1 block text-xs text-brand">
                                Vassouras - RJ
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-2">
                    {/* Horário de funcionamento */}
                    <div className="rounded-lg border border-neutral-800 p-4 md:w-80">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-brand">
                                <Clock3 size={18} />
                            </div>

                            <h3 className="text-sm font-semibold">
                                Horário de funcionamento
                            </h3>
                        </div>

                        <div className="space-y-2 text-xs">
                            {anuncio.horarios.map((horario, index) => (
                                <div className="flex justify-between gap-4" key={index}>
                                    <span className="text-muted-foreground">
                                        {horario.dia}
                                    </span>
                                    <span>
                                        {horario.horario}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <HeroAnuncio
                            categoria={anuncio.categoria}
                            nome={anuncio.nome}
                            descricao={anuncio.descricao}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}