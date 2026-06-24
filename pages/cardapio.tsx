import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Sparkles, Utensils, Search, ArrowRight, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/site';
import { menuData, MenuItemType } from '../config/menu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuItem from '../components/MenuItem';
import EmbersBackground from '../components/EmbersBackground';
import ChatBot from '../components/ChatBot';

// Custom SVGs for Cardápio Tabs
const BurgerIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 12c0-2.8 2.2-5 5-5h10c2.8 0 5 2.2 5 5v1H2v-1z" />
    <path d="M5 16h14a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1z" />
    <path d="M2 14h20" />
    <path d="M6 10h12" />
  </svg>
);

const ComboIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 8h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
    <path d="M15 6H5v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6Z" />
    <path d="M12 2 9 6" />
  </svg>
);

const FriesIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 10V2" />
    <path d="M9 10V4" />
    <path d="M13 10V3" />
    <path d="M17 10V2" />
    <path d="M3 10h18l-2 12H5L3 10z" />
  </svg>
);

const BottleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 2h6v3H9z" />
    <path d="M12 5v3" />
    <path d="M10 8h4v12a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2V8z" />
  </svg>
);

// Hook de faíscas para micro-interação nos botões de aba
function useSparks(count = 6, trigger: any = null) {
  return useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 40,
        delay: Math.random() * 0.3,
        duration: 0.6 + Math.random() * 0.4,
        size: 2 + Math.random() * 2,
        color: i % 2 === 0 ? '#FF3D00' : '#FFA000',
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [trigger]
  );
}

type TabType = 'classicos' | 'premium' | 'smashes' | 'parrilla' | 'combos' | 'acompanhamentos' | 'bebidas' | 'almoco';

export default function Cardapio() {
  const [activeTab, setActiveTab] = useState<TabType>('classicos');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const sparks = useSparks(6, hoveredTab);
  const [searchQuery, setSearchQuery] = useState('');
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
        "name": "Cardápio",
        "item": "https://thebestburguer.com.br/cardapio"
      }
    ]
  }), []);

  const menuSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Cardápio TBB Hamburgueria Grill",
    "url": "https://thebestburguer.com.br/cardapio",
    "hasMenuSection": Object.keys(menuData).map((categoryKey) => {
      const categoryName = categoryKey === 'classicos' ? 'Clássicos' :
                           categoryKey === 'premium' ? 'Premium' :
                           categoryKey === 'smashes' ? 'Smashes' :
                           categoryKey === 'parrilla' ? 'Parrilla & Steak' :
                           categoryKey === 'combos' ? 'Combos' :
                           categoryKey === 'acompanhamentos' ? 'Acompanhamentos' :
                           categoryKey === 'bebidas' ? 'Bebidas' : 'Almoço';

      return {
        "@type": "MenuSection",
        "name": categoryName,
        "hasMenuItem": (menuData[categoryKey as TabType] || []).map((item) => {
          const numericPrice = item.price.replace(/[^\d,]/g, '').replace(',', '.');
          return {
            "@type": "MenuItem",
            "name": item.title,
            "description": item.description,
            "offers": {
              "@type": "Offer",
              "price": numericPrice,
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock"
            }
          };
        })
      };
    })
  }), []);

  // Mapeamento de abas
  const tabs = [
    { id: 'classicos', label: 'CLÁSSICOS', icon: BurgerIcon },
    { id: 'premium', label: 'PREMIUM', icon: BurgerIcon },
    { id: 'smashes', label: 'SMASHES', icon: BurgerIcon },
    { id: 'parrilla', label: 'PARRILLA & STEAK', icon: Flame },
    { id: 'combos', label: 'COMBOS', icon: ComboIcon },
    { id: 'acompanhamentos', label: 'ACOMPANHAMENTOS', icon: FriesIcon },
    { id: 'bebidas', label: 'BEBIDAS', icon: BottleIcon },
    { id: 'almoco', label: 'ALMOÇO', icon: Utensils },
  ];

  // Filtro de itens com base na aba ativa e na pesquisa
  const filteredItems = useMemo(() => {
    const items = menuData[activeTab] || [];
    if (!searchQuery.trim()) return items;
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeTab, searchQuery]);

  // Plano de fundo dinâmico conforme a aba selecionada
  const menuBackground: Record<TabType, string> = {
    classicos: 'bg-black/40',
    premium: 'bg-red-950/20',
    smashes: 'bg-amber-950/20',
    parrilla: 'bg-red-950/30',
    combos: 'bg-black/40',
    acompanhamentos: 'bg-amber-950/10',
    bebidas: 'bg-black/40',
    almoco: 'bg-orange-950/10',
  };

  return (
    <div className="min-h-screen bg-carvao text-rustico font-sans-clean overflow-x-hidden selection:bg-tbbRed selection:text-white">
      <Head>
        <title>Cardápio Completo | TBB Hamburgueria Artesanal & Steakhouse</title>
        <meta
          name="description"
          content="Explore o cardápio completo da TBB: hambúrgueres clássicos, premium, smashes, cortes nobres da parrilla, combos irresistíveis e almoço executivo em Teresópolis."
        />
        <link rel="canonical" href="https://thebestburguer.com.br/cardapio" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content={siteConfig.socialName || siteConfig.name} />
        <meta property="og:title" content="Cardápio Completo | TBB Hamburgueria Artesanal & Steakhouse" />
        <meta
          property="og:description"
          content="Explore o cardápio completo da TBB: hambúrgueres clássicos, premium, smashes, cortes nobres da parrilla, combos e almoço executivo em Teresópolis."
        />
        <meta property="og:url" content="https://thebestburguer.com.br/cardapio" />
        <meta property="og:image" content="https://thebestburguer.com.br/fotos/cardapio-og.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Cardápio completo da TBB Hamburgueria Grill em Teresópolis" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cardápio TBB | Hambúrgueres Artesanais em Teresópolis" />
        <meta name="twitter:description" content="Burgers clássicos, smashes, parrilla e combos. Veja o cardápio completo da TBB." />
        <meta name="twitter:image" content="https://thebestburguer.com.br/fotos/cardapio-og.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      {/* Background animado de brasas */}
      <EmbersBackground />

      {/* Navbar principal */}
      <Navbar activeSection="cardapio" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 flex items-center justify-center border-b border-white/[0.04]">
        <div className="absolute inset-0 z-0 overflow-hidden bg-black/60">
          <div className="absolute inset-0 bg-gradient-to-t from-carvao via-carvao/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 flex flex-col gap-4">
          <span className="font-cinzel text-tbbRed text-xs tracking-[0.25em] font-bold uppercase">
            SELEÇÃO EXCLUSIVA TBB
          </span>
          <h1 className="flex items-baseline gap-3 flex-wrap justify-center">
            <span className="font-display text-5xl sm:text-7xl lg:text-8xl text-rustico font-black uppercase tracking-tight">
              NOSSO
            </span>
            <span className="font-dm-serif-italic text-4xl sm:text-6xl lg:text-7xl text-tbbRed">
              Cardápio
            </span>
          </h1>
          <p className="font-sans-clean text-rustico/60 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Hambúrgueres suculentos na chapa, combos generosos e cortes nobres preparados na parrilla.
          </p>
        </div>
      </section>

      {/* Filtro e Categorias */}
      <section className={`py-12 px-6 relative transition-colors duration-700 ${menuBackground[activeTab]}`}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          
          {/* Barra de Busca e Atalho para Lu */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between border-b border-white/[0.04] pb-8">
            {/* Input de Busca */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-rustico/35" />
              <input
                type="text"
                placeholder="Busque por burger, ingrediente, combo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white/[0.02] border border-white/[0.08] hover:border-white/15 focus:border-tbbRed/50 rounded font-sans-clean text-sm text-rustico placeholder-rustico/30 outline-none transition-all duration-300"
              />
            </div>

            {/* Chatbot Trigger */}
            <button
              onClick={() => setIsChatOpen(true)}
              className="inline-flex items-center gap-2.5 text-xs font-sans-clean text-rustico/60 hover:text-brasa transition-colors duration-300 group bg-white/[0.02] px-4 py-2.5 rounded border border-white/[0.04] hover:border-white/[0.08]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brasa opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brasa"></span>
              </span>
              <span>Dúvida no pedido? Pergunte para a <strong>Lu</strong></span>
              <span className="underline font-cinzel text-[10px] text-tbbRed group-hover:text-brasa transition-colors ml-1 font-bold">
                Falar com a Lu →
              </span>
            </button>
          </div>

          {/* Seletor de Abas Horizontal Rolar no Mobile */}
          <div className="w-full overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            <div className="flex min-w-max md:min-w-0 md:flex-wrap justify-start md:justify-center gap-2.5 border-b border-white/[0.06] pb-6">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const isHovering = hoveredTab === tab.id;
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id as TabType);
                      setSearchQuery('');
                    }}
                    onMouseEnter={() => setHoveredTab(tab.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className={`relative flex items-center gap-2 px-4 py-3 font-cinzel text-[10px] sm:text-xs font-bold uppercase tracking-widest border rounded transition-all duration-300 select-none ${
                      isActive
                        ? 'bg-tbbRed/10 border-tbbRed text-tbbRed shadow-[0_2px_12px_rgba(161,24,24,0.15)]'
                        : 'border-white/[0.06] text-rustico/40 hover:text-rustico/80 hover:border-white/20'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-tbbRed' : 'text-current'}`} />
                    {tab.label}

                    {/* Faíscas */}
                    <AnimatePresence>
                      {isHovering && isActive &&
                        sparks.map((s) => (
                          <motion.span
                            key={s.id}
                            initial={{ opacity: 0, y: 0, x: 0, scale: 0.3 }}
                            animate={{ opacity: [0, 1, 0], y: -24, x: s.x, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: s.duration, delay: s.delay, ease: 'easeOut' }}
                            style={{
                              position: 'absolute',
                              bottom: '50%',
                              left: '50%',
                              width: s.size,
                              height: s.size,
                              borderRadius: '50%',
                              background: s.color,
                              boxShadow: `0 0 4px ${s.color}`,
                              pointerEvents: 'none',
                            }}
                          />
                        ))
                      }
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid de Itens */}
          <div className="min-h-[400px]">
            {searchQuery.trim() && tabs.every(tab => {
              const items = menuData[tab.id as TabType] || [];
              return items.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase())
              ).length === 0;
            }) ? (
              <div className="flex flex-col items-center justify-center text-center py-20 gap-4">
                <span className="font-display text-xl text-rustico/40 uppercase tracking-widest">Nenhum item encontrado</span>
                <p className="font-sans-clean text-rustico/35 max-w-sm text-sm">
                  Não encontramos nenhum produto que coincida com &quot;{searchQuery}&quot;. Tente buscar outros termos.
                </p>
              </div>
            ) : (
              tabs.map((tab) => {
                const items = menuData[tab.id as TabType] || [];
                const tabFilteredItems = searchQuery.trim()
                  ? items.filter(
                      (item) =>
                        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.description.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                  : items;

                // When searching, hide tabs with 0 matches. When not searching, hide inactive tabs.
                const isTabHidden = searchQuery.trim()
                  ? tabFilteredItems.length === 0
                  : activeTab !== tab.id;

                return (
                  <div
                    key={tab.id}
                    className={isTabHidden ? 'hidden' : 'block'}
                  >
                    {searchQuery.trim() && (
                      <h3 className="font-cinzel text-tbbRed text-xs tracking-widest font-bold uppercase mb-6 mt-8">
                        {tab.label}
                      </h3>
                    )}

                    {/* Layout Mobile: Lista Vertical */}
                    <div className="block sm:hidden flex flex-col gap-4 mb-8">
                      {tabFilteredItems.map((item) => (
                        <MenuItem
                          key={item.title}
                          title={item.title}
                          description={item.description}
                          price={item.price}
                          badge={item.badge}
                          imageUrl={item.imageUrl}
                          altText={item.altText}
                          layout="compact"
                          tone={tab.id === 'almoco' ? 'almoco' : 'noturno'}
                        />
                      ))}
                    </div>

                    {/* Layout Desktop: Grid */}
                    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {tabFilteredItems.map((item) => (
                        <MenuItem
                          key={item.title}
                          title={item.title}
                          description={item.description}
                          price={item.price}
                          badge={item.badge}
                          imageUrl={item.imageUrl}
                          altText={item.altText}
                          isCombo={tab.id === 'combos'}
                          layout="normal"
                          tone={tab.id === 'almoco' ? 'almoco' : 'noturno'}
                        />
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>

        </div>
      </section>

      {/* Seção Call to Action Final */}
      <section className="relative py-24 px-6 border-t border-white/[0.04] bg-black overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80')]" />
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-8 items-center">
          <div className="inline-flex items-center gap-1 bg-tbbRed/10 border border-tbbRed/20 px-3 py-1 rounded text-tbbRed font-cinzel text-[10px] tracking-wider uppercase font-bold">
            <Flame className="w-3.5 h-3.5 animate-pulse" /> FOME DE VERDADE?
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-rustico font-black uppercase tracking-tight leading-none">
            FAÇA SEU PEDIDO AGORA MESMO
          </h2>
          <p className="font-sans-clean text-rustico/60 text-sm sm:text-base max-w-lg">
            Escolheu os seus favoritos? Mande uma mensagem para o nosso WhatsApp. Entregamos quentinho e rápido na sua casa ou preparamos para retirada!
          </p>
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-tbbRed hover:bg-tbbRedDark text-rustico font-cinzel font-bold text-xs uppercase tracking-widest rounded shadow-[0_4px_20px_rgba(161,24,24,0.3)] transition-all duration-300 hover:scale-[1.02]"
          >
            Fazer Pedido no WhatsApp <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Assistente virtual Lu */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} onOpen={() => setIsChatOpen(true)} />
    </div>
  );
}
