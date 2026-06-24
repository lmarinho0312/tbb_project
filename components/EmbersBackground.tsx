import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeSpeed: number;
  wobbleSpeed: number;
  wobbleAmount: number;
  color: string;
}

export default function EmbersBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const maxParticles = 80; // Distribuição global mais presente

    // Cores de brasa quente
    const colors = [
      'rgba(255, 61, 0, ',   // Fogo Neon Orange-Red
      'rgba(255, 160, 0, ',  // Brasa Warm Amber
      'rgba(255, 215, 0, ',  // Dourado Spark
      'rgba(230, 81, 0, '    // Deep Copper
    ];

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const createParticle = (initAtRandomY = false): Particle => {
      const size = Math.random() * 2.2 + 0.8;
      return {
        x: Math.random() * canvas.width,
        y: initAtRandomY ? Math.random() * canvas.height : canvas.height + Math.random() * 30,
        size,
        speedY: -(Math.random() * 1.2 + 0.4),
        speedX: Math.random() * 0.4 - 0.2,
        opacity: Math.random() * 0.38 + 0.18, // suavizado: 0.18–0.56 (era 0.3–0.8)
        fadeSpeed: Math.random() * 0.003 + 0.001,
        wobbleSpeed: Math.random() * 0.02 + 0.005,
        wobbleAmount: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    };

    // Preenche inicialmente com partículas distribuídas pela tela
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(true));
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        // Atualiza posição
        p.y += p.speedY;
        // Oscilação em seno no eixo X para dar aspecto de vento quente
        p.x += p.speedX + Math.sin(p.y * p.wobbleSpeed) * p.wobbleAmount * 0.05;
        p.opacity -= p.fadeSpeed;

        // Se a partícula sair da tela ou ficar transparente, recria ela embaixo
        if (p.y < -10 || p.opacity <= 0 || p.x < -10 || p.x > canvas.width + 10) {
          particles[index] = createParticle(false);
          return;
        }

        // Desenha a partícula (brasa)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Efeito de brilho radial
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();

        // Adiciona um brilho sutil (glow) para partículas maiores
        if (p.size > 2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity * 0.25})`;
          ctx.fill();
        }
      });
    };

    let lastTime = 0;
    const animate = (time: number) => {
      // Limita a renderização a cerca de 60fps para performance
      if (time - lastTime >= 16.67) {
        drawParticles();
        lastTime = time;
      }
      animationId = requestAnimationFrame(animate);
    };

    // Inicia loop
    animationId = requestAnimationFrame(animate);

    // Controle de performance: para quando a aba não estiver visível
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animationId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[3]"
      aria-hidden="true"
    />
  );
}
