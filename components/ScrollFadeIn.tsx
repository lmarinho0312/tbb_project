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
 * Usa física de mola (spring) para animações naturais e orgânicas.
 * Respeita a preferência do usuário por motion reduzido (prefers-reduced-motion).
 */
const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) => {
  const prefersReduced = useReducedMotion();

  // Offset inicial suave — pequeno o suficiente para ser elegante,
  // mas perceptível o suficiente para dar a sensação de movimento.
  const offset = prefersReduced
    ? { x: 0, y: 0, scale: 1 }
    : direction === 'left'
    ? { x: -48, y: 0, scale: 0.98 }
    : direction === 'right'
    ? { x: 48, y: 0, scale: 0.98 }
    : direction === 'up'
    ? { x: 0, y: 32, scale: 0.98 }
    : { x: 0, y: -32, scale: 0.98 };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...offset,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      className={className}
      initial={prefersReduced ? { opacity: 1 } : 'hidden'}
      whileInView={prefersReduced ? {} : 'visible'}
      viewport={{ once: true, amount: 0.12 }}
      variants={variants}
      transition={
        prefersReduced
          ? { duration: 0 }
          : {
              // Mola natural — sem overshooting excessivo
              type: 'spring',
              stiffness: 60,
              damping: 20,
              mass: 0.8,
              delay,
            }
      }
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
