import Link from "next/link"
import Image from "next/image"

import { Badge } from "../badge"
import { Localizacao } from "../localizacao"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { ArrowRight } from "lucide-react"
import { TextoLimitado } from "@/utils/texto-limitado"

type AnuncioProps = {
    imagemCapa: string,
    categoria: string,
    nome: string,
    descricao: string,
    localizacao: string,
    slug: string,
}

export const AnuncioCard = ({ imagemCapa, categoria, nome, descricao, localizacao, slug }: AnuncioProps) => {
    return (
        <Card className="w-full max-w-sm ring-0 shadow border border-neutral-800">
            <Image
                src={imagemCapa}
                alt="Imagem de capa"
                width={800}
                height={200}
                className="h-28 w-full object-cover"
            />
            <CardHeader>
                <Badge titulo={categoria}/>
                <CardTitle>{nome}</CardTitle>
                <CardDescription className="text-secondary">
                    <TextoLimitado texto={descricao} limite={75} />
                </CardDescription>
            </CardHeader>
            
            <CardFooter className="flex justify-between">
                <Localizacao localizacao={localizacao} />
                <Link href={`/anuncio/${slug}/`} className="text-brand flex items-center gap-1">
                    Ver anúncio
                    <ArrowRight size={14} />
                </Link>
            </CardFooter>
        </Card>
    )
}