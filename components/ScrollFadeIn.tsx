import React, { ReactNode } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

interface ScrollFadeInProps {
  children: ReactNode;
  /**
   * Direção da qual o elemento entra na viewport.
   * - 'left'  → desliza da esquerda para a direita
   * - 'right' → desliza da direita para a esquerda
   * - 'up'    → sobe suavemente (fade in ascendente — padrão)
   * - 'down'  → desce suavemente
   */
  direction?: 'left' | 'right' | 'up' | 'down';
  /** Atraso em segundos antes da animação começar (útil para escalonamento) */
  delay?: number;
  className?: string;
}

/**
 * Wrapper reutilizável com fade‑in + slide suave ao entrar na viewport.
 * Usa apenas propriedades GPU-composited (opacity + translate) para máxima
 * fluidez — sem scale nem spring pesados que causam jank no scroll.
 * Respeita a preferência do usuário por motion reduzido (prefers-reduced-motion).
 */
const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) => {
  const prefersReduced = useReducedMotion();

  // Offset pequeno: visualmente elegante, leve para a GPU renderizar
  const offset = prefersReduced
    ? { x: 0, y: 0 }
    : direction === 'left'
    ? { x: -28, y: 0 }
    : direction === 'right'
    ? { x: 28, y: 0 }
    : direction === 'up'
    ? { x: 0, y: 22 }
    : { x: 0, y: -22 };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      // Usa translateX/Y via x/y — processado 100% na GPU (composite layer)
      // Sem scale: evita reflow de layout que causa o jank
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      className={className}
      initial={prefersReduced ? { opacity: 1 } : 'hidden'}
      whileInView={prefersReduced ? {} : 'visible'}
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      // will-change informa ao browser para pré-alocar camada GPU antes da animação
      style={{ willChange: 'transform, opacity' }}
      transition={
        prefersReduced
          ? { duration: 0 }
          : {
              // Tween com easing suave — mais previsível que spring e zero jank
              type: 'tween',
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1], // easeOutQuint — rápido início, termina suave
              delay,
            }
      }
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
