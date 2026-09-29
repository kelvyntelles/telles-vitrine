type TextoLimitadoProps = {
    texto: string,
    limite: number
}

export function TextoLimitado({ texto, limite = 100 }: TextoLimitadoProps) {
  if (typeof texto !== 'string') return texto;
  
  const textoCortado = texto.length > limite
    ? texto.substring(0, limite) + '...'
    : texto;

  return <span>{textoCortado}</span>;
}