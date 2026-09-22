import { Minus } from "lucide-react";

type SectionHeaderProps = {
    titulo: string;
    subtitulo?: string;
};

export const SectionHeader = ({ titulo, subtitulo }: SectionHeaderProps) => {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
            <Minus className="text-brand" />
                {titulo}
            </h2>
            {subtitulo && <p className="text-content-secondary text-xs">{subtitulo}</p>}
        </div>
    );
};
