import { Logo } from "../logo"
import { Button } from "../ui/button"
import { Volume2 } from "lucide-react"

export const Header = () => {
    return (
        <header className="border-b border-gray-800/50">
            <div className="meu-container flex items-center justify-between">
                <Logo />
                <Button variant="brand" className="cursor-pointer">
                    <Volume2 />
                    Anunciar
                </Button>
            </div>
        </header>
    )
}