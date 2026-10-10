import { CheckCircle2, Sparkles } from "lucide-react"

type SobreSectionProps = {
    sobre: string;
    diferenciais?: string[];
}

export const SobreSection = ({ sobre, diferenciais }: SobreSectionProps) => {
    return (
        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div>
                    <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-[#A99CFF]">
                        <span className="h-px w-8 bg-[#9282FA]" />
                        QUEM SOMOS
                    </div>

                    <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                        Mais do que um negócio,{" "}
                        <span className="text-[#9282FA]">
                            uma experiência.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-md leading-7 text-[#98959D]">
                        Conheça nossa história, nosso jeito de
                        trabalhar e o que nos torna especiais.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-2xl border-l-2 border-t-2 border-[#9282FA]/60" />

                    <div className="relative rounded-2xl border border-white/8 bg-[#1C1C20] p-6 sm:p-9 md:p-10">
                        <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-[#9282FA]/10 text-[#A99CFF]">
                            <Sparkles size={23} />
                        </div>

                        <h3 className="text-xl font-bold">
                            Nossa história
                        </h3>

                        <p className="mt-4 whitespace-pre-line text-base leading-8 text-[#C4C1CA]">
                            {sobre}
                        </p>

                        {diferenciais?.length ? (
                            <div className="mt-8 grid gap-3 border-t border-white/8 pt-6 sm:grid-cols-2">
                                {diferenciais.map(
                                    (diferencial, index) => (
                                        <div
                                            key={`${diferencial}-${index}`}
                                            className="flex items-start gap-3 text-sm text-[#D8D5DE]"
                                        >
                                            <CheckCircle2
                                                size={18}
                                                className="mt-0.5 shrink-0 text-[#9282FA]"
                                            />
                                            <span>{diferencial}</span>
                                        </div>
                                    )
                                )}
                            </div>
                        ) : null}
                    </div>

                    <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-br-2xl border-b-2 border-r-2 border-[#9282FA]/60" />
                </div>
            </div>
        </section>
    )
}