
import { Badge } from "@/components/badge";
import {
    ArrowDown,
    Check,
    Globe,
    MessageCircle,
    Smartphone,
} from "lucide-react";

export const HeroTvSection = () => {
    return (
        <section className="relative overflow-hidden py-12 md:py-20">
            {/* Brilho decorativo */}
            <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />

            <div className="relative grid items-center gap-12 md:grid-cols-2">
                {/* Conteúdo principal */}
                <div className="relative z-10 max-w-xl">
                    <Badge titulo="Sua empresa na internet" />

                    <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                        Seu negócio merece uma página{" "}
                        <span className="text-brand">própria.</span>
                    </h1>

                    <p className="mt-5 max-w-lg text-base leading-7 text-content-secondary md:text-lg">
                        Apresente seus produtos, serviços, fotos e contatos
                        em um só lugar. Compartilhe seu link no Instagram,
                        no WhatsApp e com seus clientes.
                    </p>

                    {/* Preço em destaque */}
                    <div className="mt-7 flex items-baseline gap-2">
                        <span className="text-lg font-medium">Por apenas</span>
                        <span className="text-4xl font-extrabold text-brand md:text-5xl">
                            R$ 20
                        </span>
                        <span className="text-content-secondary">/ mês</span>
                    </div>

                    <a
                        href="#preco"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-4 font-semibold text-[#15151D] transition hover:opacity-90"
                    >
                        Quero minha página
                        <ArrowDown size={18} />
                    </a>

                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-content-secondary">
                        <span className="flex items-center gap-2">
                            <Check size={16} className="text-brand" />
                            Página exclusiva
                        </span>
                        <span className="flex items-center gap-2">
                            <Check size={16} className="text-brand" />
                            Link para compartilhar
                        </span>
                    </div>
                </div>

                {/* Ilustração da página de um negócio */}
                <div className="relative mx-auto w-full max-w-md py-6">
                    <div className="absolute inset-8 rounded-full bg-brand/10 blur-3xl" />

                    {/* Cartão ilustrativo */}
                    <div className="relative rounded-3xl border border-neutral-800 bg-background-secondary p-5 shadow-2xl sm:p-7">
                        <div className="flex items-center justify-between gap-3 border-b border-neutral-800 pb-5">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                                    <Globe size={24} />
                                </div>

                                <div>
                                    <p className="font-bold">
                                        Sua empresa
                                    </p>
                                    <p className="text-xs text-content-secondary">
                                        Sua página no Vitrine+
                                    </p>
                                </div>
                            </div>

                            <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                                Online
                            </span>
                        </div>

                        {/* Capa ilustrativa */}
                        <div className="mt-5 flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/30 via-brand/10 to-neutral-900">
                            <div className="text-center">
                                <Globe
                                    size={36}
                                    className="mx-auto text-brand"
                                />
                                <p className="mt-2 text-sm font-semibold">
                                    A vitrine do seu negócio
                                </p>
                            </div>
                        </div>

                        {/* Informações ilustrativas */}
                        <div className="mt-5 space-y-3">
                            <div className="h-3 w-2/3 rounded-full bg-neutral-700" />
                            <div className="h-2 w-full rounded-full bg-neutral-800" />
                            <div className="h-2 w-4/5 rounded-full bg-neutral-800" />
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                            <div className="flex items-center gap-2 rounded-xl border border-neutral-800 p-3">
                                <MessageCircle
                                    size={18}
                                    className="shrink-0 text-brand"
                                />
                                <span className="text-xs font-medium">
                                    Contato fácil
                                </span>
                            </div>

                            <div className="flex items-center gap-2 rounded-xl border border-neutral-800 p-3">
                                <Smartphone
                                    size={18}
                                    className="shrink-0 text-brand"
                                />
                                <span className="text-xs font-medium">
                                    Link compartilhável
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Preço flutuante */}
                    <div className="absolute -bottom-1 -left-2 rounded-2xl border border-brand/30 bg-background-secondary px-4 py-3 shadow-xl sm:-left-5">
                        <p className="text-xs text-content-secondary">
                            Invista na sua presença digital
                        </p>
                        <p className="mt-1 text-lg font-bold text-brand">
                            R$ 20/mês
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
