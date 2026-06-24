import React from 'react';
import Image from 'next/image';
import { Flame } from 'lucide-react';
import { siteConfig } from '../config/site';

interface FeaturedComboCardProps {
  title: string;
  description: string;
  price: string;
  badge?: string;
  imageUrl: string;
  altText: string;
}

/**
 * FeaturedComboCard — card de destaque para o produto mais vendido.
 * Ocupa 2fr da grade assimétrica com imagem full-coverage e texto sobreposto.
 */
export default function FeaturedComboCard({
  title,
  description,
  price,
  badge,
  imageUrl,
  altText,
}: FeaturedComboCardProps) {
  return (
    <div className="relative overflow-hidden rounded-rustico-lg group h-full min-h-[360px] lg:min-h-[460px] shadow-[0_4px_40px_rgba(0,0,0,0.7)]">
      {/* Imagem full-coverage */}
      <Image
        src={imageUrl}
        alt={altText}
        fill
        sizes="(max-width: 1024px) 100vw, 65vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority
      />

      {/* Badge topo esquerdo */}
      {badge && (
        <div className="absolute top-5 left-5 z-10 flex items-center gap-1.5 bg-fogo text-rustico font-cinzel text-xs tracking-widest uppercase px-4 py-1.5 rounded-rustico-sm shadow-glow-fogo brasa-pulse">
          <Flame className="w-3.5 h-3.5 fill-rustico" />
          {badge}
        </div>
      )}

      {/* Label "DESTAQUE" topo direito */}
      <div className="absolute top-5 right-5 z-10 bg-black/40 backdrop-blur-sm border border-white/10 text-rustico/60 font-cinzel text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full">
        Mais Pedido
      </div>

      {/* Gradiente inferior — para legibilidade do texto */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-carvao via-carvao/70 to-transparent" />

      {/* Conteúdo sobreposto */}
      <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8 z-10">
        {/* Eyebrow */}
        <p className="font-dm-serif-italic text-brasa text-sm mb-1 opacity-90">
          O favorito da casa
        </p>

        {/* Título */}
        <h3 className="font-display text-2xl lg:text-3xl text-rustico font-display-block leading-tight mb-3">
          {title}
        </h3>

        {/* Descrição */}
        <p className="font-body text-xs text-rustico/65 line-clamp-2 leading-relaxed mb-5 max-w-md">
          {description}
        </p>

        {/* Preço + CTA */}
        <div className="flex items-center gap-5">
          <span className="font-cinzel text-3xl lg:text-4xl text-brasa font-bold text-glow-brasa-subtle">
            {price}
          </span>
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Pedir ${title} no WhatsApp`}
            className="px-6 py-3 rounded-rustico-md bg-fogo hover:bg-brasa text-rustico hover:text-carvao font-cinzel font-bold text-xs uppercase tracking-widest transition-smooth shadow-glow-fogo hover:shadow-glow-brasa"
          >
            Pedir Agora →
          </a>
        </div>
      </div>
    </div>
  );
}
