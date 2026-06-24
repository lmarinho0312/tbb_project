import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { MapPin, Clock, Info, ExternalLink, ShieldCheck, Smile, Gift, Award, Flame } from 'lucide-react';
import { siteConfig } from '../config/site';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EmbersBackground from '../components/EmbersBackground';
import ChatBot from '../components/ChatBot';
import TiltCard from '../components/TiltCard';

export default function Unidades() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Mapeamento de ícones para os badges das unidades
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

  // Google Maps Embed Links correspondentes aproximados para as ruas
  const getMapEmbedUrl = (name: string) => {
    // URLs codificadas de pesquisa no Google Maps para fins de embed seguro e responsivo
    if (name.includes('Agriões')) {
      return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0799763784136!2d-42.969695023801264!3d-22.40723827961208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x981559868be5bb%3A0xe54e60155b46d79a!2sR.%20Nova%20Friburgo%20-%20Centro%2C%20Teres%C3%B3polis%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1719230000000!5m2!1spt-BR!2sbr";
    }
    if (name.includes('Várzea')) {
      return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.035766299388!2d-42.96443302380119!3d-22.408906679610815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x98155e8c1ab091%3A0x6b63c80ff636d1b7!2sR.%20Nilza%20Chiapetta%20Fadigas%2C%20596%20-%20V%C3%A1rzea%2C%20Teres%C3%B3polis%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1719230100000!5m2!1spt-BR!2sbr";
    }
    // Vale do Paraíso
    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5562725515257!2d-42.980695023800624!3d-22.426986279607873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x981517cb58cfb9%3A0x7d6a5f6e63717ea1!2sAv.%20Delfim%20Moreira%2C%202265%20-%20Vale%20do%20Para%C3%ADso%2C%20Teres%C3%B3polis%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1719230200000!5m2!1spt-BR!2sbr";
  };

  return (
    <div className="min-h-screen bg-carvao text-rustico font-sans-clean overflow-x-hidden selection:bg-tbbRed selection:text-white">
      <Head>
        <title>Nossas Unidades | TBB Hamburgueria Artesanal & Steakhouse</title>
        <meta
          name="description"
          content="Conheça nossas 3 unidades em Teresópolis: Agriões (delivery na madrugada), Várzea (ambiente familiar) e Vale do Paraíso (Steakhouse com lareira e espaço kids)."
        />
        <meta property="og:title" content="Nossas Unidades | TBB Hamburgueria Artesanal & Steakhouse" />
      </Head>

      <EmbersBackground />

      <Navbar activeSection="unidades" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-12 flex items-center justify-center border-b border-white/[0.04]">
        <div className="absolute inset-0 z-0 bg-black/60 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 flex flex-col gap-4">
          <span className="font-cinzel text-tbbRed text-xs tracking-[0.25em] font-bold uppercase">
            VENHA NOS VISITAR
          </span>
          <h1 className="flex items-baseline gap-3 flex-wrap justify-center">
            <span className="font-display text-5xl sm:text-7xl lg:text-8xl text-rustico font-black uppercase tracking-tight">
              NOSSAS
            </span>
            <span className="font-dm-serif-italic text-4xl sm:text-6xl lg:text-7xl text-tbbRed">
              Unidades
            </span>
          </h1>
          <p className="font-sans-clean text-rustico/60 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Três endereços estratégicos na serra de Teresópolis, cada um com uma proposta pensada para saborear nossos hambúrgueres e cortes.
          </p>
        </div>
      </section>

      {/* Grid de Unidades Detalhado */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {siteConfig.locations.map((loc, idx) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col rounded-lg overflow-hidden"
                style={{ perspective: 1000 }}
              >
                <TiltCard className="flex flex-col bg-gradient-to-br from-[#1C1613] to-[#0D0A08] border border-[#2D231E] border-l-4 border-l-tbbRed/50 shadow-artesanal-brasa hover:shadow-artesanal-hover hover:border-tbbRed/30 transition-all duration-300 h-full flex-1 group">
                  {/* Cabeçalho da Unidade */}
                  <div className="p-8 flex flex-col gap-4 flex-1">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span 
                          className="font-cinzel text-[9px] text-tbbRed tracking-[0.25em] font-black uppercase mb-1 block"
                          style={{ transform: 'translateZ(15px)' }}
                        >
                          {idx === 0 ? 'Food Truck' : idx === 1 ? 'Fast Casual' : 'Parrilla Steakhouse'}
                        </span>
                        <h3 
                          className="font-display text-2xl text-rustico uppercase tracking-wide font-black"
                          style={{ transform: 'translateZ(25px)' }}
                        >
                          {loc.name}
                        </h3>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-1.5 my-2" style={{ transform: 'translateZ(20px)' }}>
                      {loc.badges?.map((badge) => (
                        <span
                          key={badge}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#231A15] border border-[#3C2E25] rounded font-cinzel text-[9px] tracking-wider uppercase text-rustico/80 font-bold"
                        >
                          <span>{getBadgeIcon(badge)}</span>
                          <span>{badge}</span>
                        </span>
                      ))}
                    </div>

                    <p 
                      className="font-sans-clean text-xs text-rustico/50 leading-relaxed mt-2"
                      style={{ transform: 'translateZ(10px)' }}
                    >
                      {loc.details}
                    </p>

                    {/* Linha pontilhada estilo tíquete */}
                    <div className="w-full h-px border-t border-dashed border-white/[0.06] my-2" />

                    <div 
                      className="flex flex-col gap-3 mt-2 font-sans-clean text-sm"
                      style={{ transform: 'translateZ(15px)' }}
                    >
                      {/* Endereço */}
                      <div className="flex gap-3 text-rustico/70">
                        <MapPin className="w-5 h-5 text-tbbRed shrink-0 mt-0.5" />
                        <span>{loc.address}</span>
                      </div>

                      {/* Horário */}
                      <div className="flex gap-3 text-rustico/70 mt-1">
                        <Clock className="w-5 h-5 text-brasa shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-rustico text-xs uppercase font-cinzel tracking-wider">Horário de Funcionamento:</strong>
                          <span className="text-xs text-rustico/65">{loc.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mapa Embed */}
                  <div 
                    className="h-64 relative w-full bg-black/20 border-t border-b border-white/[0.04]"
                    style={{ transform: 'translateZ(12px)' }}
                  >
                    <iframe
                      src={getMapEmbedUrl(loc.name)}
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                      allowFullScreen={false}
                      loading="lazy"
                      title={`Mapa da ${loc.name}`}
                    />
                  </div>

                  {/* Botão de WhatsApp Específico da Unidade */}
                  <div 
                    className="p-6 bg-[#0E0A08] border-t border-white/[0.04]"
                    style={{ transform: 'translateZ(18px)' }}
                  >
                    <a
                      href={loc.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 bg-tbbRed hover:bg-tbbRedHover text-rustico font-cinzel font-bold text-[11px] uppercase tracking-widest rounded shadow-glow-tbbRed hover:scale-[1.02] active:scale-95 transition-all duration-300"
                    >
                      <span>Pedir nesta Unidade</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Nova de Promoções da Semana */}
      <section className="py-24 px-6 border-t border-b border-white/[0.04] bg-black/20 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Cabeçalho */}
          <div className="flex flex-col items-center text-center gap-3">
            <span className="font-cinzel text-tbbRed text-[11px] tracking-[0.2em] font-bold uppercase">
              SEMANA RECHEADA
            </span>
            <h2 className="flex items-baseline gap-3 flex-wrap justify-center">
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-rustico font-black uppercase tracking-tight">
                PROMOÇÕES
              </span>
              <span className="font-dm-serif-italic text-3xl sm:text-4xl lg:text-5xl text-tbbRed">
                da Semana
              </span>
            </h2>
            <p className="font-sans-clean text-rustico/50 text-xs sm:text-sm max-w-lg mt-2">
              Todo dia é dia de promoção no TBB. Venha curtir no local ou peça direto no delivery. Fique atento às unidades e regras válidas de cada oferta.
            </p>
          </div>

          {/* Cards de Promoções */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-4" style={{ perspective: 1000 }}>
            {siteConfig.weeklyPromos.map((promo, idx) => (
              <motion.div
                key={promo.day}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col rounded-lg overflow-hidden"
              >
                <TiltCard className="flex flex-col justify-between p-6 bg-gradient-to-br from-[#1C1613] to-[#0D0A08] border border-[#2D231E] border-t-2 border-t-tbbRed/50 rounded-rustico-md shadow-artesanal-brasa hover:shadow-artesanal-hover hover:border-tbbRed/30 transition-all duration-300 group text-left h-full flex-1">
                  <div className="flex w-full justify-between items-center" style={{ transform: 'translateZ(20px)' }}>
                    {/* Selo do Dia (Tíquete Vintage) */}
                    <div className="font-cinzel text-[9px] tracking-[0.2em] font-black text-tbbRed bg-tbbRed/5 border border-tbbRed/15 px-2.5 py-0.5 rounded-sm">
                      {promo.day}
                    </div>
                    {/* Icone flutuante no topo direito */}
                    <div 
                      className="text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      {promo.icon}
                    </div>
                  </div>

                  {/* Linha pontilhada estilo tíquete */}
                  <div className="w-full h-px border-t border-dashed border-white/[0.06] my-4" />

                  {/* Textos alinhados à esquerda */}
                  <div className="flex flex-col flex-1 justify-end">
                    <h4 
                      className="font-display text-sm text-rustico uppercase tracking-wider font-black mb-1.5"
                      style={{ transform: 'translateZ(15px)' }}
                    >
                      {promo.title}
                    </h4>
                    <p 
                      className="font-sans-clean text-[10px] text-rustico/50 leading-relaxed mb-4"
                      style={{ transform: 'translateZ(10px)' }}
                    >
                      {promo.copy}
                    </p>
                    
                    {/* Informação Adicional/Badge de rodapé */}
                    <span 
                      className="font-cinzel text-[8px] text-tbbRed/70 tracking-widest uppercase block mt-1 pt-2 border-t border-white/[0.03] font-bold"
                      style={{ transform: 'translateZ(12px)' }}
                    >
                      {promo.day === 'QUI' ? 'Vale do Paraíso' : promo.day === 'QUA' ? 'Stories' : 'Todas as Lojas'}
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Dica da Lu */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsChatOpen(true)}
              className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/[0.04] px-4 py-2.5 rounded text-xs text-rustico/65 hover:text-brasa transition-colors group"
            >
              <Info className="w-4 h-4 text-tbbRed" />
              <span>Quer consultar se a promoção está ativa hoje? <strong>Pergunte para a Lu →</strong></span>
            </button>
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
