import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR" className="scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Cinzel:wght@400;600;700;900&family=DM+Serif+Display:ital@0;1&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Kaushan+Script&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Fallback do favicon e apple touch icon */}
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
