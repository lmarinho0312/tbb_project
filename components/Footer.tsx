import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, CreditCard, Flame, MapPin } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function Footer() {
  const [activeMap, setActiveMap] = useState(0);

  const mapUrls = siteConfig.locations.map((loc) =>
    `https://maps.google.com/maps?q=${encodeURIComponent(loc.address + ', Teresópolis, RJ, Brasil')}&output=embed&hl=pt-BR`
  );

  return (    <footer className="bg-carvao border-t border-white/[0.05]" role="contentinfo">
 
      {/* ── Seção de Mapas (Unidades) ── */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col gap-6">
          {/* Cabeçalho mapas */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="flex items-center gap-1.5 text-tbbRed font-cinzel font-bold text-xs uppercase tracking-widest mb-2">
                <MapPin className="w-4 h-4 text-tbbRed" />
                Como Nos Encontrar
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-rustico uppercase tracking-tight leading-none">
                Três endereços, uma só brasa.
              </h2>
            </div>
 
            {/* Tabs de seleção de unidade (desktop) */}
            <div className="hidden sm:flex gap-2.5">
              {siteConfig.locations.map((loc, i) => (
                <button
                  key={loc.name}
                  onClick={() => setActiveMap(i)}
                  aria-label={`Ver mapa da unidade ${loc.name}`}
                  className={`px-5 py-2.5 rounded font-cinzel text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeMap === i
                      ? 'bg-tbbRed text-rustico shadow-glow-tbbRed hover:scale-[1.02]'
                      : 'bg-white/[0.04] text-rustico/60 hover:text-rustico hover:bg-white/[0.08]'
                  }`}
                >
                  {loc.name}
                </button>
              ))}
            </div>
          </div>
 
          {/* Mapa ativo (desktop) + informações */}
          <div className="hidden sm:grid grid-cols-[1fr_340px] gap-8 items-start">
            {/* iframe do mapa */}
            <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden border border-white/[0.06] shadow-[0_15px_35px_rgba(0,0,0,0.8)] bg-black">
              <iframe
                key={activeMap}
                src={mapUrls[activeMap]}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'grayscale(1) invert(92%) contrast(1.15) brightness(0.95)',
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa da unidade ${siteConfig.locations[activeMap].name}`}
              />
            </div>
 
            {/* Info da unidade ativa */}
            <div className="flex flex-col gap-4 py-2">
              <div>
                <h3 className="font-display text-xl text-rustico uppercase tracking-wider font-bold">
                  {siteConfig.locations[activeMap].name}
                </h3>
                <p className="font-sans-clean text-xs text-rustico/50 mt-1 italic">
                  {siteConfig.locations[activeMap].details}
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-4 border-t border-white/[0.05] font-sans-clean text-xs text-rustico/75">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-tbbRed shrink-0 mt-0.5" />
                  <span>{siteConfig.locations[activeMap].address}</span>
                </div>
                <div className="flex items-start gap-2 text-tbbRed font-bold">
                  <Flame className="w-4 h-4 fill-tbbRed text-tbbRed shrink-0 mt-0.5" />
                  <span>{siteConfig.locations[activeMap].hours}</span>
                </div>
              </div>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full text-center px-6 py-3.5 rounded bg-tbbRed hover:bg-tbbRedHover text-rustico font-cinzel font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-glow-tbbRed hover:scale-[1.02] active:scale-95 border-none cursor-pointer"
              >
                Pedir nesta Unidade
              </a>
            </div>
          </div>
 
          {/* Mobile: todos os mapas empilhados */}
          <div className="flex flex-col gap-6 sm:hidden">
            {siteConfig.locations.map((loc, i) => (
              <div key={loc.name} className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-tbbRed fill-tbbRed" />
                  <h3 className="font-display text-sm text-rustico uppercase tracking-wider font-bold">{loc.name}</h3>
                </div>
                <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-white/[0.06] shadow-md bg-black">
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
                <p className="font-sans-clean text-xs text-tbbRed font-bold">{loc.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {/* ── Divisor ── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>
 
      {/* ── Rodapé principal ── */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
 
        {/* Coluna 1: Logo e Descrição */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex flex-col gap-3 group select-none">
            <div className="relative w-20 h-20 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logotbb.png"
                alt="Logo TBB Hamburgueria Grill"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
            <span className="tracking-wide text-lg font-cinzel uppercase text-rustico font-bold">
              THE BEST <span className="text-tbbRed text-glow-tbbRed">BURGUER</span>
            </span>
          </Link>
          <p className="font-body text-xs text-rustico/60 leading-relaxed max-w-xs">
            {siteConfig.seo.description}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-1 font-cinzel text-[10px] tracking-wider font-bold text-rustico/50">
            <Link href="/" className="hover:text-tbbRed transition-colors">HOME</Link>
            <Link href="/cardapio" className="hover:text-tbbRed transition-colors">CARDÁPIO</Link>
            <Link href="/unidades" className="hover:text-tbbRed transition-colors">UNIDADES</Link>
            <Link href="/sobre" className="hover:text-tbbRed transition-colors">SOBRE NÓS</Link>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <a
              href={siteConfig.contact.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da The Best Burguer"
              className="p-2 bg-white/[0.04] hover:bg-tbbRed text-rustico hover:text-rustico rounded transition-colors duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da The Best Burguer"
              className="p-2 bg-white/[0.04] hover:bg-tbbRed text-rustico hover:text-rustico rounded transition-colors duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.488 4.965 1.489 5.425-.001 9.839-4.417 9.842-9.843.002-2.628-1.02-5.1-2.876-6.958C16.666 1.986 14.195.962 11.57.962c-5.429 0-9.843 4.415-9.845 9.843-.001 1.905.504 3.763 1.462 5.413L2.086 21.84l5.7-.935zM17.65 14.5c-.29-.145-1.72-.85-1.985-.95-.268-.1-.463-.145-.66.145-.195.29-.755.95-.925 1.145-.17.195-.34.215-.63.07-2.815-1.405-4.64-3.52-5.41-4.845-.205-.35.075-.325.29-.755.15-.3.075-.565-.038-.765-.113-.2-.925-2.235-1.27-3.058-.335-.805-.675-.695-.925-.705-.24-.01-.515-.01-.79-.01-.275 0-.72.1-1.1.51-.375.41-1.43 1.4-1.43 3.41s1.465 3.94 1.665 4.21c.2.27 2.885 4.405 6.99 6.185.975.425 1.735.68 2.33.87.98.31 1.87.265 2.57.16.78-.115 2.385-.975 2.72-1.915.34-.94.34-1.745.24-1.915-.1-.17-.39-.27-.68-.415z"/>
              </svg>
            </a>
          </div>
        </div>
 
        {/* Coluna 2: Unidades (resumo) */}
        <div className="flex flex-col gap-4">
          <h3 className="font-cinzel text-sm text-tbbRed tracking-[0.15em] uppercase font-bold">
            Nossas Unidades
          </h3>
          <div className="flex flex-col gap-4">
            {siteConfig.locations.map((loc) => (
              <div key={loc.name} className="flex flex-col gap-0.5 border-l-2 border-tbbRed/30 pl-3">
                <strong className="font-cinzel text-rustico font-bold text-xs uppercase tracking-wide">{loc.name}</strong>
                <span className="font-body text-rustico/60 text-xs leading-relaxed">{loc.address}</span>
                <span className="text-tbbRed text-[11px] font-semibold mt-0.5">{loc.hours}</span>
              </div>
            ))}
          </div>
        </div>
 
        {/* Coluna 3: Contato */}
        <div className="flex flex-col gap-4">
          <h3 className="font-cinzel text-sm text-tbbRed tracking-[0.15em] uppercase font-bold">
            Contato & Info
          </h3>
          <ul className="flex flex-col gap-3 font-body text-xs text-rustico/70">
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-tbbRed shrink-0 mt-0.5" />
              <a
                href={`tel:+${siteConfig.contact.whatsappNumber}`}
                className="hover:text-tbbRed hover:underline transition-all"
              >
                <strong className="text-rustico/80">WhatsApp: </strong>
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <CreditCard className="w-4 h-4 text-tbbRed shrink-0 mt-0.5" />
              <span>
                <strong className="text-rustico/80">Formas de Pagamento:</strong>
                <br />
                <span className="text-rustico/60 leading-relaxed">
                  Cartões de Crédito e Débito, Pix, Dinheiro, Vale Refeição (Alelo, Sodexo, Ticket).
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
 
      {/* ── Copyright ── */}
      <div className="max-w-7xl mx-auto px-6 pb-8 border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-body text-xs text-rustico/50">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.socialName}. Todos os direitos reservados.
        </p>
        <p className="flex items-center gap-1 select-none">
          Desenvolvido com
          <Flame className="w-3 h-3 text-tbbRed fill-tbbRed" />
          para a Região Serrana.
        </p>
      </div>
    </footer>
  );
}
