
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroTvSection } from "@/components/hero-tv-section/hero-tv-section";

const WHATSAPP_VITRINE_URL =
    "https://wa.me/5524992281699?text=" +
    encodeURIComponent(
        "Olá! Tenho interesse em criar uma página para meu negócio no Vitrine+ por R$ 20 por mês."
    );

const WHATSAPP_DESENVOLVIMENTO_URL =
    "https://wa.me/5524992281699?text=" +
    encodeURIComponent(
        "Olá! Tenho interesse nos serviços de desenvolvimento de software do Vitrine+. Gostaria de solicitar um orçamento."
    );

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="meu-container flex-1">
                <HeroTvSection />

                {/* Presença digital */}
                <section
                    id="servicos"
                    className="scroll-mt-24 py-12 sm:py-16"
                >
                    <div
                        id="vitrine"
                        className="scroll-mt-24 overflow-hidden rounded-3xl border border-brand/30 bg-brand/5 p-6 sm:p-10 lg:p-12"
                    >
                        <div className="mx-auto max-w-3xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                                Para pequenos negócios e profissionais
                            </p>

                            <h2 className="mt-4 text-2xl font-bold sm:text-4xl">
                                Seu negócio merece uma página própria.
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-secondary">
                                Apresente seus serviços, fotos, informações
                                e contatos em um único lugar. Compartilhe sua
                                página pelo Instagram, WhatsApp e onde quiser.
                            </p>

                            <div className="my-6 flex items-baseline justify-center gap-2">
                                <span className="text-2xl font-semibold">
                                    R$
                                </span>
                                <span className="text-6xl font-extrabold tracking-tight sm:text-7xl">
                                    20
                                </span>
                                <span className="text-base text-secondary">
                                    / mês
                                </span>
                            </div>

                            <ul className="mx-auto mt-6 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
                                <li className="flex gap-3">
                                    <span className="text-brand">✓</span>
                                    Página exclusiva para seu negócio
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-brand">✓</span>
                                    Fotos e descrição da sua empresa
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-brand">✓</span>
                                    Informações e formas de contato
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-brand">✓</span>
                                    Link próprio para compartilhar
                                </li>
                            </ul>

                            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <a
                                    href={WHATSAPP_VITRINE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-7 py-4 font-bold text-[#15151D] transition-colors hover:opacity-90 sm:w-auto"
                                >
                                    Quero minha página
                                </a>

                                <Link
                                    href="/cafe-aurora"
                                    className="inline-flex w-full items-center justify-center rounded-xl border border-brand/50 px-7 py-4 font-semibold transition-colors hover:bg-brand/10 sm:w-auto"
                                    target="_blank"
                                >
                                    Ver página de exemplo
                                </Link>
                            </div>

                            <p className="mt-4 text-xs text-secondary">
                                Consulte as condições de contratação pelo
                                WhatsApp.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Desenvolvimento sob medida */}
                <section
                    id="desenvolvimento"
                    className="scroll-mt-24 py-12 sm:py-16"
                >
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                                Desenvolvimento de software
                            </p>

                            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                                Sua ideia merece uma solução sob medida.
                            </h2>

                            <p className="mt-5 leading-7 text-secondary">
                                Desenvolvemos sites, landing pages, sistemas
                                web, APIs e automações personalizados para
                                ajudar sua empresa a trabalhar melhor, atender
                                seus clientes e crescer.
                            </p>

                            <a
                                href={WHATSAPP_DESENVOLVIMENTO_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-brand px-7 py-4 font-bold text-[#15151D] transition-colors hover:opacity-90 sm:w-auto"
                            >
                                Solicitar orçamento
                            </a>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-brand/40">
                                <h3 className="font-bold">
                                    Landing pages
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-secondary">
                                    Páginas focadas em apresentar sua oferta
                                    e gerar contatos e oportunidades.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-brand/40">
                                <h3 className="font-bold">
                                    Sites institucionais
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-secondary">
                                    Apresente sua empresa, seus serviços
                                    e sua marca com profissionalismo.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-brand/40">
                                <h3 className="font-bold">
                                    Sistemas web
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-secondary">
                                    Soluções personalizadas para processos,
                                    cadastros e gestão do seu negócio.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-brand/40">
                                <h3 className="font-bold">
                                    APIs e automações
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-secondary">
                                    Integre ferramentas e automatize tarefas
                                    para economizar tempo.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 text-center text-sm text-secondary">
                        Cada projeto é único. Desenvolvemos soluções 
                        sob medida de acordo com as necessidades, os objetivos e o orçamento da sua empresa.
                        <br />
                        <b>Solicite um orçamento personalizado</b> e descubra a melhor solução para o seu negócio.
                    </p>
                </section>

                {/* Como funciona */}
                <section className="py-12 sm:py-16">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                            Simples e prático
                        </p>

                        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                            Sua página em três passos.
                        </h2>

                        <p className="mt-4 text-secondary">
                            Colocamos seu negócio na internet sem complicar
                            o processo.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-5 sm:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 p-6">
                            <span className="text-2xl font-bold text-brand">
                                01
                            </span>
                            <h3 className="mt-3 font-bold">
                                Entre em contato
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-secondary">
                                Conte um pouco sobre seu negócio e as
                                informações que deseja apresentar.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 p-6">
                            <span className="text-2xl font-bold text-brand">
                                02
                            </span>
                            <h3 className="mt-3 font-bold">
                                Criamos sua página
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-secondary">
                                Organizamos as informações para apresentar
                                seu negócio de forma profissional.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 p-6">
                            <span className="text-2xl font-bold text-brand">
                                03
                            </span>
                            <h3 className="mt-3 font-bold">
                                Compartilhe seu link
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-secondary">
                                Envie sua página aos clientes e divulgue
                                nas redes sociais.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Chamada final */}
                <section className="pb-16 pt-8 sm:pb-20">
                    <div className="rounded-3xl border border-white/10 bg-background-secondary p-7 text-center sm:p-12">
                        <h2 className="text-2xl font-bold sm:text-4xl">
                            Vamos tirar seu projeto do papel?
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl leading-7 text-secondary">
                            Seja para divulgar seu negócio ou desenvolver
                            um sistema personalizado, podemos ajudar você
                            a dar o próximo passo.
                        </p>

                        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <a
                                href={WHATSAPP_VITRINE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-7 py-4 font-bold text-[#15151D] transition-colors hover:opacity-90 sm:w-auto"
                            >
                                Criar página por R$ 20/mês
                            </a>

                            <a
                                href={WHATSAPP_DESENVOLVIMENTO_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 px-7 py-4 font-semibold transition-colors hover:border-brand/50 hover:bg-white/5 sm:w-auto"
                            >
                                Solicitar orçamento
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
