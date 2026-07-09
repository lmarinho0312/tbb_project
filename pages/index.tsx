import React, { useState, useRef, useEffect, useMemo } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Clock, MapPin, ChevronLeft, ChevronRight, Utensils, Smile, ArrowRight, Heart, Award } from 'lucide-react';
import { siteConfig } from '../config/site';
import { menuData } from '../config/menu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuItem from '../components/MenuItem';
import EmbersBackground from '../components/EmbersBackground';
import ChatBot from '../components/ChatBot';
import TiltCard from '../components/TiltCard';
import ScrollFadeIn from '../components/ScrollFadeIn';

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Home() {
  const [activeReview, setActiveReview] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const mapUrls = useMemo(() => siteConfig.locations.map((loc) =>
    `https://maps.google.com/maps?q=${encodeURIComponent(loc.address + ', Teresópolis, RJ, Brasil')}&output=embed&hl=pt-BR`
  ), []);

  // ── COZINHA STATUS (CRO) ──
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [openingMessage, setOpeningMessage] = useState("");

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const brTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
      const day = brTime.getDay();
      const hours = brTime.getHours();
      const minutes = brTime.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      let open = false;
      let msg = "";

      const isFridayOrSaturday = (day === 5 || day === 6);
      
      if (totalMinutes >= 1170) {
        open = true;
        msg = isFridayOrSaturday 
          ? "🔴 AO VIVO — Cozinha aberta agora até as 5h00 (Unidade Agriões)"
          : "🔴 AO VIVO — Cozinha aberta agora até as 1h30 (Unidade Agriões)";
      } 
      else if (totalMinutes < 300 && (day === 6 || day === 0)) {
        open = true;
        msg = "🔴 AO VIVO — Cozinha aberta agora até as 5h00 (Unidade Agriões)";
      }
      else if (totalMinutes < 90 && day >= 1 && day <= 5) {
        open = true;
        msg = "🔴 AO VIVO — Cozinha aberta agora até as 1h30 (Unidade Agriões)";
      } else {
        open = false;
        msg = "Cozinha fechada agora. Abrimos hoje às 19h30!";
      }

      setIsOpenNow(open);
      setOpeningMessage(msg);
    };

    checkTime();
    const timer = setInterval(checkTime, 60000);
    return () => clearInterval(timer);
  }, []);

  // ── ESTADOS PARA O STORIES INLINE ──
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const storiesSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (storiesSectionRef.current) {
      observer.observe(storiesSectionRef.current);
    }

    return () => {
      if (storiesSectionRef.current) {
        observer.unobserve(storiesSectionRef.current);
      }
    };
  }, []);

  // ── Parallax na Hero ──
  const heroImageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (heroImageRef.current) {
          const scrollY = window.scrollY;
          heroImageRef.current.style.transform = `translateY(${scrollY * 0.22}px) scale(1.1)`;
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Lista de imagens do stories
  const screenshots = [
    { src: "/fotos/Screenshot_5.webp", alt: "Atenção: Conteúdo altamente suculento!" },
    { src: "/fotos/Screenshot_6.webp", alt: "Burger Super Crispy com cebola crispy" },
    { src: "/fotos/Screenshot_7.webp", alt: "Experimente nosso X-Tudo" },
    { src: "/fotos/Screenshot_9.webp", alt: "Aqui não tem fake news, só hambúrguer suculento" },
    { src: "/fotos/Screenshot_8.webp", alt: "X-Egg, aquele hambúrguer cheio de sabor" },
    { src: "/fotos/Screenshot_4.webp", alt: "Tudo acaba em burger e fritas" },
    { src: "/fotos/Screenshot_10.webp", alt: "Não é só hambúrguer, é uma experiência" },
    { src: "/fotos/Screenshot_3.webp", alt: "A vida é curta demais para pedir TBB só no fim de semana" },
    { src: "/fotos/Screenshot_11.webp", alt: "Burger perfeito para os amantes de bacon" },
    { src: "/fotos/Screenshot_2.webp", alt: "Feedbacks reais dos nossos clientes satisfeitos" },
    { src: "/fotos/Screenshot_12.webp", alt: "Costela Grill 2.0 com cheddar e costela desfiada" },
    { src: "/fotos/print1.webp", alt: "Agende sua confraternização na unidade Vale Paraíso" },
    { src: "/fotos/Screenshot_1.webp", alt: "Somos pet friendly nas unidades Agriões e Várzea" }
  ];

  const prevIndex = activeImageIndex === 0 ? screenshots.length - 1 : activeImageIndex - 1;
  const nextIndex = activeImageIndex === screenshots.length - 1 ? 0 : activeImageIndex + 1;

  // Efeito do temporizador do Stories
  useEffect(() => {
    if (isPaused || !isInView) return;

    const intervalTime = 40;
    const totalDuration = 4000;
    const step = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveImageIndex((prevIdx) => (prevIdx < screenshots.length - 1 ? prevIdx + 1 : 0));
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activeImageIndex, isPaused, isInView]);

  useEffect(() => {
    setProgress(0);
  }, [activeImageIndex]);

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setProgress(0);
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setProgress(0);
    setActiveImageIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
  };

  // Itens em destaque selecionados para a Home
  const highlights = useMemo(() => {
    const classicos = menuData.classicos || [];
    const premium = menuData.premium || [];
    const parrilla = menuData.parrilla || [];
    const combos = menuData.combos || [];

    return [
      classicos.find(item => item.title.includes('Preferido')) || classicos[1],
      premium.find(item => item.title.includes('Supremo')) || premium[4],
      premium.find(item => item.title.includes('Super Crispy')) || premium[0],
      parrilla.find(item => item.title.includes('Costela Grill 2.0')) || parrilla[0],
    ].filter(Boolean);
  }, []);

  // Depoimentos
  const reviews = [
    {
      initials: 'LR',
      name: 'Lucas R.',
      location: 'Cliente T.B.B. — Teresópolis',
      text: 'Melhor burger que já comi! Carne no ponto perfeito e aquele sabor único que só a T.B.B tem. Simplesmente incrível!'
    },
    {
      initials: 'MS',
      name: 'Mariana Souza',
      location: 'Alto — Teresópolis',
      text: 'Sempre tive problemas com lanches que chegavam frios. Pedi o Combo Casal e chegou muito quente, queijo derretido e o sabor é simplesmente maravilhoso!'
    },
    {
      initials: 'RA',
      name: 'Rodrigo Alves',
      location: 'Agriões — Teresópolis',
      text: 'O hambúrguer artesanal tem outro nível de sabor. A maionese defumada com o clássico na chapa é sensacional. Chegou super rápido.'
    },
    {
      initials: 'CM',
      name: 'Carlos M.',
      location: 'Agriões — Teresópolis',
      text: 'Melhor burger de Teresópolis. Carne suculenta, pão macio e entrega rápida e no prazo.'
    },
    {
      initials: 'AK',
      name: 'Amanda K.',
      location: 'Vale do Paraíso — Teresópolis',
      text: 'O espaço kids da unidade Vale do Paraíso é excelente e a Costela Grill é deliciosa. Super recomendo para famílias!'
    },
    {
      initials: 'BF',
      name: 'Bruno F.',
      location: 'Várzea — Teresópolis',
      text: 'Os smashes são sensacionais. O pão brioche é super macio e a maionese temperada é a melhor. O atendimento da equipe é excelente!'
    }
  ];

  const handlePrevReview = () => {
    setActiveReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setActiveReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Mapeamento de ícones para os badges
  const getBadgeIcon = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'pet friendly':
        return '🐾';
      case 'madrugada até 5h':
        return '⏰';
      case 'espaço kids':
        return '👶';
      case 'lareira':
        return '🔥';
      case 'estacionamento':
        return '🅿️';
      case 'reservas':
        return '📝';
      default:
        return '✨';
    }
  };

  // Schema JSON-LD composto para o restaurante
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    "name": "TBB Hamburgueria Grill",
    "alternateName": "The Best Burguer",
    "description": "Hambúrguer artesanal suculento e cortes premium grelhados na parrilla. O sabor de verdade da TBB entregue quente em Teresópolis desde 2015.",
    "url": siteConfig.url,
    "telephone": "+55-21-97133-3919",
    "foundingDate": "2015",
    "servesCuisine": ["Hambúrguer Artesanal", "Steakhouse", "Parrilla"],
    "priceRange": "$$",
    "currenciesAccepted": "BRL",
    "paymentAccepted": "Cash, Credit Card, Debit Card, PIX, Vale Refeição",
    "hasMap": "https://maps.google.com/?q=TBB+Hamburgueria+Teresopolis",
    "image": "https://thebestburguer.com.br/fotos/tbb-hero.webp",
    "logo": "https://thebestburguer.com.br/logotbb.png",
    "sameAs": [
      "https://instagram.com/tbbhamburgueriaoficial"
    ],
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Pet Friendly", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Espaço Kids", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Estacionamento", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Delivery", "value": true }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "320"
    },
    "department": [
      {
        "@type": "LocalBusiness",
        "name": "TBB Hamburgueria Grill — Unidade Agriões",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Nova Friburgo, nº 47",
          "addressLocality": "Teresópolis",
          "addressRegion": "RJ",
          "addressCountry": "BR"
        },
        "telephone": "+55-21-97133-3919",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday"],
            "opens": "19:30",
            "closes": "01:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Friday","Saturday"],
            "opens": "19:30",
            "closes": "05:00"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "TBB Hamburgueria Grill — Unidade Várzea",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Nilza Chiapetta Fadigas, 596",
          "addressLocality": "Teresópolis",
          "addressRegion": "RJ",
          "addressCountry": "BR"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            "opens": "18:20",
            "closes": "23:20"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "TBB Hamburgueria Grill — Unidade Vale Paraíso",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Avenida Delfim Moreira, 2265",
          "addressLocality": "Teresópolis",
          "addressRegion": "RJ",
          "addressCountry": "BR"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "17:00",
            "closes": "00:00"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{siteConfig.seo.title}</title>
        <meta name="description" content={siteConfig.seo.description} />
        <link rel="canonical" href={siteConfig.url} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:title" content={siteConfig.seo.title} />
        <meta property="og:description" content={siteConfig.seo.description} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=1200&q=80&fm=webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="750" />
        <meta property="og:image:alt" content={siteConfig.seo.ogImageAlt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.seo.title} />
        <meta name="twitter:description" content={siteConfig.seo.description} />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=1200&q=80&fm=webp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }} />
      </Head>

      {/* Camada global de fagulhas */}
      <EmbersBackground />

      <Navbar activeSection="home" />

      <main id="conteudo-principal" role="main" className="overflow-hidden relative bg-carvao">

        {/* 1. HERO — ASYMMETRIC PREMIUM */}
        <ScrollFadeIn direction="up">
          <section id="home" className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
            <div ref={heroImageRef} className="absolute inset-0 z-0 scale-[1.1]" style={{ transformOrigin: 'top center' }}>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947')] bg-cover bg-center opacity-[0.12] brightness-50"></div>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-carvao via-transparent to-black/80" />

            <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center gap-8">
              
              {/* Informações & Títulos */}
              <div className="flex flex-col items-center text-center gap-6 max-w-2xl">
                <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] text-rustico leading-[0.95] font-black uppercase tracking-tighter flex flex-col select-none">
                  <span className="opacity-95">SABOR DE VERDADE.</span>
                  <span className="text-tbbRed text-glow-tbbRed text-[5.8rem] sm:text-[6.8rem] lg:text-[7.2rem] tracking-tight py-1 font-black">TBB BURGUER.</span>
                  <span className="opacity-95">NO PONTO CERTO.</span>
                </h1>

                <p className="font-dm-serif-italic text-xl lg:text-2xl text-brasa/90 -mt-2">
                  11 anos de tradição e sabor na serra.
                </p>

                <p className="font-sans-clean text-sm sm:text-base text-rustico/70 leading-relaxed max-w-lg">
                  Hambúrgueres artesanais, combos generosos e a nossa linha exclusiva de Steakhouse na parrilla.
                </p>

                {openingMessage && (
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-black/40 border border-white/[0.06] rounded-full text-xs font-sans-clean mt-1 select-none">
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpenNow ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpenNow ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    </span>
                    <span className={isOpenNow ? 'text-green-400 font-medium' : 'text-rustico/45'}>
                      {openingMessage}
                    </span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-4">
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-tbbRed hover:bg-tbbRedHover text-rustico font-cinzel font-bold text-xs uppercase tracking-[0.15em] rounded transition-all duration-300 shadow-glow-tbbRed hover:scale-[1.02] active:scale-95"
                  >
                    PEÇA AGORA
                  </a>
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent border border-rustico/20 hover:border-brasa/40 text-rustico hover:text-brasa font-cinzel font-bold text-xs uppercase tracking-[0.15em] rounded transition-all duration-300"
                  >
                    <WhatsAppIcon className="w-5 h-5 shrink-0" />
                    WHATSAPP
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 2. BARRA DE DIFERENCIAIS */}
        <ScrollFadeIn direction="up" delay={0.05}>
          <section className="relative z-10 bg-black py-8 border-y border-white/[0.06] px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 items-center">
              <div className="flex items-center gap-4 md:px-4 md:border-r border-white/[0.06] last:border-r-0">
                <div className="p-3.5 rounded-full border border-tbbRed/30 shrink-0 text-tbbRed">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel text-xs font-bold tracking-widest text-rustico uppercase">SABOR DE VERDADE</h3>
                  <p className="font-sans-clean text-[11px] text-rustico/50 mt-1">Ingredientes premium e receitas preparadas com dedicação.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 md:px-4 md:border-r border-white/[0.06] last:border-r-0">
                <div className="p-3.5 rounded-full border border-tbbRed/30 shrink-0 text-tbbRed">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel text-xs font-bold tracking-widest text-rustico uppercase">11 ANOS NA SERRA</h3>
                  <p className="font-sans-clean text-[11px] text-rustico/50 mt-1">Legítima hamburgueria artesanal de Teresópolis.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 md:px-4 md:border-r border-white/[0.06] last:border-r-0">
                <div className="p-3.5 rounded-full border border-tbbRed/30 shrink-0 text-tbbRed">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel text-xs font-bold tracking-widest text-rustico uppercase">3 UNIDADES</h3>
                  <p className="font-sans-clean text-[11px] text-rustico/50 mt-1">Lojas em Agriões, Várzea e Vale do Paraíso.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 md:px-4 last:border-r-0">
                <div className="p-3.5 rounded-full border border-tbbRed/30 shrink-0 text-tbbRed">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel text-xs font-bold tracking-widest text-rustico uppercase">PET FRIENDLY</h3>
                  <p className="font-sans-clean text-[11px] text-rustico/50 mt-1">Seu amigo de 4 patas é bem-vindo nas lojas.</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 3. STORIES INLINE */}
        <ScrollFadeIn direction="left">
          <section ref={storiesSectionRef} id="highlights" className="py-24 px-6 border-b border-white/[0.04] relative bg-black/10">
            <div className="max-w-5xl mx-auto flex flex-col gap-10 items-center text-center">
              <div className="flex flex-col items-center gap-3">
                <span className="font-cinzel text-tbbRed text-[11px] tracking-[0.2em] font-bold uppercase">DIÁRIO TBB</span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-rustico font-black uppercase tracking-tight leading-none">
                  A VIDA É CURTA DEMAIS PARA PEDIR UM TBB SÓ NO FIM DE SEMANA!
                </h2>
              </div>

              <div className="flex items-center justify-center gap-4 lg:gap-8 w-full max-w-5xl mx-auto py-2">
                <div className="relative w-full max-w-sm aspect-[3/4] rounded-xl overflow-hidden border border-white/[0.06] shadow-[0_12px_48px_rgba(0,0,0,0.8)] cursor-pointer select-none" onMouseDown={() => setIsPaused(true)} onMouseUp={() => setIsPaused(false)} onTouchStart={() => setIsPaused(true)} onTouchEnd={() => setIsPaused(false)}>
                  <div className="absolute top-3 inset-x-4 z-30 flex gap-1">
                    {screenshots.map((_, idx) => (
                      <div key={idx} className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className={`h-full bg-white ${idx === activeImageIndex && progress > 0 ? 'transition-all duration-[40ms] ease-linear' : ''}`} style={{ width: idx === activeImageIndex ? `${progress}%` : idx < activeImageIndex ? '100%' : '0%' }} />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent z-20 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 pointer-events-none" />
                  <div className="absolute inset-y-0 left-0 w-1/4 z-20 cursor-w-resize" onClick={handlePrevSlide} />
                  <div className="absolute inset-y-0 right-0 w-1/4 z-20 cursor-e-resize" onClick={handleNextSlide} />
                  <div className="relative w-full h-full bg-black/95">
                    <Image src={screenshots[activeImageIndex].src} alt={screenshots[activeImageIndex].alt} fill sizes="(max-width: 640px) 100vw, 384px" className="object-contain pointer-events-none" priority />
                  </div>

                  {/* Seta Esquerda Discreta */}
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all backdrop-blur-sm active:scale-90"
                    aria-label="Slide anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Seta Direita Discreta */}
                  <button
                    onClick={handleNextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all backdrop-blur-sm active:scale-90"
                    aria-label="Próximo slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 4. DESTAQUES DO CARDÁPIO */}
        <ScrollFadeIn direction="right">
          <section className="py-24 px-6 border-b border-white/[0.04] relative">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
              <div className="flex flex-col items-center text-center gap-3">
                <span className="font-cinzel text-tbbRed text-[11px] tracking-[0.2em] font-bold uppercase">SELEÇÃO TBB</span>
                <h2 className="flex items-baseline gap-3 flex-wrap justify-center">
                  <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-rustico font-black uppercase tracking-tight">DESTAQUES</span>
                  <span className="font-dm-serif-italic text-3xl sm:text-4xl lg:text-5xl text-tbbRed">do Cardápio</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((item) => (
                  <MenuItem key={item.title} title={item.title} description={item.description} price={item.price} badge={item.badge} imageUrl={item.imageUrl} altText={item.altText} layout="normal" tone="noturno" />
                ))}
              </div>
              <div className="flex justify-center pt-6">
                <Link href="/cardapio" className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-tbbRed/40 hover:border-tbbRed hover:bg-tbbRed/5 text-rustico font-cinzel font-bold text-xs uppercase tracking-widest rounded transition-all duration-300">
                  Conheça Nosso Cardápio Completo <ArrowRight className="w-4 h-4 text-tbbRed" />
                </Link>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 5. SEÇÃO PROMOÇÕES */}
        <ScrollFadeIn direction="left">
          <section className="py-24 px-6 border-b border-white/[0.04] bg-black/10 relative">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
              <div className="flex flex-col items-center text-center gap-2">
                <span className="font-cinzel text-tbbRed text-[11px] tracking-[0.2em] font-bold uppercase">PREÇOS ESPECIAIS</span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-rustico font-black uppercase tracking-tight">PROMOÇÕES DIÁRIAS</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-4" style={{ perspective: 1000 }}>
                {siteConfig.weeklyPromos.map((promo) => (
                  <TiltCard key={promo.day} className="flex flex-col justify-between p-6 bg-gradient-to-br from-[#1C1613] to-[#0D0A08] border border-[#2D231E] border-t-2 border-t-tbbRed/50 rounded-rustico-md shadow-artesanal-brasa hover:shadow-artesanal-hover hover:border-tbbRed/30 transition-all duration-300 group text-left">
                    <div className="flex w-full justify-between items-center" style={{ transform: 'translateZ(20px)' }}>
                      <div className="font-cinzel text-[9px] tracking-[0.2em] font-black text-tbbRed bg-tbbRed/5 border border-tbbRed/15 px-2.5 py-0.5 rounded-sm">{promo.day}</div>
                      <div className="text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" style={{ transform: 'translateZ(30px)' }}>{promo.icon}</div>
                    </div>
                    <div className="w-full h-px border-t border-dashed border-white/[0.06] my-4" />
                    <div className="flex flex-col flex-1 justify-end">
                      <h4 className="font-display text-sm text-rustico uppercase tracking-wider font-black mb-1.5" style={{ transform: 'translateZ(15px)' }}>{promo.title}</h4>
                      <p className="font-sans-clean text-[10px] text-rustico/50 leading-relaxed" style={{ transform: 'translateZ(10px)' }}>{promo.copy}</p>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 6. UNIDADES E LOCALIZAÇÃO (UNIFICADA - GRID DE 3 COLUNAS) */}
        <ScrollFadeIn direction="right">
          <section id="unidades" className="py-24 px-6 border-b border-white/[0.04] relative">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
              <div className="flex flex-col items-center text-center gap-3">
                <span className="font-cinzel text-tbbRed text-[11px] tracking-[0.2em] font-bold uppercase">COMO NOS ENCONTRAR</span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-rustico font-black uppercase tracking-tight leading-none">
                  Três endereços, qualidade única.
                </h2>
              </div>

              {/* Grid de 3 Colunas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {siteConfig.locations.map((loc, i) => (
                  <div key={loc.name} className="p-6 bg-white/[0.01] border border-white/[0.05] rounded-2xl flex flex-col gap-5 justify-between">
                    <div className="flex flex-col gap-4">
                      {/* Nome e Detalhes */}
                      <div>
                        <h3 className="font-display text-xl text-rustico uppercase tracking-wider font-black">
                          {loc.name}
                        </h3>
                        <p className="font-sans-clean text-xs text-rustico/50 mt-1 italic leading-relaxed">
                          {loc.details}
                        </p>
                      </div>

                      {/* Características/Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {loc.badges?.map((badge) => (
                          <span key={badge} className="px-2 py-0.5 bg-white/[0.03] border border-white/[0.05] rounded text-[8px] font-cinzel uppercase tracking-widest text-rustico/65 flex items-center gap-1">
                            {getBadgeIcon(badge)} {badge}
                          </span>
                        ))}
                      </div>

                      {/* Iframe do Mapa */}
                      <div className="relative w-full h-48 rounded-xl overflow-hidden border border-white/[0.06] shadow-md bg-black mt-2">
                        <iframe
                          src={mapUrls[i]}
                          width="100%"
                          height="100%"
                          style={{
                            border: 0,
                            filter: 'grayscale(1) invert(92%) contrast(1.15) brightness(0.95)',
                          }}
                          allowFullScreen={false}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Mapa da unidade ${loc.name}`}
                        />
                      </div>

                      {/* Endereço e Horário */}
                      <div className="flex flex-col gap-2.5 pt-3 border-t border-white/[0.05] font-sans-clean text-xs text-rustico/75">
                        <div className="flex gap-2 items-start">
                          <MapPin className="w-4 h-4 text-tbbRed shrink-0 mt-0.5" />
                          <span>{loc.address}</span>
                        </div>
                        <div className="flex gap-2 items-start text-tbbRed font-bold">
                          <Clock className="w-4 h-4 text-tbbRed shrink-0 mt-0.5" />
                          <span>{loc.hours}</span>
                        </div>
                      </div>
                    </div>

                    {/* Botões do Card */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center py-2.5 bg-transparent hover:bg-white/[0.05] border border-white/20 hover:border-white/40 text-rustico font-cinzel font-bold text-[9px] uppercase tracking-widest rounded transition-all duration-300"
                      >
                        Traçar Rotas
                      </a>
                      <a
                        href="https://pedido.takeat.app/tbbhamburgueria01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center py-2.5 bg-tbbRed hover:bg-tbbRedHover text-rustico font-cinzel font-bold text-[9px] uppercase tracking-widest rounded transition-all duration-300 shadow-glow-tbbRed hover:scale-[1.01]"
                      >
                        Pedido
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        </ScrollFadeIn>

        {/* 7. DEPOIMENTOS */}
        <ScrollFadeIn direction="left">
          <section id="depoimentos" className="py-24 px-6 border-b border-white/[0.04] relative" style={{ backgroundColor: '#1C1610' }}>
            <div className="max-w-5xl mx-auto flex flex-col gap-12 items-center text-center">
              <div className="flex flex-col items-center gap-2">
                <span className="font-cinzel text-tbbRed text-[11px] tracking-[0.2em] font-bold uppercase">AVALIAÇÕES REAIS</span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-rustico font-black uppercase tracking-tight">QUEM PROVA, NÃO TEM DUVIDAS</h2>
              </div>
              <div className="relative w-full max-w-3xl mx-auto py-6 px-4">
                <AnimatePresence mode="wait">
                  <motion.div key={activeReview} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.3 }} className="flex flex-col items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-tbbRed/15 border border-tbbRed/20 flex items-center justify-center text-tbbRed font-cinzel text-xl font-bold">{reviews[activeReview].initials}</div>
                    <blockquote className="font-dm-serif text-lg sm:text-xl lg:text-2xl text-rustico/80 leading-relaxed max-w-2xl italic">&ldquo;{reviews[activeReview].text}&rdquo;</blockquote>
                  </motion.div>
                </AnimatePresence>
                <div className="flex justify-center gap-4 mt-8">
                  <button onClick={handlePrevReview} className="w-10 h-10 rounded-full border border-white/5 bg-black/10 hover:border-white/20 text-rustico/60 hover:text-rustico flex items-center justify-center transition-all"><ChevronLeft className="w-5 h-5" /></button>
                  <button onClick={handleNextReview} className="w-10 h-10 rounded-full border border-white/5 bg-black/10 hover:border-white/20 text-rustico/60 hover:text-rustico flex items-center justify-center transition-all"><ChevronRight className="w-5 h-5" /></button>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 8. GATILHO NOSSA HISTÓRIA */}
        <ScrollFadeIn direction="up">
          <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-carvao to-black border-b border-white/[0.04]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5')] bg-cover bg-center opacity-[0.03] mix-blend-overlay pointer-events-none" />
            <div className="max-w-4xl mx-auto flex flex-col gap-8 items-center text-center relative z-10">
              <span className="font-cinzel text-tbbRed text-[11px] tracking-[0.2em] font-bold uppercase">NOSSA HISTÓRIA</span>
              <h2 className="flex flex-col gap-2 items-center">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-rustico font-black uppercase tracking-tight">UMA DÉCADA DE PAIXÃO</span>
                <span className="font-dm-serif-italic text-2xl sm:text-3xl text-tbbRed">Pela Verdadeira Brasa</span>
              </h2>
              <p className="font-sans-clean text-sm sm:text-base text-rustico/65 leading-relaxed max-w-2xl">
                Tudo começou em Teresópolis com um sonho simples: servir o hambúrguer mais suculento, honesto e saboroso da serra. Hoje, com mais de dez anos de estrada e três unidades em funcionamento, cada blend na grelha e cada pão selado carregam a mesma dedicação artesanal do primeiro dia.
              </p>
              <div className="pt-4">
                <Link
                  href="/sobre"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-tbbRed/40 hover:border-tbbRed hover:bg-tbbRed/5 text-rustico font-cinzel font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  Conheça a Nossa História <ArrowRight className="w-4 h-4 text-tbbRed" />
                </Link>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 9. CTA FINAL */}
        <ScrollFadeIn direction="up" delay={0.05}>
          <section className="relative py-24 px-6 border-b border-white/[0.04] bg-black overflow-hidden flex items-center justify-center text-center">
            <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
              <Image src="https://images.unsplash.com/photo-1544025162-d76694265947" alt="Churrasco Parrilla" fill sizes="100vw" className="object-cover object-center" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-8 items-center">
              <div className="inline-flex items-center gap-1 bg-tbbRed/10 border border-tbbRed/20 px-3 py-1 rounded text-tbbRed font-cinzel text-[10px] tracking-wider uppercase font-bold"><Flame className="w-3.5 h-3.5 animate-pulse" /> FOME DE VERDADE?</div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-rustico font-black uppercase tracking-tight leading-none">O SABOR DE VERDADE NO SEU BURGER</h2>
              <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-tbbRed hover:bg-tbbRedDark text-rustico font-cinzel font-bold text-xs uppercase tracking-widest rounded shadow-[0_4px_20px_rgba(161,24,24,0.3)] transition-all duration-300 hover:scale-[1.02]">Fazer Pedido no WhatsApp <ArrowRight className="w-4 h-4" /></a>
            </div>
          </section>
        </ScrollFadeIn>

      </main>

      <Footer />

      {/* Assistente virtual Lu */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} onOpen={() => setIsChatOpen(true)} />
    </>
  );
}
