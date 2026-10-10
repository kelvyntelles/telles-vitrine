import Link from "next/link"
import { Logo } from "../logo"
import { ArrowUpRight } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="border-t border-white/[0.07] bg-[#121212]">
            <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between md:px-8">
                <Logo size={80} />

                <p className="text-sm text-[#77747D]">
                    Descubra negócios, serviços e oportunidades perto de você.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#A99CFF] transition hover:text-white"
                >
                    Conheça o Vitrine+
                    <ArrowUpRight size={16} />
                </Link>
            </div>
        </footer>
    )
}