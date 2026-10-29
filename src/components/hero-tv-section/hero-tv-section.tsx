
import { Badge } from "@/components/badge";
import {
    ArrowDown,
    ArrowRight,
    Bot,
    Code2,
    Globe,
    Layers3,
    Smartphone,
} from "lucide-react";

const solutions = [
    {
        icon: Globe,
        title: "Páginas web",
        description: "Sua empresa na internet",
    },
    {
        icon: Layers3,
        title: "Landing pages",
        description: "Mais oportunidades para seu negócio",
    },
    {
        icon: Code2,
        title: "Sistemas web",
        description: "Soluções sob medida",
    },
    {
        icon: Bot,
        title: "Automações",
        description: "Processos mais eficientes",
    },
];

export const HeroTvSection = () => {
    return (
        <section className="relative isolate overflow-hidden py-16 md:py-24">
            {/* Brilhos decorativos */}
            <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-brand/15 blur-[100px]" />
            <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-brand/10 blur-[100px]" />

            <div className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
                {/* Apresentação principal */}
                <div className="relative z-10 max-w-2xl">
                    <Badge titulo="Tecnologia para o seu negócio" />

                    <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Ideias que se transformam em{" "}
                        <span className="text-brand">
                            soluções digitais.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-content-secondary sm:text-lg sm:leading-8">
                        Da presença digital ao desenvolvimento de sistemas
                        personalizados, criamos soluções para ajudar seu
                        negócio a crescer e alcançar novos resultados.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#servicos"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 font-semibold text-[#15151D] transition-colors hover:opacity-90"
                        >
                            Conheça nossos serviços
                            <ArrowDown size={18} />
                        </a>

                        <a
                            href="https://wa.me/5524992281699?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20os%20servi%C3%A7os%20do%20Vitrine%2B."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-4 font-semibold transition-colors hover:border-brand/50 hover:bg-brand/5"
                        >
                            Fale conosco
                            <ArrowRight size={18} />
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-content-secondary">
                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-brand" />
                            Soluções personalizadas
                        </span>

                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-brand" />
                            Tecnologia acessível
                        </span>
                    </div>
                </div>

                {/* Visualização das soluções */}
                <div className="relative mx-auto w-full max-w-lg py-6">
                    <div className="pointer-events-none absolute inset-10 rounded-full bg-brand/10 blur-[80px]" />

                    {/* Janela principal */}
                    <div className="relative rounded-3xl border border-white/10 bg-background-secondary/95 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
                        <div className="flex items-center justify-between border-b border-white/10 pb-5">
                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5">
                                <Globe size={13} className="text-brand" />
                                <span className="text-xs text-content-secondary">
                                    soluções digitais
                                </span>
                            </div>
                        </div>

                        {/* Destaque visual */}
                        <div className="relative mt-5 overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/20 via-brand/5 to-transparent p-5 sm:p-7">
                            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-brand/20" />
                            <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full border border-brand/20" />

                            <div className="relative">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-[#15151D]">
                                    <Code2 size={25} />
                                </div>

                                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                                    Vitrine+
                                </p>

                                <h2 className="mt-2 max-w-xs text-2xl font-bold leading-tight sm:text-3xl">
                                    Tecnologia que transforma ideias.
                                </h2>

                                <p className="mt-3 max-w-xs text-sm leading-6 text-content-secondary">
                                    Criamos experiências digitais para
                                    diferentes necessidades e negócios.
                                </p>
                            </div>
                        </div>

                        {/* Cards de serviços */}
                        <div className="mt-5 grid grid-cols-2 gap-3">
                            {solutions.map((solution) => {
                                const Icon = solution.icon;

                                return (
                                    <div
                                        key={solution.title}
                                        className="rounded-2xl border border-white/10 bg-background p-4 transition-colors hover:border-brand/40"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                                            <Icon size={21} />
                                        </div>

                                        <h3 className="mt-3 text-sm font-semibold">
                                            {solution.title}
                                        </h3>

                                        <p className="mt-1 text-xs leading-5 text-content-secondary">
                                            {solution.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Rodapé da janela */}
                        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                            <div className="flex items-center gap-2">
                                <Smartphone
                                    size={17}
                                    className="text-brand"
                                />
                                <span className="text-xs text-content-secondary">
                                    Soluções para o seu negócio
                                </span>
                            </div>

                            <span className="h-2 w-2 rounded-full bg-brand" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
