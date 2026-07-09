import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, CreditCard, Flame } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function Footer() {
  return (    <footer className="bg-carvao border-t border-white/[0.05]" role="contentinfo">
 
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
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.455h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
        <p className="select-none">
          Desenvolvido por AZIRA AGÊNCIA
        </p>
      </div>
    </footer>
  );
}
