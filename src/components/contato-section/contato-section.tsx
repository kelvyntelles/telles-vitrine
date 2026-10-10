import {
    ArrowUpRight,
    Clock3,
    Camera,
    MapPin,
    MessageCircle,
    Phone,
} from "lucide-react";

type ContatoSectionProps = {
    whatsappUrl: string;
    enderecoCompleto: string;
    mapaUrl: string;
    instagramUrl: string;
    horarios?: {
        dia: string;
        horario: string;
    }[];
}

export const ContatoSection = ({
    whatsappUrl,
    enderecoCompleto,
    mapaUrl,
    instagramUrl,
    horarios,
}: ContatoSectionProps) => {
    return (
        <section className="border-t border-white/6 bg-[#19191D]">
            <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Informações de contato */}
                    <div>
                        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#A99CFF]">
                            <span className="h-px w-8 bg-[#9282FA]" />
                            ESTAMOS AQUI PARA VOCÊ
                        </div>

                        <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                            Vamos conversar?
                        </h2>

                        <p className="mt-5 max-w-lg leading-7 text-[#98959D]">
                            Ficou com alguma dúvida ou quer saber mais
                            sobre nossos serviços? Entre em contato.
                            Será um prazer atender você.
                        </p>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#9282FA] px-6 py-4 font-bold text-[#151515] transition hover:-translate-y-0.5 hover:bg-[#A99CFF]"
                        >
                            <MessageCircle size={21} />
                            Entre em contato
                            <ArrowUpRight size={19} />
                        </a>

                        {/* Localização */}
                        {enderecoCompleto && (
                            <div className="mt-10 flex items-start gap-4 border-t border-white/8 pt-7">
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#9282FA]/10 text-[#A99CFF]">
                                    <MapPin size={21} />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="font-semibold">
                                        Nossa localização
                                    </h3>

                                    <p className="mt-2 wrap-break-word text-sm leading-6 text-[#98959D]">
                                        {enderecoCompleto}
                                    </p>

                                    <a
                                        href={mapaUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#A99CFF] hover:text-white"
                                    >
                                        Abrir no Google Maps
                                        <ArrowUpRight size={15} />
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* Instagram */}
                        {instagramUrl && (
                            <div className="mt-6 flex items-start gap-4 border-t border-white/8 pt-6">
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#9282FA]/10 text-[#A99CFF]">
                                    <Camera size={21} />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="font-semibold">
                                        Acompanhe nas redes sociais
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-[#98959D]">
                                        Confira nossas novidades, produtos
                                        e os bastidores do nosso trabalho.
                                    </p>

                                    <a
                                        href={instagramUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#A99CFF] transition hover:text-white"
                                    >
                                        Visitar Instagram
                                        <ArrowUpRight size={15} />
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Cartão de contato e horários */}
                    <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/8 bg-[#202024] p-6 sm:p-9 md:p-10">
                        <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#9282FA]/10 blur-3xl" />

                        <div className="relative">
                            <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-[#9282FA]/10 text-[#A99CFF]">
                                <MessageCircle size={27} />
                            </div>

                            <p className="text-sm font-semibold uppercase tracking-widest text-[#A99CFF]">
                                Atendimento direto
                            </p>

                            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                                Estamos a uma mensagem de distância.
                            </h3>

                            <p className="mt-4 max-w-md leading-7 text-[#98959D]">
                                Converse conosco, tire suas dúvidas e
                                conheça melhor o que temos a oferecer.
                            </p>
                        </div>

                        <div className="relative mt-10 space-y-4">
                            {/* Horários de funcionamento */}
                            {horarios && horarios.length > 0 && (
                                <div className="rounded-xl border border-white/8 bg-white/3 p-4">
                                    <div className="mb-4 flex items-center gap-3">
                                        <span className="flex size-10 items-center justify-center rounded-xl bg-[#9282FA]/10 text-[#A99CFF]">
                                            <Clock3 size={20} />
                                        </span>

                                        <div>
                                            <h4 className="font-semibold">
                                                Horário de funcionamento
                                            </h4>

                                            <p className="mt-1 text-xs text-[#98959D]">
                                                Confira nossos horários de atendimento
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {horarios.map((item, index) => (
                                            <div
                                                key={`${item.dia}-${index}`}
                                                className="flex items-start justify-between gap-4 border-t border-white/6 pt-3 text-sm"
                                            >
                                                <span className="text-[#C4C1CA]">
                                                    {item.dia}
                                                </span>

                                                <span className="text-right font-medium text-white">
                                                    {item.horario}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* WhatsApp */}
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/3 p-4 transition hover:border-[#9282FA]/40 hover:bg-white/6"
                            >
                                <span className="flex items-center gap-3">
                                    <span className="flex size-11 items-center justify-center rounded-xl bg-[#9282FA] text-[#151515]">
                                        <Phone size={20} />
                                    </span>

                                    <span className="text-left">
                                        <span className="block font-semibold">
                                            WhatsApp
                                        </span>

                                        <span className="mt-1 block text-xs text-[#98959D]">
                                            Fale conosco agora
                                        </span>
                                    </span>
                                </span>

                                <ArrowUpRight
                                    size={20}
                                    className="text-[#A99CFF]"
                                />
                            </a>

                            {/* Instagram no cartão */}
                            {instagramUrl && (
                                <a
                                    href={instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/3 p-4 transition hover:border-[#9282FA]/40 hover:bg-white/6"
                                >
                                    <span className="flex items-center gap-3">
                                        <span className="flex size-11 items-center justify-center rounded-xl bg-[#9282FA]/10 text-[#A99CFF]">
                                            <Camera size={20} />
                                        </span>

                                        <span className="text-left">
                                            <span className="block font-semibold">
                                                Instagram
                                            </span>

                                            <span className="mt-1 block text-xs text-[#98959D]">
                                                Acompanhe nossas novidades
                                            </span>
                                        </span>
                                    </span>

                                    <ArrowUpRight
                                        size={20}
                                        className="text-[#A99CFF]"
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
