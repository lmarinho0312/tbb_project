import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import {
  Anton,
  Cinzel,
  DM_Serif_Display,
  Playfair_Display,
  Kaushan_Script,
  Montserrat,
} from 'next/font/google';

// ── Carregamento local via next/font (zero bloqueio de rede) ──────────────────
const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const cinzel = Cinzel({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const kaushanScript = Kaushan_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kaushan',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const fontVars = [
  anton.variable,
  cinzel.variable,
  dmSerifDisplay.variable,
  playfairDisplay.variable,
  kaushanScript.variable,
  montserrat.variable,
].join(' ');

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={fontVars}>
      <div className="noise-bg" />
      <Component {...pageProps} />
    </div>
  );
}
