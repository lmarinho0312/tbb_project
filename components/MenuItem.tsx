import React from 'react';
import Image from 'next/image';
import { Flame, Star, Utensils } from 'lucide-react';
import { siteConfig } from '../config/site';

interface MenuItemProps {
  title: string;
  description: string;
  price: string;
  badge?: string;
  imageUrl: string;
  altText: string;
  isCombo?: boolean;
  /** Modo compacto: layout horizontal, sem descrição, altura fixa — para cards secundários */
  compact?: boolean;
  /** Layout customizado: normal (imagem acima), compact (horizontal), ou image-bottom (detalhes acima, imagem abaixo) */
  layout?: 'normal' | 'compact' | 'image-bottom';
  /** Tom visual: noturno (vermelho/carvão) ou almoco (âmbar/marrom serrano) */
  tone?: 'noturno' | 'almoco';
}

export default function MenuItem({
  title,
  description,
  price,
  badge,
  imageUrl,
  altText,
  isCombo = false,
  compact = false,
  layout = 'normal',
  tone = 'noturno',
}: MenuItemProps) {
  // Ajuste automático se compact for passado como prop
  const currentLayout = compact ? 'compact' : layout;

  // ── 1. MODO COMPACTO / HORIZONTAL (Cards do Cardápio Mobile e Secundários) ──
  if (currentLayout === 'compact') {
    return (
      <div
        className={`relative flex overflow-hidden rounded border group h-full transition-all duration-500 ${
          tone === 'almoco'
            ? 'border-brasa/15 bg-[#FAF9F6]/[0.02] hover:border-brasa/30 hover:bg-[#FAF9F6]/[0.04]'
            : 'border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04]'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', minHeight: '140px' }}
      >
        {/* Conteúdo — lateral esquerda (60%) */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-sm text-rustico uppercase tracking-wider leading-tight mb-1">
              {title}
            </h3>
            {badge && (
              <div className={`inline-flex items-center gap-1 font-cinzel text-[8px] tracking-widest uppercase px-1.5 py-0.5 rounded mb-2 ${
                tone === 'almoco'
                  ? 'bg-brasa/90 text-carvao'
                  : 'bg-tbbRed/90 text-rustico'
              }`}>
                {tone === 'almoco'
                  ? <Utensils className="w-2.5 h-2.5" />
                  : <Flame className="w-2.5 h-2.5 fill-rustico" />
                }
                {badge}
              </div>
            )}
            <p className="font-body text-[10px] text-rustico/45 line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex items-baseline gap-2 mt-3">
            <span className="font-cinzel text-sm text-tbbRed font-bold">{price}</span>
          </div>
        </div>

        {/* Imagem — lateral direita (40%) */}
        <div className="relative w-[38%] shrink-0 overflow-hidden">
          <Image
            src={imageUrl}
            alt={altText}
            fill
            sizes="30vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-carvao/60 to-transparent pointer-events-none" />
        </div>

        {/* Link flutuante invisível para clicar em todo o card e direcionar ao whatsapp */}
        <a
          href={siteConfig.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`Pedir ${title} no WhatsApp`}
        />
      </div>
    );
  }

  // ── 2. MODO IMAGEM ABAIXO (Destaques da seção "Feito para quem respeita") ──
  if (currentLayout === 'image-bottom') {
    return (
      <div
        className="relative flex flex-col justify-between overflow-hidden rounded border border-white/[0.06] hover:border-tbbRed/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 h-full group shadow-lg"
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {/* Detalhes superiores */}
        <div className="p-5 flex flex-col justify-between flex-1 gap-4">
          <div>
            <h3 className="font-display text-base text-rustico uppercase tracking-wider leading-tight mb-2">
              {title}
            </h3>
            <p className="font-body text-[11px] text-rustico/50 line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-between gap-3 pt-2 border-t border-white/[0.04]">
            <span className="font-cinzel text-base text-tbbRed font-bold">{price}</span>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-transparent hover:bg-tbbRed hover:text-rustico border border-tbbRed/35 hover:border-tbbRed text-tbbRed font-cinzel font-bold text-[9px] uppercase tracking-widest rounded transition-all duration-300"
            >
              Pedir Agora
            </a>
          </div>
        </div>

        {/* Imagem inferior */}
        <div className="relative aspect-[16/11] w-full overflow-hidden shrink-0">
          {badge && (
            <div className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-tbbRed text-rustico font-cinzel text-[8px] tracking-widest uppercase px-2 py-0.5 rounded shadow-sm">
              <Flame className="w-2.5 h-2.5 fill-rustico" />
              {badge}
            </div>
          )}
          <Image
            src={imageUrl}
            alt={altText}
            fill
            sizes="(max-width: 768px) 90vw, 30vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        </div>
      </div>
    );
  }

  // ── 3. MODO NORMAL (Grade de Cardápio Desktop / Padrão) ──
  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden rounded border transition-all duration-500 ${
        tone === 'almoco'
          ? 'border-brasa/15 bg-[#FAF9F6]/[0.03] hover:border-brasa/40 hover:-translate-y-1 shadow-[0_4px_20px_rgba(255,160,0,0.03)]'
          : isCombo
            ? 'border-white/[0.05] bg-white/[0.03] hover:-translate-y-1 hover:bg-white/[0.05] hover:border-tbbRed/20'
            : 'border-white/[0.05] bg-white/[0.02] hover:-translate-y-1 hover:bg-white/[0.04] hover:border-tbbRed/20'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      {/* Imagem superior */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {badge && (
          <div className={`absolute top-3 left-3 z-10 flex items-center gap-1 font-cinzel text-[9px] tracking-widest uppercase px-2.5 py-1 rounded shadow-md ${
            tone === 'almoco'
              ? 'bg-brasa/90 text-carvao'
              : 'bg-tbbRed text-rustico'
          }`}>
            {tone === 'almoco'
              ? <Utensils className="w-3 h-3" />
              : <Flame className="w-3.5 h-3.5 fill-rustico" />
            }
            {badge}
          </div>
        )}
        <Image
          src={imageUrl}
          alt={altText}
          fill
          sizes="(max-width: 768px) 90vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-carvao/80 to-transparent pointer-events-none" />
      </div>

      {/* Conteúdo inferior */}
      <div className="flex-1 p-5 flex flex-col justify-between gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-base lg:text-lg text-rustico uppercase tracking-wider leading-tight">
              {title}
            </h3>
            {isCombo && (
              <span className="flex items-center gap-0.5 text-brasa font-cinzel font-semibold text-[8px] tracking-widest bg-brasa/10 px-2 py-0.5 rounded shrink-0 uppercase">
                <Star className="w-2.5 h-2.5 fill-brasa" />
                Popular
              </span>
            )}
          </div>
          <p className="font-body text-xs text-rustico/55 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 mt-auto pt-3 border-t border-white/[0.05]">
          <span className="font-cinzel text-base lg:text-lg text-tbbRed font-bold tracking-wide">
            {price}
          </span>
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Pedir ${title} no WhatsApp`}
            className="px-4 py-2 rounded bg-transparent hover:bg-tbbRed hover:text-rustico border border-tbbRed/30 hover:border-tbbRed text-tbbRed font-cinzel font-bold text-[10px] uppercase tracking-widest transition-smooth"
          >
            Pedir
          </a>
        </div>
      </div>
    </div>
  );
}
