import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Flame, Play, Award, Heart, ShieldCheck, HelpCircle } from 'lucide-react';
import { siteConfig } from '../config/site';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordion';
import EmbersBackground from '../components/EmbersBackground';
import ChatBot from '../components/ChatBot';

export default function Sobre() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const breadcrumbSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thebestburguer.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Nossa História",
        "item": "https://thebestburguer.com.br/sobre"
      }
    ]
  }), []);

  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Onde comer o verdadeiro hambúrguer artesanal em Teresópolis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para quem busca o autêntente hambúrguer artesanal e cortes nobres em Teresópolis, o The Best Burguer (TBB Hamburgueria Grill) é o local ideal. Servimos hambúrgueres artesanais e cortes de Steakhouse preparados com ingredientes de excelência nas nossas três unidades de atendimento: Agriões (Centro), Várzea e Vale Paraíso. Atendemos toda a cidade via delivery ou retirada rápida."
        }
      },
      {
        "@type": "Question",
        "name": "Quais são as três unidades da The Best Burguer e seus horários?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Temos três unidades prontas para lhe atender: 1) Agriões (Rua Nova Friburgo, Centro), funcionando de domingo a quinta das 19h30 à 1h30, e sextas/sábados das 19h30 até as 5h da manhã. 2) Várzea (Rua Nilza Chiapetta Fadigas, 596), funcionando de segunda a sábado das 18h20 às 23h20. 3) Vale Paraíso (Avenida Delfim Moreira, 2265), funcionando todos os dias das 17h às 0h."
        }
      },
      {
        "@type": "Question",
        "name": "A The Best Burguer faz entregas na madrugada em Teresópolis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! A nossa unidade de Agriões funciona nas sextas e sábados das 19h30 até às 5h da manhã, sendo a melhor opção na cidade para matar sua fome de hambúrguer artesanal durante a madrugada."
        }
      },
      {
        "@type": "Question",
        "name": "Como os hambúrgueres são preparados? É na chapa ou na parrilla?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nossos hambúrgueres clássicos e smashes são preparados na chapa tradicional, o que garante aquela crostinha perfeita por fora e mantém a carne super suculenta por dentro. Já a nossa linha Parrilla & Steakhouse (como a Costela Grill 2.0 e o Prime Rib) é preparada diretamente na parrilla sob o fogo de verdade, conferindo um sabor defumado único e exclusivo aos cortes nobres."
        }
      },
      {
        "@type": "Question",
        "name": "Vocês cobram taxa de entrega para os bairros de Teresópolis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nossa taxa de entrega é calculada com base na proximidade da unidade mais próxima de sua residência (Agriões, Várzea ou Vale Paraíso). Cobrimos os principais bairros da cidade com taxas super justas e entregadores rápidos. Você pode simular o frete informando seu endereço no nosso WhatsApp."
        }
      },
      {
        "@type": "Question",
        "name": "As unidades são Pet Friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Acreditamos que bons momentos devem ser compartilhados com quem amamos. Nossas unidades de Agriões e Várzea são 100% Pet Friendly, prontas para receber você e seu melhor amigo de quatro patas."
        }
      },
      {
        "@type": "Question",
        "name": "Tem espaço para crianças?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! A nossa unidade do Vale do Paraíso possui um Espaço Kids seguro e divertido para que seus filhos se divirtam enquanto você saboreia o melhor hambúrguer e cortes de steakhouse da serra."
        }
      },
      {
        "@type": "Question",
        "name": "Tem estacionamento nas unidades?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, a unidade do Vale do Paraíso (Avenida Delfim Moreira, 2265) possui estacionamento próprio e gratuito para total conforto e conveniência dos nossos clientes."
        }
      },
      {
        "@type": "Question",
        "name": "Vocês aceitam reservas de mesas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, aceitamos reservas de mesa exclusivamente para a unidade Vale do Paraíso. Você pode solicitar a sua reserva de forma rápida entrando em contato pelo WhatsApp dedicado a reservas: (21) 97427-4841."
        }
      },
      {
        "@type": "Question",
        "name": "Quais são as promoções da semana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Temos promoções especiais de segunda a sexta: Segunda-feira: 30% OFF em todas as porções de batata McCain. Terça-feira: X-Burguer em dobro (Terça em Dobro). Quarta-feira: Smash em Dobro (ativada via Stories). Quinta-feira: Aperitivo McCain grátis na compra de qualquer combo (Vale do Paraíso) + Caldos quentes no frio. Sexta-feira: Chopp e batata por nossa conta para grupos a partir de 4 pessoas (1ª rodada)."
        }
      }
    ]
  }), []);

  const videoSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Como a TBB prepara seus hambúrgueres artesanais em Teresópolis",
    "description": "Bastidores da TBB Hamburgueria Grill em Teresópolis: do blend à montagem perfeita.",
    "thumbnailUrl": "https://thebestburguer.com.br/fotos/tbb-hero.webp",
    "uploadDate": "2026-01-01T08:00:00Z",
    "contentUrl": "https://www.youtube.com/watch?v=KxH_2fQY_D8",
    "embedUrl": "https://www.youtube.com/embed/KxH_2fQY_D8"
  }), []);

  // Timeline de marcos históricos
  const timelineEvents = [
    {
      year: "2011",
      title: "Resiliência na Serra",
      description: "A grande tragédia da região serrana impacta Teresópolis. Gabriel e Mateus vivem essa provação que molda sua determinação de apoiar e fortalecer a comunidade local."
    },
    {
      year: "2015",
      title: "O Nascimento da TBB",
      description: "Nasce oficialmente a TBB Hamburgueria Grill. Os primeiros hambúrgueres artesanais da TBB conquistam os moradores de Teresópolis com sabor e suculência incomparáveis."
    },
    {
      year: "2018-2022",
      title: "Consolidação e Expansão",
      description: "Expansão da marca com a abertura de 3 unidades estratégicas: Agriões, Várzea e Vale do Paraíso, proporcionando a melhor experiência gastronômica para toda a cidade."
    },
    {
      year: "2024",
      title: "Legítima Parrilla TBB",
      description: "Parceria com a tradicional marca @irmaos.vicente e inauguração da Parrilla Steakhouse no Vale do Paraíso, elevando o patamar de carnes nobres e grelhados na serra."
    },
    {
      year: "2025",
      title: "10 Anos de TBB",
      description: "Celebração do aniversário de uma década com um evento histórico na loja Várzea: 200 hambúrgueres a R$ 0,10 que esgotaram em minutos, agradecendo à cidade pela parceria."
    }
  ];

  // Membros da família
  const familyMembers = [
    {
      name: "Luciane",
      role: "Pilar Materno",
      description: "Garante com amor, cuidado e carinho incansável o funcionamento perfeito dos bastidores de todas as unidades."
    },
    {
      name: "Pedro",
      role: "Planejamento & Estrutura",
      description: "Cofundador dedicado, responsável por gerenciar a estrutura das lojas e garantir a solidez da expansão da marca."
    },
    {
      name: "Gabriel",
      role: "Direção Geral & Operações",
      description: "Foco nos clientes e no padrão operacional. Garante a sintonia perfeita da equipe no atendimento e na entrega."
    },
    {
      name: "Chef Mateus",
      role: "Culinária & Mestre de Blends",
      description: "Formulado especial dos temperos, blends de carne na parrilla e pratos do almoço executivo que conquistaram a serra."
    },
    {
      name: "Lucas",
      role: "Eventos & Conexão",
      description: "Responsável por promover eventos marcantes de aniversário, apoios esportivos e comunicação com nossos seguidores."
    }
  ];

  // Parcerias
  const partnerships = [
    {
      name: "Irmãos Vicente (@irmaos.vicente)",
      type: "Steakhouse & Cortes Nobres",
      desc: "Tradição em carnes nobres da fazenda à mesa, garantindo os melhores cortes para a nossa parrilla.",
      url: "https://www.instagram.com/irmaos.vicente/"
    },
    {
      name: "McCain Brasil",
      type: "Batatas SureCrisp",
      desc: "Batatas oficiais super crocantes em todas as lojas, com promoção exclusiva nas segundas-feiras.",
      url: "https://www.mccain.com.br/"
    },
    {
      name: "Catupiry Oficial",
      type: "Recheios & Cremes Legítimos",
      desc: "O legítimo requeijão cremoso para rechear nossos acompanhamentos e burgers com o sabor brasileiro.",
      url: "https://www.catupiry.com.br/"
    }
  ];

  return (
    <div className="min-h-screen bg-carvao text-rustico font-sans-clean overflow-x-hidden selection:bg-tbbRed selection:text-white">
      <Head>
        <title>Nossa História | TBB Hamburgueria Artesanal & Steakhouse</title>
        <meta
          name="description"
          content="Conheça a história de família da TBB: Luciane, Pedro, Gabriel, Mateus e Lucas. 10 anos de tradição em hambúrgueres artesanais e cortes de parrilla em Teresópolis."
        />
        <link rel="canonical" href="https://thebestburguer.com.br/sobre" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content={siteConfig.socialName || siteConfig.name} />
        <meta property="og:title" content="Nossa História | TBB Hamburgueria Artesanal & Steakhouse" />
        <meta
          property="og:description"
          content="Conheça a história de família da TBB: Luciane, Pedro, Gabriel, Mateus e Lucas. 10 anos de tradição em hambúrgueres artesanais e cortes de parrilla em Teresópolis."
        />
        <meta property="og:url" content="https://thebestburguer.com.br/sobre" />
        <meta property="og:image" content="https://thebestburguer.com.br/fotos/sobre-og.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="História da TBB Hamburgueria Grill em Teresópolis" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nossa História | TBB Hamburgueria Artesanal & Steakhouse" />
        <meta name="twitter:description" content="A trajetória da TBB, mestre dos blends e cortes na parrilla." />
        <meta name="twitter:image" content="https://thebestburguer.com.br/fotos/sobre-og.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      </Head>

      <EmbersBackground />

      <Navbar activeSection="sobre" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-12 flex items-center justify-center border-b border-white/[0.04]">
        <div className="absolute inset-0 z-0 bg-black/60 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 flex flex-col gap-4">
          <span className="font-cinzel text-tbbRed text-xs tracking-[0.25em] font-bold uppercase">
            DESDE 2015 NA SERRA
          </span>
          <h1 className="flex items-baseline gap-3 flex-wrap justify-center">
            <span className="font-display text-5xl sm:text-7xl lg:text-8xl text-rustico font-black uppercase tracking-tight">
              NOSSA
            </span>
            <span className="font-dm-serif-italic text-4xl sm:text-6xl lg:text-7xl text-tbbRed">
              História
            </span>
          </h1>
          <p className="font-sans-clean text-rustico/60 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Uma trajetória de família, sabor autêntico e conexão profunda com a comunidade de Teresópolis, na Região Serrana do Rio de Janeiro.
          </p>
        </div>
      </section>

      {/* Seção Timeline Marcos */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          {/* Título da Seção */}
          <div className="flex flex-col items-center text-center gap-2 mb-8">
            <span className="font-cinzel text-tbbRed text-[10px] tracking-[0.2em] font-bold uppercase">TRAJETÓRIA</span>
            <h2 className="font-display text-3xl sm:text-4xl text-rustico font-black uppercase tracking-wider">A LINHA DO TEMPO</h2>
            <div className="w-12 h-0.5 bg-tbbRed mt-2" />
          </div>

          {/* Timeline Visual */}
          <div className="relative border-l border-white/[0.06] ml-4 md:ml-32 py-4 flex flex-col gap-12">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Ano à esquerda (Desktop) */}
                <div className="hidden md:block absolute right-full mr-12 top-0.5 text-right">
                  <span className="font-cinzel text-2xl text-tbbRed font-black block tracking-wider leading-none">
                    {event.year}
                  </span>
                </div>

                {/* Bolinha da timeline */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-carvao border border-tbbRed flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-tbbRed" />
                </div>

                {/* Bloco de Conteúdo */}
                <div className="flex flex-col gap-1.5">
                  <span className="md:hidden font-cinzel text-base text-tbbRed font-black tracking-wider block">
                    {event.year}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl text-rustico uppercase tracking-wider font-bold">
                    {event.title}
                  </h3>
                  <p className="font-sans-clean text-xs sm:text-sm text-rustico/55 leading-relaxed max-w-2xl">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Vídeo / Visual Brasa */}
      <section className="py-16 px-6 relative bg-black/20 border-t border-b border-white/[0.04]">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Vídeo Real (YouTube Iframe) */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded overflow-hidden border border-white/[0.06] shadow-[0_8px_48px_rgba(0,0,0,0.7)] aspect-[16/9]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/KxH_2fQY_D8"
                title="Como a TBB prepara seus hambúrgueres artesanais em Teresópolis"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Texto de Inovação / Super Rio Expofood */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <span className="font-cinzel text-[10px] text-tbbRed tracking-widest uppercase font-bold">APERFEIÇOAMENTO CONTÍNUO</span>
            <h3 className="font-display text-2xl sm:text-3xl text-rustico uppercase tracking-wider font-black">
              SUPER RIO EXPOFOOD
            </h3>
            <p className="font-sans-clean text-xs sm:text-sm text-rustico/60 leading-relaxed">
              Viajamos anualmente para a Super Rio Expofood, um dos maiores eventos do setor alimentício da América Latina. Nosso objetivo é buscar inovação gastronômica, novas técnicas de parrilla e cortes nobres na serra fluminense e ferramentas tecnológicas para otimizar nosso atendimento.
            </p>
            <p className="font-sans-clean text-xs sm:text-sm text-rustico/60 leading-relaxed">
              Dessa forma, unimos o acolhimento clássico de uma cozinha de família com a agilidade que a tecnologia moderna nos entrega para servir você cada vez melhor.
            </p>
          </div>
        </div>
      </section>

      {/* Seção A Família */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Cabeçalho */}
          <div className="flex flex-col items-center text-center gap-2 mb-4">
            <span className="font-cinzel text-tbbRed text-[10px] tracking-[0.2em] font-bold uppercase">BASTIDORES</span>
            <h2 className="font-display text-3xl sm:text-4xl text-rustico font-black uppercase tracking-wider">A FAMÍLIA TBB</h2>
            <div className="w-12 h-0.5 bg-tbbRed mt-2" />
          </div>

          {/* Grid de Membros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {familyMembers.map((member) => (
              <div
                key={member.name}
                className="p-6 bg-white/[0.01] border border-white/[0.04] hover:border-white/10 rounded-lg text-center flex flex-col gap-3 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-tbbRed/10 border border-tbbRed/20 flex items-center justify-center mx-auto text-tbbRed">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base text-rustico uppercase tracking-wider font-bold">
                  {member.name}
                </h4>
                <span className="font-cinzel text-[8px] text-brasa tracking-widest uppercase font-bold">
                  {member.role}
                </span>
                <p className="font-sans-clean text-[11px] text-rustico/50 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Parcerias e Impacto Social */}
      <section className="py-24 px-6 relative bg-black/10 border-t border-b border-white/[0.04] z-10">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          
          {/* Parcerias */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center text-center gap-2">
              <span className="font-cinzel text-tbbRed text-[10px] tracking-[0.2em] font-bold uppercase">PARCEIROS</span>
              <h3 className="font-display text-2xl sm:text-3xl text-rustico uppercase tracking-wider font-black">
                QUALIDADE COMBINADA
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partnerships.map((partner) => (
                <div
                  key={partner.name}
                  className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-lg flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brasa" />
                    <span className="font-cinzel text-[9px] text-brasa tracking-widest uppercase font-bold">
                      {partner.type}
                    </span>
                  </div>
                  <h4 className="font-display text-sm text-rustico uppercase tracking-wider font-black hover:text-tbbRed transition-colors">
                    <a href={partner.url} target="_blank" rel="noopener noreferrer">
                      {partner.name}
                    </a>
                  </h4>
                  <p className="font-sans-clean text-[11px] text-rustico/50 leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Impacto Social */}
          <div className="flex flex-col gap-10 border-t border-white/[0.04] pt-20">
            <div className="flex flex-col items-center text-center gap-2">
              <span className="font-cinzel text-tbbRed text-[10px] tracking-[0.2em] font-bold uppercase">SOCIAL</span>
              <h3 className="font-display text-2xl sm:text-3xl text-rustico uppercase tracking-wider font-black">
                APOIO À NOSSA COMUNIDADE
              </h3>
              <p className="font-sans-clean text-xs sm:text-sm text-rustico/50 max-w-md mt-2">
                Acreditamos em devolver à Teresópolis o carinho que a cidade nos dá diariamente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Futebol Local */}
              <div className="p-8 bg-white/[0.01] border border-white/[0.04] rounded-lg flex flex-col gap-4">
                <div className="w-10 h-10 rounded bg-tbbRed/10 border border-tbbRed/20 flex items-center justify-center text-tbbRed font-cinzel font-black">
                  FT
                </div>
                <h4 className="font-display text-lg text-rustico uppercase tracking-wider font-bold">
                  Projeto de Futebol Local
                </h4>
                <p className="font-sans-clean text-xs text-rustico/55 leading-relaxed">
                  Apoiamos ativamente um projeto esportivo comunitário que atende dezenas de crianças e adolescentes. O objetivo é promover inclusão social, disciplina e esperança para um futuro melhor através do esporte mais popular do país.
                </p>
              </div>

              {/* Jiu-Jítsu */}
              <div className="p-8 bg-white/[0.01] border border-white/[0.04] rounded-lg flex flex-col gap-4">
                <div className="w-10 h-10 rounded bg-brasa/10 border border-brasa/20 flex items-center justify-center text-brasa font-cinzel font-black">
                  JJ
                </div>
                <h4 className="font-display text-lg text-rustico uppercase tracking-wider font-bold">
                  Jiu-Jítsu Teresopolitano
                </h4>
                <p className="font-sans-clean text-xs text-rustico/55 leading-relaxed">
                  A TBB orgulhosamente apoia o Campeonato de Jiu-Jítsu Teresopolitano, patrocinando jovens atletas locais e ajudando a estruturar os tatames do evento, incentivando a prática da arte suave na nossa serra.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-2 mb-4">
            <span className="font-cinzel text-tbbRed text-[10px] tracking-[0.2em] font-bold uppercase">SUPORTE</span>
            <h2 className="font-display text-3xl sm:text-4xl text-rustico font-black uppercase tracking-wider">DÚVIDAS FREQUENTES</h2>
            <div className="w-12 h-0.5 bg-tbbRed mt-2" />
          </div>

          <FAQAccordion />

          <div className="text-center font-sans-clean text-[10px] text-rustico/30 mt-12 select-none">
            Última atualização: <time dateTime="2026-06-24">Junho de 2026</time>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Assistente Lu */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} onOpen={() => setIsChatOpen(true)} />
    </div>
  );
}
