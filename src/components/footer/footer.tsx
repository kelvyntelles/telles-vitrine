import { Logo } from "../logo"

export const Footer = () => {
    return (
        <footer className="border-t border-gray-800/50">
            <div className="
                meu-container py-3 flex flex-col justify-center items-center
                md:flex-row md:justify-between
            ">
                <Logo size="pequeno" />
                <span className="text-xs text-secondary">Seu negócio em destaque. Sempre.</span>
            </div>
        </footer>
    )
}