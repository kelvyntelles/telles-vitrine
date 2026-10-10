import { ArrowUpRight, MapPin, MessageCircle, Sparkles } from "lucide-react"

type InformacoesRapidasSectionProps = {
    cidade: string;
    estado: string;
    endereco?: string;
    whatsappUrl: string;
    categoria: string;
}

export const InformacoesRapidasSection = ({ cidade, estado, endereco, whatsappUrl, categoria }: InformacoesRapidasSectionProps) => {
    return (
        <section className="relative z-10 mx-auto -mt-2 max-w-7xl px-5 md:px-8">
            <div className="grid overflow-hidden rounded-2xl border border-white/8 bg-[#1C1C20] sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-start gap-4 border-b border-white/[0.07] p-5 sm:border-r lg:border-b-0 lg:p-6">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#9282FA]/10 text-[#A99CFF]">
                        <MapPin size={21} />
                    </div>

                    <div className="min-w-0">
                        <p className="text-sm text-[#98959D]">
                            Onde estamos
                        </p>
                        <p className="mt-1 font-semibold">
                            {cidade},{" "}
                            {estado}
                        </p>
                        {endereco && (
                            <p className="mt-1 wrap-break-word text-xs leading-5 text-[#98959D]">
                                {endereco}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex items-start gap-4 border-b border-white/[0.07] p-5 lg:border-b-0 lg:border-r lg:p-6">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#9282FA]/10 text-[#A99CFF]">
                        <MessageCircle size={21} />
                    </div>

                    <div className="min-w-0">
                        <p className="text-sm text-[#98959D]">
                            Atendimento
                        </p>
                        <p className="mt-1 font-semibold">
                            Fale diretamente conosco
                        </p>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-flex items-center gap-1 text-sm text-[#A99CFF] hover:text-white"
                        >
                            Chamar no WhatsApp
                            <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-5 sm:col-span-2 lg:col-span-1 lg:p-6">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#9282FA]/10 text-[#A99CFF]">
                        <Sparkles size={21} />
                    </div>

                    <div className="min-w-0">
                        <p className="text-sm text-[#98959D]">
                            Nosso negócio
                        </p>
                        <p className="mt-1 font-semibold">
                            {categoria}
                        </p>
                        <p className="mt-1 text-sm text-[#98959D]">
                            Conheça nossos serviços e diferenciais.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}