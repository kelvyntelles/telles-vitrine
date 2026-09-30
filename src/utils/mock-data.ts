import { Anuncio } from "@/types/Anuncio";

export const ANUNCIOS_DATA: Anuncio[] = [
    {
      "id": 1,
      "ativo": false,
      "slug": "pizzaria-bella-massa",
      "nome": "Pizzaria Bella Massa",
      "categoria": "Restaurante",
      "descricao": "Pizzas artesanais, massas e muito mais para o seu momento especial. Sabor, qualidade e tradição em cada fatia.",
      "logo": "/images/anuncios/bella-massa/logo.png",
      "capa": "/images/pizzaria-bella-massa/capa.jpeg",
      "localizacao": {
        "cidade": "Vassouras",
        "estado": "RJ",
        "endereco": "Rua das Flores, 123 - Centro"
      },
      "contato": {
        "whatsapp": "24999999999",
        "whatsapp_formatado": "(24) 99999-9999",
        "instagram": "@teste",
        "instagram_url": "https://teste.com"
      },
      "sobre": "A Pizzaria Bella Massa nasceu da paixão por boa comida e do desejo de oferecer uma experiência única em Vassouras. Com ingredientes selecionados, massa artesanal e um cardápio variado, buscamos sempre surpreender nossos clientes com muito sabor e qualidade.",
      "diferenciais": [
        "Ingredientes selecionados",
        "Massa artesanal",
        "Ambiente familiar",
        "Tradição e sabor"
      ],
      "servicos": [
        {
          "nome": "Pizzas Artesanais",
          "descricao": "Pizzas preparadas com massa artesanal e ingredientes frescos de alta qualidade."
        },
        {
          "nome": "Massas",
          "descricao": "Diversos tipos de massas, com molhos especiais e muito sabor."
        },
        {
          "nome": "Bebidas",
          "descricao": "Uma seleção especial de bebidas para acompanhar sua refeição."
        },
        {
          "nome": "Sobremesas",
          "descricao": "Finalização perfeita para o seu momento especial."
        }
      ],
      "galeria": [
        "/images/anuncios/bella-massa/galeria-1.jpg",
        "/images/anuncios/bella-massa/galeria-2.jpg",
        "/images/anuncios/bella-massa/galeria-3.jpg",
        "/images/anuncios/bella-massa/galeria-4.jpg"
      ],
      "horarios": [
        {
          "dia": "Segunda a Quinta",
          "horario": "18:00 às 23:00"
        },
        {
          "dia": "Sexta e Sábado",
          "horario": "18:00 às 00:00"
        },
        {
          "dia": "Domingo",
          "horario": "18:00 às 23:00"
        }
      ],
    },
    {
      "id": 2,
      "ativo": false,
      "slug": "telles-noticias",
      "nome": "Telles Notícias",
      "categoria": "Notícias",
      "descricao": "Informação local com credibilidade, agilidade e compromisso com a nossa região.",
      "logo": "/images/anuncios/telles-noticias/logo.png",
      "capa": "/images/anuncios/telles-noticias/capa.jpg",
      "localizacao": {
        "cidade": "Vassouras",
        "estado": "RJ",
        "endereco": "Centro - Vassouras, RJ"
      },
      "contato": {
        "whatsapp": "24999999999",
        "whatsapp_formatado": "(24) 99999-9999",
        "instagram": "@teste",
        "instagram_url": "https://teste.com"
      },
      "sobre": "O Telles Notícias leva informação, notícias e acontecimentos da região para você acompanhar tudo o que acontece de mais importante.",
      "diferenciais": [
        "Informação local",
        "Notícias atualizadas",
        "Credibilidade",
        "Cobertura regional"
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
        "/images/anuncios/telles-noticias/galeria-1.jpg",
        "/images/anuncios/telles-noticias/galeria-2.jpg",
        "/images/anuncios/telles-noticias/galeria-3.jpg"
      ],
      "horarios": [
        {
          "dia": "Todos os dias",
          "horario": "24 horas"
        }
      ],
    },
    {
      "id": 3,
      "ativo": false,
      "slug": "studio-fitness",
      "nome": "Studio Fitness",
      "categoria": "Academia",
      "descricao": "Mais saúde, bem-estar e qualidade de vida para você.",
      "logo": "/images/anuncios/studio-fitness/logo.png",
      "capa": "/images/anuncios/studio-fitness/capa.jpg",
      "localizacao": {
        "cidade": "Vassouras",
        "estado": "RJ",
        "endereco": "Av. Principal, 250 - Centro"
      },
      "contato": {
        "whatsapp": "24999999999",
        "whatsapp_formatado": "(24) 99999-9999",
        "instagram": "@teste",
        "instagram_url": "https://teste.com"
      },
      "sobre": "Um espaço preparado para ajudar você a alcançar seus objetivos com acompanhamento, equipamentos de qualidade e um ambiente motivador.",
      "diferenciais": [
        "Equipamentos modernos",
        "Ambiente climatizado",
        "Acompanhamento profissional",
        "Planos personalizados"
      ],
      "servicos": [
        {
          "nome": "Musculação",
          "descricao": "Estrutura completa para seus treinos de musculação."
        },
        {
          "nome": "Treinamento Funcional",
          "descricao": "Exercícios funcionais para melhorar força, mobilidade e condicionamento."
        },
        {
          "nome": "Personal Trainer",
          "descricao": "Acompanhamento individual para alcançar seus objetivos."
        }
      ],
      "galeria": [
        "/images/anuncios/studio-fitness/galeria-1.jpg",
        "/images/anuncios/studio-fitness/galeria-2.jpg",
        "/images/anuncios/studio-fitness/galeria-3.jpg"
      ],
      "horarios": [
        {
          "dia": "Segunda a Sexta",
          "horario": "06:00 às 22:00"
        },
        {
          "dia": "Sábado",
          "horario": "08:00 às 14:00"
        },
        {
          "dia": "Domingo",
          "horario": "Fechado"
        }
      ],
    },
    {
      "id": 4,
      "ativo": true,
      "slug": "lucas-telles-barbeiro",
      "nome": "Lucas Telles",
      "categoria": "Barbearia",
      "descricao": "Barbeiro profissional",
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
        "instagram_url": "teste.com"
      },
      "sobre": "Me formei na área pela Embelleze e desde então venho me dedicando a oferecer os melhores serviços de barbearia. Realizo cortes clássicos, como o Corte Americano e o Corte Social, além de estilos mais modernos como o Corte Desfarcado (Fade) e o Moicano. Também cuido de barba, bigode, sobrancelha, pigmentação e pintura de cabelo e barba, sempre com atenção aos detalhes e ao estilo de cada cliente.",
      "diferenciais": [
        "Profissionais experientes",
        "Ambiente moderno",
        "Atendimento personalizado",
        "Produtos de qualidade"
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
        }
      ],
      "galeria": [
        "/images/lucas-telles-barbeiro/perfil.jpg",
        "/images/lucas-telles-barbeiro/perfil.jpg",
        "/images/lucas-telles-barbeiro/perfil.jpg"
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