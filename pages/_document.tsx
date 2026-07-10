import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR" className="scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        {/* Preconnect para fontes (next/font carrega automaticamente — apenas por segurança) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preconnect para imagens Unsplash — economia de ~300ms no LCP */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        {/* ⚠️ O link de fontes foi REMOVIDO — fontes agora carregam via next/font sem bloquear render */}
        {/* Favicon principal e fallbacks para todos os navegadores e dispositivos */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#121212" />
      </Head>
      <body className="bg-carvao text-rustico antialiased">
        {/* Skip to main content for accessibility */}
        <a 
          href="#conteudo-principal" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-brasa focus:text-carvao focus:px-4 focus:py-2 focus:rounded-rustico-md focus:font-bold focus:outline-none"
        >
          Pular para o conteúdo principal
        </a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
