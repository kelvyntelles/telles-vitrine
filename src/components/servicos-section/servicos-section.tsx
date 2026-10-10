import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react"

type Servico = {
    nome: string;
    descricao?: string;
}

type ServicoProps = {
    whatsappUrl: string;
    anuncioNome: string;
    servicos: Servico[];
}

export const ServicosSection = ({ whatsappUrl, anuncioNome, servicos }: ServicoProps) => {
    return (
        <section className="border-y border-white/5 bg-[#19191D]">
            <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
                <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#A99CFF]">
                            <span className="h-px w-8 bg-[#9282FA]" />
                            O QUE OFERECEMOS
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            Nossos serviços
                        </h2>

                        <p className="mt-4 max-w-xl leading-7 text-[#98959D]">
                            Confira nossas opções e descubra como
                            podemos ajudar você.
                        </p>
                    </div>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 self-start text-sm font-semibold text-[#A99CFF] transition hover:text-white sm:self-auto"
                    >
                        Consulte pelo WhatsApp
                        <ArrowUpRight size={17} />
                    </a>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {servicos.map((servico, index) => (
                        <article
                            key={`${servico.nome}-${index}`}
                            className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#202024] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#9282FA]/40 hover:bg-[#242429] sm:p-7"
                        >
                            <div className="mb-7 flex items-center justify-between">
                                <span className="flex size-12 items-center justify-center rounded-xl bg-[#9282FA]/10 text-[#A99CFF] transition group-hover:bg-[#9282FA] group-hover:text-[#151515]">
                                    <Sparkles size={22} />
                                </span>

                                <span className="text-sm font-semibold tracking-widest text-white/20">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold transition group-hover:text-[#C4B9FF]">
                                {servico.nome}
                            </h3>

                            {servico.descricao && (
                                <p className="mt-3 min-h-12 text-sm leading-6 text-[#98959D]">
                                    {servico.descricao}
                                </p>
                            )}

                            <a
                                href={`${whatsappUrl}&text=${encodeURIComponent(
                                    `Olá! Gostaria de saber mais sobre ${servico.nome} na ${anuncioNome}.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Consultar sobre ${servico.nome} pelo WhatsApp`}
                                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A99CFF] transition hover:text-white"
                            >
                                Tenho interesse
                                <ArrowRight
                                    size={16}
                                    className="transition group-hover:translate-x-1"
                                />
                            </a>

                            <div className="absolute -bottom-12 -right-12 size-32 rounded-full bg-[#9282FA]/4 blur-2xl transition group-hover:bg-[#9282FA]/10" />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}