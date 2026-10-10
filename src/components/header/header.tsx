import Link from "next/link"
import { Logo } from "../logo"
import { Button } from "../ui/button"
import { ArrowLeft, Volume2 } from "lucide-react"

type HeaderProps = {
    isAnuncioPage?: boolean
}

export const Header = ({ isAnuncioPage }: HeaderProps) => {
    return (
        <header className="relative z-20 border-b border-white/6 bg-[#151515]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
                <Logo />

                {isAnuncioPage ? (
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-[#C4C1CA] transition hover:border-[#9282FA]/50 hover:text-white"
                    >
                        <ArrowLeft size={16} />
                        <span className="hidden sm:inline">
                            Ver outros anúncios
                        </span>
                        <span className="sm:hidden">Voltar</span>
                    </Link>
                ) : (
                    <Link
                        href="https://wa.me/5524992281699"
                        target="_blank"
                    >
                        <Button variant="brand" className="cursor-pointer">
                            <Volume2 />
                            Anunciar
                        </Button>
                    </Link>
                )}
            </div>
        </header>
    )
}