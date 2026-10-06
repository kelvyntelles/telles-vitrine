import Link from "next/link"
import Image from "next/image"

import { Badge } from "../badge"
import { Localizacao } from "../localizacao"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { ArrowRight } from "lucide-react"
import { TextoLimitado } from "@/utils/texto-limitado"

type AnuncioProps = {
    imagemLogo: string,
    categoria: string,
    nome: string,
    descricao: string,
    localizacao: string,
    slug: string,
}

export const AnuncioCard = ({
    imagemLogo,
    categoria,
    nome,
    descricao,
    localizacao,
    slug,
}: AnuncioProps) => {
    return (
        <Card className="group flex h-full w-full max-w-sm ring-0 flex-col overflow-hidden border border-neutral-800 bg-background-primary shadow-none transition-all duration-200 hover:-translate-y-1 hover:border-neutral-700 hover:shadow-lg">
            {/* Logo */}
            <div className="flex justify-center px-6 pt-6">
                <div className="rounded-full border border-neutral-800 bg-background-secondary p-1.5 shadow-sm">
                    <Image
                        src={imagemLogo}
                        alt={`Logo de ${nome}`}
                        width={120}
                        height={120}
                        className="h-28 w-28 rounded-full object-cover"
                    />
                </div>
            </div>

            {/* Informações */}
            <CardHeader className="flex min-h-40 flex-col items-center px-6 pb-5 pt-5 text-center">
                <Badge titulo={categoria} />

                <CardTitle className="mt-2 text-lg">
                    {nome}
                </CardTitle>

                <CardDescription className="mt-1 text-secondary">
                    <TextoLimitado
                        texto={descricao}
                        limite={75}
                    />
                </CardDescription>
            </CardHeader>

            {/* Footer */}
            <CardFooter className="mt-auto flex min-h-14 items-center justify-between gap-3 border-t border-neutral-800 bg-background-secondary/50 px-5">
                <Localizacao localizacao={localizacao} />

                <Link
                    href={`/anuncio/${slug}/`}
                    className="flex shrink-0 items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand/80"
                >
                    Ver anúncio
                    <ArrowRight
                        size={14}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                </Link>
            </CardFooter>
        </Card>
    )
}