import { SignpostBig } from "lucide-react"

type LogoProps = {
    size?: 'pequeno' | 'padrao'
}

export const Logo = ({ size = 'padrao' }: LogoProps) => {
    return (
        <div className="flex items-center gap-2">
            <div className={`
                ${size == "padrao" ? "w-6 h-6" : "w-4 h-4"}
                bg-background-brand rounded-full flex items-center justify-center
                text-white font-bold
            `}>
                <SignpostBig size={size == "padrao" ? 16 : 12} />
            </div>
            <span className={`font-bold  ${size == "padrao" ? "text-lg" : "text-sm"}`}>
                Telles <span className="text-brand">Vitrine</span>
            </span>
        </div>
    )
}