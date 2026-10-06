import { Anuncio } from "@/types/Anuncio";

export const ANUNCIOS_DATA: Anuncio[] = [
    {
      "id": 1,
      "ativo": true,
      "slug": "telles-noticias",
      "nome": "Telles Notícias",
      "categoria": "Jornal",
      "descricao": "Informação local com credibilidade, agilidade e compromisso com a nossa região.",
      "logo": "/images/telles-noticias/logo.png",
      "capa": "/images/telles-noticias/capa.jpeg",
      "localizacao": {
        "cidade": "Vassouras",
        "estado": "RJ",
        "endereco": "Centro - Vassouras, RJ"
      },
      "contato": {
        "whatsapp": "24999691395",
        "whatsapp_formatado": "(24) 99969-1395",
        "instagram": "@cosmetelles2020",
        "instagram_url": "https://www.instagram.com/cosmetelles2020/",
        "site": "radiotelles.com",
        "site_url": "https://radiotelles.com"
      },
      "sobre": "O Telles Notícias leva informação, notícias e acontecimentos da região para você acompanhar tudo o que acontece de mais importante.",
      "diferenciais": [
        "Informação local",
        "Notícias atualizadas",
        "Credibilidade",
        "Cobertura regional",
        "Rádio Telles | radiotelles.com",
        "Informação e entreterimento",
      ],
      "servicos": [
        {
          "nome": "Notícias Locais",
          "descricao": "Acompanhe os principais acontecimentos da região."
        },
        {
          "nome": "Publicidade",
          "descricao": "Divulgue sua empresa para o público local."
        },
        {
          "nome": "Cobertura de Eventos",
          "descricao": "Cobertura e divulgação de eventos da região."
        }
      ],
      "galeria": [
        "/images/telles-noticias/foto-01.jpg",
        "/images/telles-noticias/foto-02.jpeg",
      ],
      "horarios": [
        {
          "dia": "Todos os dias",
          "horario": "24 horas"
        }
      ],
    },
    {
      "id": 2,
      "ativo": true,
      "slug": "lucas-telles-barbeiro",
      "nome": "Lucas Telles",
      "categoria": "Barbearia",
      "descricao": "Barbeiro especialista em cortes modernos e barbas. Agende seu horário!",
      "logo": "/images/lucas-telles-barbeiro/perfil.jpg",
      "capa": "/images/lucas-telles-barbeiro/capa.jpeg",
      "localizacao": {
        "cidade": "Vassouras",
        "estado": "RJ",
        "endereco": "Rua Luiz Capute, 133, Centro"
      },
      "contato": {
        "whatsapp": "24974004409",
        "whatsapp_formatado": "(24) 97400-4409",
        "instagram": "@lctelles07",
        "instagram_url": "https://www.instagram.com/lctelles07/",
        "site": "",
        "site_url": ""
      },
      "sobre": "Me formei na área pela Embelleze e desde então venho me dedicando a oferecer os melhores serviços de barbearia. Realizo cortes clássicos, como o Corte Americano e o Corte Social, além de estilos mais modernos como o Corte Desfarcado (Fade) e o Moicano. Também cuido de barba, bigode, sobrancelha, pigmentação e pintura de cabelo e barba, sempre com atenção aos detalhes e ao estilo de cada cliente.\n\nEstou sempre praticando e aprendendo novos cortes e tendências para garantir que você saia daqui satisfeito e com o visual que deseja. Para mim, a barbearia vai além de um simples corte de cabelo ou barba — é uma experiência. Estou pronto para atender você com profissionalismo e qualidade!",
      "diferenciais": [
        "Profissional experiente",
        "Ambiente moderno",
        "Atendimento personalizado",
        "Produtos de qualidade",
        "Som ambiente",
        "Higiene e organização"
      ],
      "servicos": [
        {
          "nome": "Corte Masculino",
          "descricao": "Cortes modernos e tradicionais para todos os estilos."
        },
        {
          "nome": "Barba",
          "descricao": "Modelagem e cuidados para manter sua barba impecável."
        },
        {
          "nome": "Corte + Barba",
          "descricao": "O combo completo para renovar seu visual."
        },
        {
          "nome": "Transformação Visual",
          "descricao": "Do clássico platinado aos tons tradicionais que realçam o seu estilo com personalidade."
        }
      ],
      "galeria": [
        "/images/lucas-telles-barbeiro/foto-01.jpg",
        "/images/lucas-telles-barbeiro/foto-02.jpg",
        "/images/lucas-telles-barbeiro/foto-03.jpg",
        "/images/lucas-telles-barbeiro/foto-04.jpg",
      ],
      "horarios": [
        {
          "dia": "Segunda a Sexta",
          "horario": "09:00 às 19:00"
        },
        {
          "dia": "Sábado",
          "horario": "09:00 às 17:00"
        },
        {
          "dia": "Domingo",
          "horario": "Fechado"
        }
      ],
    }
]