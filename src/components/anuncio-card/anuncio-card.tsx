
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Badge } from "../badge"
import { Localizacao } from "../localizacao"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card"
import { TextoLimitado } from "@/utils/texto-limitado"

type AnuncioProps = {
    imagemLogo: string
    imagemCapa: string
    categoria: string
    nome: string
    descricao: string
    localizacao: string
    slug: string
    imagemEsquerda?: boolean
}

export const AnuncioCard = ({
    imagemLogo,
    imagemCapa,
    categoria,
    nome,
    descricao,
    localizacao,
    slug,
    imagemEsquerda = true,
}: AnuncioProps) => {
    return (
        <Card
            className={`
                group flex h-full w-full flex-col overflow-hidden
                border border-neutral-800 bg-background-primary
                p-0 shadow-none ring-0
                transition-all duration-200
                hover:-translate-y-1 hover:border-neutral-700
                hover:shadow-lg
                md:flex-row
                ${!imagemEsquerda ? "md:flex-row-reverse" : ""}
            `}
        >
            {/* Imagem de capa */}
            <div className="relative min-h-52 w-full shrink-0 overflow-hidden md:min-h-0 md:w-[40%]">
                <Image
                    src={imagemCapa}
                    alt={`Imagem de capa de ${nome}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradiente para destacar a categoria */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/10" />

                {/* Categoria sobre a imagem */}
                <div className="absolute bottom-4 left-4">
                    <Badge titulo={categoria} />
                </div>
            </div>

            {/* Informações */}
            <div className="flex min-w-0 flex-1 flex-col justify-between gap-6 p-5 sm:p-7">
                <div>
                    {/* Logo e nome */}
                    <CardHeader className="flex flex-row items-center gap-3 p-0">
                        <div className="relative size-14 shrink-0 overflow-hidden rounded-full border border-neutral-800 bg-background-secondary">
                            <Image
                                src={imagemLogo}
                                alt={`Logo de ${nome}`}
                                fill
                                sizes="56px"
                                className="object-cover"
                            />
                        </div>

                        <div className="min-w-0 flex-1">
                            <CardTitle className="text-xl font-semibold leading-tight sm:text-2xl">
                                {nome}
                            </CardTitle>

                            <p className="mt-1 text-xs text-secondary md:hidden">
                                {categoria}
                            </p>
                        </div>
                    </CardHeader>

                    {/* Descrição */}
                    <CardDescription className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                        <TextoLimitado
                            texto={descricao}
                            limite={180}
                        />
                    </CardDescription>
                </div>

                {/* Localização e ação */}
                <div className="flex flex-col gap-4 border-t border-neutral-800 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                        <Localizacao localizacao={localizacao} />
                    </div>

                    <Link
                        href={`/anuncio/${slug}/`}
                        className="
                            inline-flex min-h-12 shrink-0 items-center
                            justify-center gap-2 rounded-full
                            bg-brand px-6 py-3 text-sm font-semibold
                            text-white transition-all duration-200
                            hover:brightness-110
                        "
                    >
                        Ver anúncio

                        <ArrowRight
                            size={16}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </Card>
    )
}