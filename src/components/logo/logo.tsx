import { SignpostBig } from "lucide-react"

export const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-background-brand rounded-full flex items-center justify-center text-white font-bold">
                <SignpostBig size={16} />
            </div>
            <span className="font-bold text-lg">
                Telles <span className="text-brand">Vitrine</span>
            </span>
        </div>
    )
}