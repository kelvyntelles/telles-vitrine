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

export const HeroAnuncioSection = ({ capa, logo, nome, categoria, descricao, localizacao, whatsapp }: HeroAnuncioSectionProps) => {
    return (
        <section className="relative overflow-hidden">
            <Image
                src={capa}
                alt=""
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="meu-container relative z-10 flex flex-col-reverse gap-2 py-10 md:flex-row md:justify-between md:gap-0">
                <div className="flex flex-col gap-2">
                    <HeroAnuncio
                        categoria={categoria}
                        nome={nome}
                        descricao={descricao}
                    />

                    <Localizacao localizacao={localizacao} />

                    <Link href={`https://wa.me/55${whatsapp}`} target="_blank">
                        <Button variant="brand" className="mt-2 cursor-pointer w-full md:w-auto">
                            <Phone />
                            Falar no WhatsApp
                        </Button>
                    </Link>
                </div>

                <div className="flex w-full justify-center md:w-auto">
                    <Image
                        src={logo}
                        alt="Lucas Telles"
                        width={150}
                        height={150}
                        className="w-full rounded-2xl object-cover md:w-37.5"
                    />
                </div>
            </div>
        </section>
    )
}