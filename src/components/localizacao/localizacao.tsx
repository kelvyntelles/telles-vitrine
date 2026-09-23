import { MapPin } from "lucide-react"

export const Localizacao = () => {
    return (
        <div className="flex gap-2 items-center">
            <MapPin size={16} className="text-brand" />
            <span className="text-secondary">Vassouras - RJ</span>
        </div>
    )
}