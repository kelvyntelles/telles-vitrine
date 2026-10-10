import Image from "next/image"
import { ArrowLeft, ArrowRight, ArrowUpRight, Images, X } from "lucide-react"
import { useState } from "react";

type GaleriaSectionProps = {
    galeria: string[];
    anuncioNome: string;
}

export const GaleriaSection = ({ galeria, anuncioNome }: GaleriaSectionProps) => {
    const [imagemSelecionada, setImagemSelecionada] = useState<number | null>(
        null
    );

    const imagemAtual = imagemSelecionada !== null ? galeria?.[imagemSelecionada] : null;

    return (
        <>
        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
            <div className="mb-10 flex items-end justify-between gap-4">
                <div>
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#A99CFF]">
                        <span className="h-px w-8 bg-[#9282FA]" />
                        UM POUCO DO NOSSO MUNDO
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Nossa galeria
                    </h2>

                    <p className="mt-4 max-w-xl leading-7 text-[#98959D]">
                        Veja de perto nosso espaço, nossos produtos
                        e o que preparamos para você.
                    </p>
                </div>

                <div className="hidden size-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#A99CFF] sm:flex">
                    <Images size={21} />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                {galeria?.map((imagem, index) => (
                    <button
                        type="button"
                        key={`${imagem}-${index}`}
                        onClick={() => setImagemSelecionada(index)}
                        aria-label={`Ampliar imagem ${index + 1}`}
                        className={`group relative overflow-hidden rounded-xl border border-white/6 bg-[#202024] text-left ${
                            index === 0
                                ? "col-span-2 row-span-2 min-h-67.5 sm:min-h-90 md:min-h-105"
                                : "min-h-32.5 sm:min-h-42.5 md:min-h-50.5"
                        }`}
                    >
                        <Image
                            src={imagem}
                            alt={`${anuncioNome} - foto ${index + 1}`}
                            fill
                            sizes={
                                index === 0
                                    ? "(max-width: 768px) 100vw, 50vw"
                                    : "(max-width: 768px) 50vw, 25vw"
                            }
                            className="object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-75"
                        />

                        <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/10 group-hover:opacity-100">
                            <span className="flex size-11 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm">
                                <ArrowUpRight size={21} />
                            </span>
                        </span>
                    </button>
                ))}
            </div>
        </section>
        
        {/* Visualização ampliada da galeria */}
        {imagemAtual && (
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Visualização da galeria"
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8"
                onClick={() => setImagemSelecionada(null)}
                onKeyDown={(event) => {
                    if (event.key === "Escape") {
                        setImagemSelecionada(null);
                    }

                    if (
                        event.key === "ArrowRight" &&
                        galeria?.length
                    ) {
                        setImagemSelecionada(
                            ((imagemSelecionada ?? 0) + 1) %
                                galeria.length
                        );
                    }

                    if (
                        event.key === "ArrowLeft" &&
                        galeria?.length
                    ) {
                        setImagemSelecionada(
                            ((imagemSelecionada ?? 0) -
                                1 +
                                galeria.length) %
                                galeria.length
                        );
                    }
                }}
            >
                <button
                    type="button"
                    onClick={() => setImagemSelecionada(null)}
                    aria-label="Fechar galeria"
                    className="absolute right-5 top-5 z-10 flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
                >
                    <X size={22} />
                </button>

                <button
                    type="button"
                    aria-label="Imagem anterior"
                    onClick={(event) => {
                        event.stopPropagation();

                        if (galeria?.length) {
                            setImagemSelecionada(
                                ((imagemSelecionada ?? 0) -
                                    1 +
                                    galeria.length) %
                                    galeria.length
                            );
                        }
                    }}
                    className="absolute left-3 z-10 flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
                >
                    <ArrowLeft size={22} />
                </button>

                <div
                    className="relative h-[70vh] w-full max-w-5xl"
                    onClick={(event) => event.stopPropagation()}
                >
                    <Image
                        src={imagemAtual}
                        alt={`Imagem ampliada de ${anuncioNome}`}
                        fill
                        sizes="100vw"
                        className="object-contain"
                    />

                    <p className="absolute -bottom-9 left-0 right-0 text-center text-sm text-white/60">
                        {(imagemSelecionada ?? 0) + 1} de{" "}
                        {galeria?.length}
                    </p>
                </div>

                <button
                    type="button"
                    aria-label="Próxima imagem"
                    onClick={(event) => {
                        event.stopPropagation();

                        if (galeria?.length) {
                            setImagemSelecionada(
                                ((imagemSelecionada ?? 0) + 1) %
                                    galeria.length
                            );
                        }
                    }}
                    className="absolute right-3 z-10 flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
                >
                    <ArrowRight size={22} />
                </button>
            </div>
        )}
        </>
    )
}