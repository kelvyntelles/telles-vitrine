
import Link from "next/link";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { ArrowUpRight, MessageCircle } from "lucide-react";

type HeaderProps = {
    isAnuncioPage?: boolean;
};

const WHATSAPP_URL =
    "https://wa.me/5524992281699?text=" +
    encodeURIComponent(
        "Olá! Tenho interesse em conhecer os serviços do Vitrine+."
    );

export const Header = ({ isAnuncioPage }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-20 border-b border-white/10 bg-[#151515]/95 backdrop-blur-md">
            <div className="meu-container flex min-h-[76px] items-center justify-between gap-4">
                <Logo />

                {isAnuncioPage ? (
                    <Link
                        href="/"
                        className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-[#C4C1CA] transition-colors hover:border-brand/50 hover:text-white"
                    >
                        <ArrowUpRight size={16} />
                        <span>Conheça o Vitrine+</span>
                    </Link>
                ) : (
                    <>
                        <nav className="hidden items-center gap-7 md:flex">
                            <Link
                                href="#servicos"
                                className="text-sm text-[#C4C1CA] transition-colors hover:text-white"
                            >
                                Nossos serviços
                            </Link>

                            <Link
                                href="#vitrine"
                                className="text-sm text-[#C4C1CA] transition-colors hover:text-white"
                            >
                                Página digital
                            </Link>

                            <Link
                                href="#desenvolvimento"
                                className="text-sm text-[#C4C1CA] transition-colors hover:text-white"
                            >
                                Desenvolvimento
                            </Link>
                        </nav>

                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0"
                        >
                            <Button
                                variant="brand"
                                className="cursor-pointer gap-2"
                            >
                                <MessageCircle size={18} />
                                <span className="hidden sm:inline">
                                    Fale conosco
                                </span>
                                <span className="sm:hidden">Contato</span>
                            </Button>
                        </a>
                    </>
                )}
            </div>
        </header>
    );
};
