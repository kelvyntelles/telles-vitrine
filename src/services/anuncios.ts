import type { Anuncio } from "@/types/Anuncio";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function buscarAnuncio(slug: string): Promise<Anuncio> {
    const response = await fetch(
        `${API_URL}/api/anuncios/${encodeURIComponent(slug)}/`
    );

    if (!response.ok) {
        throw new Error(
            response.status === 404
                ? "Anúncio não encontrado"
                : "Erro ao buscar anúncio"
        );
    }

    return response.json();
}