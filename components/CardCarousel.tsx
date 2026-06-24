import React, { useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CardCarouselProps {
  children: React.ReactNode;
  id: string;
}

/**
 * CardCarousel — carrossel responsivo com setas sempre visíveis no layout (mobile),
 * snap nativo e grid em desktop.
 */
export default function CardCarousel({ children, id }: CardCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstChild = container.firstElementChild as HTMLElement | null;
    const step = firstChild ? firstChild.offsetWidth + 20 : 320;
    container.scrollBy({ left: direction === 'right' ? step : -step, behavior: 'smooth' });
  }, []);

  const arrowBase = [
    'shrink-0 w-10 h-10 rounded-full flex items-center justify-center',
    'bg-carvao/70 border border-white/[0.08]',
    'text-rustico/70 hover:text-brasa hover:border-brasa/30',
    'backdrop-blur-sm transition-all duration-200',
    'focus-visible-ring shadow-[0_2px_12px_rgba(0,0,0,0.5)]',
    'active:scale-95',
  ].join(' ');

  return (
    <div className="w-full flex flex-col gap-4">
      {/* ── Controles de navegação (sempre visíveis no mobile) ── */}
      <div className="flex items-center justify-end gap-2 md:hidden pr-1">
        <button
          onClick={() => scroll('left')}
          aria-label="Ver card anterior"
          className={arrowBase}
        >
          <ChevronLeft className="w-5 h-5 shrink-0" />
        </button>
        <button
          onClick={() => scroll('right')}
          aria-label="Ver próximo card"
          className={arrowBase}
        >
          <ChevronRight className="w-5 h-5 shrink-0" />
        </button>
      </div>

      {/* ── Scroll Container ── */}
      <div
        ref={scrollRef}
        id={id}
        className={[
          /* mobile: scroll horizontal com snap */
          'flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar',
          /* tablet+: grid 2 colunas */
          'md:grid md:grid-cols-2',
          /* desktop: grid 3 colunas */
          'lg:grid-cols-3',
          /* reset de flex para grid em breakpoints maiores */
          'md:overflow-x-visible md:snap-none',
          'pb-1 md:pb-0',
        ].join(' ')}
      >
        {React.Children.map(children, (child) => (
          <div className="snap-start shrink-0 w-[82vw] sm:w-[60vw] md:w-auto md:shrink">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
