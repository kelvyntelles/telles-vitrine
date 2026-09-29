import { MapPin } from "lucide-react"

type LocalizacaoProps = {
    localizacao: string
}

export const Localizacao = ({ localizacao }: LocalizacaoProps) => {
    return (
        <div className="flex gap-2 items-center">
            <MapPin size={16} className="text-brand" />
            <span className="text-secondary">{localizacao}</span>
        </div>
    )
}