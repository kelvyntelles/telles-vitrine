import { Badge } from "@/components/badge";

export const HeroTvSection = () => {
    return (
        <div className="flex items-center justify-between">
            <div>
            <Badge titulo="Bem-vindo ao" />
            <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-2">Telles <span className="text-brand">Vitrine</span></h1>
            <p className="text-content-secondary text-xs md:text-sm">
                Encontre negócios, produtos e serviços da nossa região.
            </p>
            <p className="text-content-secondary text-xs md:text-sm">
                Tudo em um só lugar, de forma simples e rápida.
            </p>
            </div>
        </div>
    )
}