import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  // Detect touch devices/screens to disable mouse-tilt on mobile for better accessibility
  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(window.matchMedia('(pointer: coarse)').matches);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  // Normalized motion values (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics configuration for responsive yet organic motion
  const springConfig = { stiffness: 150, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isTouch ? 0 : rotateX,
        rotateY: isTouch ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
