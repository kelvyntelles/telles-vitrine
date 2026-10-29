import { Anuncio } from "@/types/Anuncio";

export const ANUNCIOS_DATA: Anuncio[] = [
    {
      "id": 1,
      "ativo": true,
      "slug": "cafe-aurora",
      "nome": "Café Aurora",
      "color_brand": "#9282FA",
      "categoria": "Cafeteria",
      "descricao": "Café especial, doces artesanais e um ambiente acolhedor para tornar seus momentos ainda mais especiais.",
      "logo": "/images/cafe-aurora/logo.png",
      "capa": "/images/cafe-aurora/capa.png",
      "localizacao": {
        "cidade": "Vassouras",
        "estado": "RJ",
        "endereco": "Centro - Vassouras, RJ"
      },
      "contato": {
        "whatsapp": "24999999999",
        "whatsapp_formatado": "(24) 99999-9999",
        "instagram": "@cafeaurora",
        "instagram_url": "https://www.instagram.com/cafeaurora/",
        "site": "cafeaurora.com.br",
        "site_url": "https://cafeaurora.com.br"
      },
      "sobre": "O Café Aurora é um espaço pensado para quem aprecia bons cafés, doces artesanais e momentos especiais. Seja para começar o dia, fazer uma pausa na rotina ou encontrar os amigos, oferecemos um ambiente acolhedor para você aproveitar cada visita.",
      "diferenciais": [
        "Cafés preparados na hora",
        "Doces artesanais",
        "Ambiente acolhedor",
        "Opções para o café da manhã",
        "Atendimento personalizado",
        "Um espaço para encontrar amigos"
      ],
      "servicos": [
        {
          "nome": "Cafés especiais",
          "descricao": "Bebidas preparadas para quem aprecia o sabor e o aroma de um bom café."
        },
        {
          "nome": "Doces artesanais",
          "descricao": "Doces e sobremesas para acompanhar seu café favorito."
        },
        {
          "nome": "Café da manhã",
          "descricao": "Opções para começar o dia com sabor e tranquilidade."
        }
      ],
      "galeria": [
        "/images/cafe-aurora/capa.png",
        "/images/cafe-aurora/foto-01.png",
        "/images/cafe-aurora/foto-02.png"
      ],
      "horarios": [
        {
          "dia": "Segunda a sexta",
          "horario": "08:00 às 18:00"
        },
        {
          "dia": "Sábado",
          "horario": "08:00 às 14:00"
        },
        {
          "dia": "Domingo",
          "horario": "Fechado"
        }
      ]
    },
    {
      "id": 2,
      "ativo": true,
      "slug": "daianne-conceicao-personal-trainer",
      "nome": "Daianne Conceição",
      "color_brand": "#D4AF37",
      "categoria": "Personal Trainer",
      "descricao": "Personal trainer com consultoria online e presencial, focada em saúde, bem-estar, hipertrofia e emagrecimento.",
      "logo": "/images/daianne-conceicao-personal-trainer/logo-03.png",
      "capa": "/images/daianne-conceicao-personal-trainer/foto-01.jpeg",
      "localizacao": {
        "cidade": "Rio de Janeiro",
        "estado": "RJ",
        "endereco": "Tijuca, Zona Norte"
      },
      "contato": {
        "whatsapp": "21979064095",
        "whatsapp_formatado": "(21) 97906-4095",
        "instagram": "@daianedejesus.personal",
        "instagram_url": "https://www.instagram.com/daianedejesus.personal/",
        "site": "",
        "site_url": ""
      },
      "sobre": "Olá! Sou Daianne Conceição, personal trainer dedicada a promover saúde, bem-estar e qualidade de vida por meio da atividade física. Ofereço consultoria online e atendimento presencial na Tijuca, Zona Norte do Rio de Janeiro.\n\nMeu objetivo é ajudar você a alcançar seus objetivos, seja conquistar hipertrofia, emagrecer ou desenvolver hábitos mais saudáveis. Com orientação e acompanhamento, você pode trabalhar para evoluir de acordo com suas metas e necessidades.\n\nVamos dar o primeiro passo rumo a uma vida mais ativa e saudável? Entre em contato para conhecer as opções de consultoria e atendimento.",
      "diferenciais": [
        "Consultoria online",
        "Atendimento presencial na Tijuca",
        "Foco em saúde e bem-estar",
        "Orientação para hipertrofia",
        "Acompanhamento para emagrecimento",
        "Treinamento voltado aos seus objetivos"
      ],
      "servicos": [
        {
          "nome": "Personal Trainer Presencial",
          "descricao": "Acompanhamento presencial na Tijuca, Zona Norte do Rio de Janeiro, para ajudar você a treinar com orientação e foco nos seus objetivos."
        },
        {
          "nome": "Consultoria Online",
          "descricao": "Orientação a distância para quem busca melhorar a rotina de treinos e cuidar da saúde e do bem-estar."
        },
        {
          "nome": "Treinamento para Hipertrofia",
          "descricao": "Orientação de treinamento voltada ao desenvolvimento muscular e à evolução dos seus resultados."
        },
        {
          "nome": "Treinamento para Emagrecimento",
          "descricao": "Acompanhamento com foco na perda de peso, na prática de atividade física e na construção de hábitos mais saudáveis."
        }
      ],
      "galeria": [
        "/images/daianne-conceicao-personal-trainer/foto-01.jpeg",
        "/images/daianne-conceicao-personal-trainer/foto-02.jpeg",
        "/images/daianne-conceicao-personal-trainer/foto-03.jpeg",
        "/images/daianne-conceicao-personal-trainer/foto-04.jpeg",
        "/images/daianne-conceicao-personal-trainer/foto-05.jpeg",
        "/images/daianne-conceicao-personal-trainer/foto-06.jpeg"
      ],
      "horarios": []
    }
]