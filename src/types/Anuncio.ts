export interface Localizacao {
  cidade: string;
  estado: string;
  endereco: string;
}

export interface Servico {
  nome: string;
  descricao: string;
}

export interface Horario {
  dia: string;
  horario: string;
}

export interface Anuncio {
  id: number;
  ativo: boolean;
  slug: string;
  nome: string;
  categoria: string;
  descricao: string;
  logo: string;
  capa: string;
  localizacao: Localizacao;
  whatsapp: string;
  instagram: string;
  sobre: string;
  diferenciais: string[];
  servicos: Servico[];
  galeria: string[];
  horarios: Horario[];
}