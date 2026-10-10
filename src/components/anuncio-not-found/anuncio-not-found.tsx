import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { Logo } from "../logo";

export const AnuncioNotFound = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#151515] px-6 text-center text-white">
            <Logo />

            <h1 className="mt-4 text-2xl font-bold">
                Anúncio não encontrado
            </h1>

            <p className="mt-2 max-w-sm text-sm text-[#98959D]">
                Este anúncio pode ter sido removido ou estar
                temporariamente indisponível.
            </p>

            <Link
                href="/"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#9282FA] px-5 py-3 font-semibold text-[#151515] transition hover:bg-[#a99cff]"
            >
                <ArrowLeft size={18} />
                Explorar anúncios
            </Link>
        </main>
    );
};