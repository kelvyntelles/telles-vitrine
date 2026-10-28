import Link from "next/link"
import { Logo } from "../logo"
import { ArrowUpRight } from "lucide-react"

type FooterProps = {
    isAnuncioPage?: boolean
}

export const Footer = ({ isAnuncioPage }: FooterProps) => {
    return (
        <footer className="border-t border-white/[0.07] bg-[#121212]">
            <div className="mx-auto flex w-full flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between md:px-8">
                <Logo size={80} />

                <p className="text-secondary text-sm">
                    Copyright © 2026 <span className="font-bold text-white">Vitrine<span className="text-brand">+</span></span>. 
                    Todos os direitos reservados.
                </p>

                {isAnuncioPage ? (
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-brand transition hover:text-white"
                    >
                        Conheça o Vitrine+
                        <ArrowUpRight size={16} />
                    </Link>
                ) : null }
            </div>
        </footer>
    )
}