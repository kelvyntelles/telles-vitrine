import Link from "next/link"
import Image from "next/image";

type LogoProps = {
    size?: number
}

export const Logo = ({ size = 100 }: LogoProps) => {
    return (
        <Link href="/">
            <Image 
                src="/logo.png"
                alt="Logo"
                width={size}
                height={40}
            />
        </Link>
    )
}