import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../config/site';

// Ícone personalizado de motocicleta/scooter retro para o Delivery
const DeliveryIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Roda Traseira */}
    <circle cx="6" cy="18" r="2" />
    {/* Roda Dianteira */}
    <circle cx="18" cy="18" r="2" />
    {/* Chassi e Guidão */}
    <path d="M6 18h4l2-6h5l2 4h1a1 1 0 0 1 1 1v1" />
    {/* Garfo dianteiro */}
    <path d="M18 18l-1.5-6.5L16 9" />
    {/* Guidão */}
    <path d="M14 9h3" />
    {/* Baú de Delivery */}
    <rect x="3" y="9" width="5" height="5" rx="1" fill="currentColor" opacity="0.15" />
    <rect x="3" y="9" width="5" height="5" rx="1" />
    {/* Assento */}
    <path d="M9 13h4.5l.5-1H9.5z" fill="currentColor" />
  </svg>
);

const UserIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Se activeSection não for fornecido, determinamos a aba com base no path
  const currentSection = activeSection || (
    router.pathname === '/' ? 'home' :
    router.pathname.startsWith('/cardapio') ? 'cardapio' :
    router.pathname.startsWith('/unidades') ? 'unidades' :
    router.pathname.startsWith('/sobre') ? 'sobre' : 'home'
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '/', id: 'home' },
    { label: 'CARDÁPIO', href: '/cardapio', id: 'cardapio' },
    { label: 'UNIDADES', href: '/unidades', id: 'unidades' },
    { label: 'SOBRE NÓS', href: '/sobre', id: 'sobre' },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-carvao/95 border-b border-white/[0.06] backdrop-blur-md py-1 shadow-lg'
          : 'bg-gradient-to-b from-black/80 to-transparent py-4'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 relative flex items-center justify-between min-h-[60px]"
        role="navigation"
        aria-label="Navegação Principal"
      >
        {/* ── DESKTOP NAVIGATION (LEFT) ── */}
        <div className="hidden lg:flex items-center gap-8 w-1/3">
          {navLinks.map((link) => {
            const isActive = currentSection === link.id;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-cinzel text-[11px] font-bold tracking-[0.14em] transition-all duration-200 relative py-2 ${
                  isActive ? 'text-tbbRed' : 'text-rustico/80 hover:text-brasa'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-tbbRed rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* ── LOGO CENTRALIZADO QUE TRANSBORDA (DESKTOP E MOBILE) ── */}
        <div className="absolute left-1/2 -translate-x-1/2 z-50 flex justify-center">
          <Link href="/" className="relative select-none block group">
            <div
              className={`relative transition-all duration-300 bg-carvao rounded-full border-4 border-white/[0.04] p-1 flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.8)] ${
                isScrolled 
                  ? 'w-[76px] h-[76px] lg:w-[84px] lg:h-[84px] translate-y-2' 
                  : 'w-[88px] h-[88px] lg:w-[105px] lg:h-[105px] translate-y-3 lg:translate-y-5'
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/logotbb.png"
                  alt="Logo TBB Hamburgueria Grill"
                  fill
                  sizes="(max-width: 1024px) 76px, 105px"
                  priority
                  className="object-contain scale-95 group-hover:scale-100 transition-transform duration-300"
                />
              </div>
            </div>
          </Link>
        </div>

        {/* ── DESKTOP UTILITIES (RIGHT) ── */}
        <div className="hidden lg:flex items-center justify-end gap-6 w-1/3">
          {/* Delivery link */}
          <a
            href="https://pedido.takeat.app/tbbhamburgueria01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-cinzel text-[11px] font-bold tracking-widest text-rustico/80 hover:text-brasa transition-colors"
          >
            <DeliveryIcon className="w-4 h-4 text-brasa" />
            DELIVERY
          </a>



          {/* Botão Peça Agora */}
          <a
            href="https://pedido.takeat.app/tbbhamburgueria01"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-tbbRed hover:bg-tbbRedHover text-rustico font-cinzel font-bold text-[11px] tracking-widest uppercase rounded transition-all duration-300 shadow-[0_4px_14px_rgba(161,24,24,0.3)] hover:shadow-[0_6px_20px_rgba(161,24,24,0.5)] active:scale-95"
          >
            PEÇA AGORA
          </a>
        </div>

        {/* ── MOBILE CONTROLS (HAMBURGER LEFT, DELIVERY RIGHT) ── */}
        {/* Hambúrguer Esquerda */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-rustico focus-visible-ring rounded-rustico-sm z-10"
          aria-label={isOpen ? 'Fechar Menu' : 'Abrir Menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Botão Delivery Direita */}
        <a
          href="https://pedido.takeat.app/tbbhamburgueria01"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 bg-tbbRed text-rustico font-cinzel font-bold text-[10px] tracking-widest uppercase rounded shadow-lg active:scale-95 z-10"
        >
          <DeliveryIcon className="w-3.5 h-3.5" />
          DELIVERY
        </a>
      </nav>

      {/* ── Mobile Menu Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-carvao/98 border-b border-white/[0.06] px-6 py-6 flex flex-col gap-5 overflow-hidden backdrop-blur-md mt-1"
          >
            <div className="flex flex-col gap-1 mt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="font-cinzel text-xs font-bold tracking-[0.18em] uppercase text-rustico/90 hover:text-brasa py-3.5 border-b border-white/[0.04] transition-colors flex items-center justify-between"
                >
                  {link.label}
                  <span className="text-white/20 text-xs">→</span>
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2">

              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full text-center py-4 rounded bg-tbbRed hover:bg-tbbRedHover text-rustico font-cinzel font-bold text-xs tracking-widest uppercase transition-all shadow-[0_4px_12px_rgba(161,24,24,0.4)]"
              >
                Peça no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
