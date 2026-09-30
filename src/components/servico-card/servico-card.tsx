import { Sparkles } from "lucide-react"

type ServicoCardProps = {
    nome: string,
    descricao?: string,
}

export const ServicoCard = ({ nome, descricao }: ServicoCardProps) => {
    return (
        <div
            className="
                group relative overflow-hidden rounded-xl
                border border-neutral-800
                bg-neutral-900/40
                p-4
                transition-all duration-300
                hover:-translate-y-1
                hover:border-brand/40
                hover:bg-brand/5
            "
        >
            <div className="
                absolute left-0 top-0 h-full w-1
                bg-brand/40
                transition-all duration-300
                group-hover:bg-brand
            " />

            <div className="pl-2">
                <div className="flex items-center gap-2">
                    <div className="
                        flex h-7 w-7 shrink-0 items-center justify-center
                        rounded-md
                        bg-brand/10
                        text-brand
                    ">
                        <Sparkles size={14} />
                    </div>

                    <h3 className="
                        text-sm font-semibold
                        text-white
                        transition-colors
                        group-hover:text-brand
                    ">
                        {nome}
                    </h3>
                </div>

                <p className="
                    mt-3
                    text-xs leading-5
                    text-secondary
                ">
                    {descricao}
                </p>
            </div>
        </div>
    )
}