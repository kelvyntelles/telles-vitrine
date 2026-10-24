
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroTvSection } from "@/components/hero-tv-section/hero-tv-section";

const WHATSAPP_URL =
  "https://wa.me/5524992281699?text=" +
  encodeURIComponent(
    "Olá! Tenho interesse em criar uma página para meu negócio no Vitrine+ por R$ 20 por mês."
  );

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="meu-container flex-1">
        <HeroTvSection />

        {/* Apresentação do produto */}
        <section className="py-12 text-center sm:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#9282FA]">
            Sua empresa na internet
          </p>

          <h1 className="mx-auto max-w-3xl text-3xl font-bold sm:text-5xl">
            Seu negócio merece uma página própria.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-secondary sm:text-lg">
            Apresente sua empresa, mostre seus produtos e serviços
            e facilite o contato com seus clientes. Tudo em uma
            página profissional para compartilhar no Instagram,
            WhatsApp e onde quiser.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#9282FA] px-8 py-4 font-bold text-[#15151D] transition hover:opacity-90"
            >
              Quero minha página
            </a>

            <p className="text-sm text-secondary">
              Simples, acessível e fácil de compartilhar.
            </p>
          </div>
        </section>

        {/* Preço */}
        <section
          id="preco"
          className="mx-auto mb-16 max-w-2xl rounded-3xl border border-[#9282FA]/30 bg-[#9282FA]/5 p-8 text-center sm:p-12"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-[#9282FA]">
            Um preço que cabe no seu bolso
          </p>

          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
            Sua presença digital por apenas
          </h2>

          <div className="my-5 flex items-baseline justify-center gap-2">
            <span className="text-2xl font-semibold">R$</span>
            <span className="text-6xl font-extrabold tracking-tight sm:text-7xl">
              20
            </span>
            <span className="text-base text-secondary">/ mês</span>
          </div>

          <p className="mx-auto max-w-md text-secondary">
            Tenha uma página exclusiva para apresentar seu negócio
            e compartilhar seu link com seus clientes.
          </p>

          <ul className="mx-auto mt-8 max-w-md space-y-4 text-left">
            <li className="flex gap-3">
              <span className="text-[#9282FA]">✓</span>
              Página exclusiva para sua empresa
            </li>
            <li className="flex gap-3">
              <span className="text-[#9282FA]">✓</span>
              Fotos, descrição e informações do negócio
            </li>
            <li className="flex gap-3">
              <span className="text-[#9282FA]">✓</span>
              Links de contato e redes sociais
            </li>
            <li className="flex gap-3">
              <span className="text-[#9282FA]">✓</span>
              Um link para divulgar onde quiser
            </li>
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#9282FA] px-6 py-4 font-bold text-[#15151D] transition hover:opacity-90 sm:w-auto"
          >
            Começar agora
          </a>

          <p className="mt-4 text-xs text-secondary">
            Consulte as condições de contratação pelo WhatsApp.
          </p>
        </section>

        {/* Como funciona */}
        <section className="pb-16">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            É simples assim
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 p-6">
              <span className="text-2xl font-bold text-[#9282FA]">
                01
              </span>
              <h3 className="mt-3 font-bold">
                Entre em contato
              </h3>
              <p className="mt-2 text-sm text-secondary">
                Conte um pouco sobre sua empresa e o que deseja
                apresentar na sua página.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <span className="text-2xl font-bold text-[#9282FA]">
                02
              </span>
              <h3 className="mt-3 font-bold">
                Monte sua página
              </h3>
              <p className="mt-2 text-sm text-secondary">
                Organize as principais informações do seu negócio
                em um só lugar.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <span className="text-2xl font-bold text-[#9282FA]">
                03
              </span>
              <h3 className="mt-3 font-bold">
                Compartilhe seu link
              </h3>
              <p className="mt-2 text-sm text-secondary">
                Divulgue sua página nas redes sociais e envie
                diretamente aos seus clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Chamada final */}
        <section className="pb-16 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Vamos colocar seu negócio na internet?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-secondary">
            Dê o próximo passo na apresentação do seu negócio
            com uma página própria por R$ 20 por mês.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#9282FA] px-8 py-4 font-bold text-[#15151D] transition hover:opacity-90"
          >
            Fale com o Vitrine+
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
