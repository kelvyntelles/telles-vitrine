import Link from "next/link"
import { Logo } from "../logo"
import { Button } from "../ui/button"
import { ArrowLeft, ArrowUpRight, Volume2 } from "lucide-react"

type HeaderProps = {
    isAnuncioPage?: boolean
}

const WHATSAPP_URL =
  "https://wa.me/5524992281699?text=" +
  encodeURIComponent(
    "Olá! Tenho interesse em criar uma página para meu negócio no Vitrine+ por R$ 20 por mês."
  );

export const Header = ({ isAnuncioPage }: HeaderProps) => {
    return (
        <header className="relative z-20 border-b border-white/6 bg-[#151515]">
            <div className="mx-auto flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8 xl:px-10">
                <Logo />

                {isAnuncioPage ? (
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-[#C4C1CA] transition hover:border-brand/50 hover:text-white"
                    >   
                        <ArrowUpRight size={16} />
                        Conheça o Vitrine+
                    </Link>
                ) : (
                    <Link
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="brand" className="cursor-pointer">
                            <Volume2 />
                            Quero minha página
                        </Button>
                    </Link>
                )}
            </div>
        </header>
    );
};