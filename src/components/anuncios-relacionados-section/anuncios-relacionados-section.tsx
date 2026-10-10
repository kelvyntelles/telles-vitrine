import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Anuncio } from "@/types/Anuncio"
import { ANUNCIOS_DATA } from "@/utils"
import { AnuncioCard } from "../anuncio-card"

type AnunciosRelacionadosSectionProps = {
    anuncioSlug: string;
}

export const AnunciosRelacionadosSection = ({ anuncioSlug }: AnunciosRelacionadosSectionProps) => {
    const relacionados = ANUNCIOS_DATA.filter(
        (item: Anuncio) =>
            item.ativo &&
            item.slug !== anuncioSlug
    ).slice(0, 3);

    if (!relacionados.length) return null;
    
    return (
        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
            <div className="mb-9 flex items-end justify-between gap-4">
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#A99CFF]">
                        DESCUBRA MAIS
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Explore outras vitrines
                    </h2>

                    <p className="mt-3 text-[#98959D]">
                        Conheça outros negócios no Vitrine+.
                    </p>
                </div>

                <Link
                    href="/"
                    className="hidden items-center gap-2 text-sm font-semibold text-[#A99CFF] transition hover:text-white sm:inline-flex"
                >
                    Ver todos
                    <ArrowRight size={17} />
                </Link>
            </div>

            <div className="flex flex-col gap-6">
                {relacionados.map((anuncio, index) => (
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

            <Link
                href="/"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A99CFF] sm:hidden"
            >
                Ver todos os anúncios
                <ArrowRight size={17} />
            </Link>
        </section>
    )
}