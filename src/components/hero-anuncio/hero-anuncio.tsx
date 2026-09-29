import { Badge } from "@/components/badge";

type HeroAnuncioProps = {
    categoria: string,
    nome: string,
    descricao: string
}

export const HeroAnuncio = ({categoria, nome, descricao}: HeroAnuncioProps) => {
    const partesNome = nome.split(" ");

    return (
        <div className="flex items-center justify-between">
            <div>
            <Badge titulo={categoria} />
            <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-2">
                <span>{partesNome[0]}</span>{" "}
                <span className="text-brand">
                    {partesNome.slice(1).join(" ")}
                </span>
            </h1>
            <p className="text-content-secondary text-xs md:text-sm">
                {descricao}
            </p>
            </div>
        </div>
    )
}