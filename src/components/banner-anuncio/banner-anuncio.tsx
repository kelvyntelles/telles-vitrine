
import Image from "next/image"
import Link from "next/link"
import { Megaphone } from "lucide-react"

type BannerAnuncioProps = {
    nome: string
    imagem: string
    href: string
}

export const BannerAnuncio = ({
    nome,
    imagem,
    href,
}: BannerAnuncioProps) => {
    return (
        <aside
            aria-label={`Publicidade: ${nome}`}
            className="relative w-full pt-3"
        >
            {/* Badge sobreposto à borda */}
            <span
                className="
                    absolute left-0 top-3.75 z-10
                    inline-flex -translate-y-1/2
                    items-center gap-1.5
                    rounded-full border border-neutral-700
                    bg-background-primary px-3 py-1.5
                    text-xs font-medium text-brand
                    shadow-md
                "
            >
                <Megaphone size={13} />
                Publicidade
            </span>

            {/* Banner */}
            <div
                className="
                    overflow-hidden rounded-xl
                    border border-neutral-800
                    bg-background-primary
                "
            >
                <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${nome}`}
                    className="group block"
                >
                    <div className="relative aspect-1140/250 w-full">
                        <Image
                            src={imagem}
                            alt={`Banner publicitário de ${nome}`}
                            fill
                            sizes="100vw"
                            className="
                                object-contain
                                transition-opacity duration-200
                                group-hover:opacity-90
                            "
                        />
                    </div>
                </Link>
            </div>
        </aside>
    )
}