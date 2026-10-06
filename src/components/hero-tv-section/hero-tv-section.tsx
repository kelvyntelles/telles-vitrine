import { Badge } from "@/components/badge";
import { Store } from "lucide-react";

export const HeroTvSection = () => {
    return (
        <section className="relative overflow-hidden py-10 md:py-16">
            <div className="grid items-center gap-10 md:grid-cols-2">
                {/* Conteúdo */}
                <div className="relative z-10 max-w-xl">
                    <Badge titulo="Bem-vindo à" />

                    <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
                        Vitrine<span className="text-brand">+</span>
                    </h1>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-content-secondary md:text-base">
                        Encontre negócios, produtos e serviços da nossa região.
                        <br />
                        Tudo em um só lugar, de forma simples e rápida.
                    </p>
                </div>

                {/* Visual */}
                <div className="relative mx-auto h-56 w-full max-w-md md:h-64">
                    {/* Glow */}
                    <div className="absolute left-1/2 top-1/2 -z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl" />

                    {/* Card principal */}
                    <div className="absolute right-2 top-2 w-64 rotate-2 rounded-2xl border border-neutral-800 bg-background-secondary p-5 shadow-xl sm:right-8">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                                <Store size={22} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold">
                                    Negócios locais
                                </p>

                                <p className="text-xs text-content-secondary">
                                    Encontre perto de você
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 h-2 rounded-full bg-neutral-800">
                            <div className="h-2 w-3/4 rounded-full bg-brand" />
                        </div>
                    </div>

                    {/* Card secundário */}
                    <div className="absolute bottom-1 left-2 w-52 -rotate-3 rounded-2xl border border-neutral-800 bg-background-secondary p-4 shadow-xl sm:left-8">
                        <p className="text-xs text-content-secondary">
                            Descubra
                        </p>

                        <p className="mt-1 text-base font-semibold">
                            novos serviços
                        </p>

                        <div className="mt-3 flex gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-brand" />
                            <span className="h-2 w-2 rounded-full bg-brand/60" />
                            <span className="h-2 w-2 rounded-full bg-brand/30" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};