import { Badge as BadgeIcon } from "lucide-react"

type BadgeProps = {
    titulo: string
}

export const Badge = ({ titulo }: BadgeProps) => {
    return (
        <div 
            className="
                bg-background-tertiary text-brand px-2 py-1 rounded-full 
                text-xs font-semibold flex items-center gap-2 w-fit
            ">
            <BadgeIcon size={16} />
            {titulo}
        </div>
    )                                                                           
}
