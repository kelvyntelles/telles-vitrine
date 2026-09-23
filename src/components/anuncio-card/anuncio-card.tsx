import Link from "next/link"
import Image from "next/image"

import { Badge } from "../badge"
import { Localizacao } from "../localizacao"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { ArrowRight } from "lucide-react"

export const AnuncioCard = () => {
    return (
        <Card className="w-full max-w-sm ring-0 shadow border border-neutral-800">
            <Image
                src="/images/pizzaria-bella-massa/capa.jpeg"
                alt="Imagem de capa"
                width={800}
                height={200}
                className="h-28 w-full object-cover"
            />
            <CardHeader>
                <Badge titulo="Noticias"/>
                <CardTitle>Telles Notícias</CardTitle>
                <CardDescription className="text-secondary">
                    a informação que você precisa, com credibilidade e agilidade.
                </CardDescription>
            </CardHeader>
            
            <CardFooter className="flex justify-between">
                <Localizacao />
                <Link href="/" className="text-brand flex items-center gap-1">
                    Ver anúncio
                    <ArrowRight size={14} />
                </Link>
            </CardFooter>
        </Card>
    )
}