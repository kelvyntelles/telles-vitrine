import { Phone } from "lucide-react"
import { HeroAnuncio } from "../hero-anuncio/hero-anuncio"
import { Localizacao } from "../localizacao"
import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"

type HeroAnuncioSectionProps = {
    capa: string,
    logo: string,
    nome: string,
    categoria: string,
    descricao: string,
    localizacao: string,
    whatsapp: string,
}

export const HeroAnuncioSection = ({
    capa,
    logo,
    nome,
    categoria,
    descricao,
    localizacao,
    whatsapp,
}: HeroAnuncioSectionProps) => {
    return (
        <section className="overflow-hidden">
            {/* Capa */}
            <div className="relative h-56 w-full md:h-72">
                <Image
                    src={capa}
                    alt={`Capa de ${nome}`}
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Conteúdo */}
            <div className="meu-container">
                <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                    {/* Logo */}
                    <div className="relative z-10 -mt-20 flex justify-center md:mt-0 md:pt-8">
                        <div className="rounded-2xl border-4 border-background-primary bg-background-primary shadow-lg">
                            <Image
                                src={logo}
                                alt={`Logo de ${nome}`}
                                width={150}
                                height={150}
                                className="h-32 w-32 rounded-xl object-cover md:h-37.5 md:w-37.5"
                            />
                        </div>
                    </div>

                    {/* Informações */}
                    <div className="flex flex-1 flex-col gap-3 pb-8 pt-4 md:pt-8">
                        <HeroAnuncio
                            categoria={categoria}
                            nome={nome}
                            descricao={descricao}
                        />

                        <Localizacao localizacao={localizacao} />

                        <Link
                            href={`https://wa.me/55${whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-fit"
                        >
                            <Button
                                variant="brand"
                                className="mt-2 w-full cursor-pointer md:w-auto"
                            >
                                <Phone />
                                Falar no WhatsApp
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}