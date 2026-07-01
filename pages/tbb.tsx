import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Flame, Calculator, TrendingUp, CheckCircle, ArrowRight, Video, FileText, Sparkles, MessageCircle, Award, Cpu, ShieldAlert } from 'lucide-react';
import EmbersBackground from '../components/EmbersBackground';

export default function TbbProposal() {
  // Estados para a calculadora de receita do novo canal orgânico
  const [buscas, setBuscas] = useState(3200);
  const [conversao, setConversao] = useState(2.5);
  const [ticket, setTicket] = useState(65);

  // Cálculo da receita (Faturamento = Buscas * Conversão % * Ticket)
  const faturamentoMensal = useMemo(() => {
    return buscas * (conversao / 100) * ticket;
  }, [buscas, conversao, ticket]);

  const faturamentoAnual = useMemo(() => {
    return faturamentoMensal * 12;
  }, [faturamentoMensal]);

  // Formatação de número determinística para evitar erro de hidratação (server vs client)
  const formatarNumero = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Formatação de moeda determinística
  const formatarMoeda = (valor: number) => {
    return `R$ ${formatarNumero(Math.round(valor))}`;
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#FAF9F6] font-sans overflow-x-hidden selection:bg-[#A11818] selection:text-[#FAF9F6]">
      <Head>
        <title>Apresentação Exclusiva — Grupo TBB</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Fundo com fagulhas de brasa */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <EmbersBackground />
      </div>

      {/* Header Premium com Logo Oficial */}
      <header className="relative z-10 container mx-auto px-6 py-6 flex justify-between items-center border-b border-[#FAF9F6]/10">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 bg-[#1C1610] rounded-full border border-white/[0.08] p-1 flex items-center justify-center">
            <Image 
              src="/logotbb.png" 
              alt="Logo Grupo TBB" 
              width={40} 
              height={40} 
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display text-2xl uppercase tracking-wider font-bold">Grupo <span className="text-[#A11818]">TBB</span></span>
        </div>
        <div className="px-4 py-2 border border-[#A11818]/30 rounded-full bg-[#1C1610] text-[#FFA000] font-semibold text-xs tracking-wider uppercase">
          Oportunidade Exclusiva
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
        {/* Bloco Hero */}
        <section className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight mb-6 leading-tight">
              Ativação de Canal: <br />
              <span className="text-[#A11818] drop-shadow-[0_0_15px_rgba(161,24,24,0.4)]">Receita Orgânica TBB</span>
            </h1>
            <p className="text-[#FAF9F6]/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Não se trata de construir um site institucional estático. Estamos abrindo um novo canal proprietário de vendas para o Grupo TBB, preparado para a nova era das buscas por Inteligência Artificial.
            </p>
          </motion.div>
        </section>

        {/* 1. Apelo Emocional / História */}
        <section className="mb-12 bg-[#1C1610] border border-[#FAF9F6]/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#A11818]/10 to-transparent pointer-events-none" />
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-[#FFA000]" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#FFA000]">Da Época do Biel Lanches ao Grupo TBB</h2>
          </div>
          <div className="space-y-6 text-[#FAF9F6]/90 leading-relaxed text-base sm:text-lg">
            <p>
              Quem acompanha a trajetória de vocês sabe que o que construíram não é apenas uma hamburgueria comercial. É um patrimônio de família.
            </p>
            <p>
              Sei de onde vocês começaram, lá na época do Biel Lanches. Sei do trabalho duro da Luciane, do Pedro, do Gabriel, do Mateus, do Lucas e de toda a equipe para fazer o negócio crescer e se transformar no que é hoje. A união de vocês e a busca constante por inovação é o que fez a TBB se consolidar como referência na região.
            </p>
            <p>
              A TBB evoluiu de lanches rápidos para uma verdadeira Steakhouse Premium, com salão aconchegante, lareira, cortes na parrilla e drinks selecionados. Esse posicionamento digital foi desenvolvido para refletir essa sofisticação e contar a história real da família de forma profissional, atraindo o público que busca por comida de verdade na serra.
            </p>
          </div>
        </section>

        {/* 2. O Vídeo Walkthrough */}
        <section className="mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-center mb-8 flex items-center justify-center gap-3">
            <Video className="w-6 h-6 text-[#A11818]" /> Vídeo Explicativo do Projeto
          </h2>
          
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-[#FAF9F6]/20 bg-[#120F0C] shadow-2xl flex flex-col items-center justify-center p-6 text-center group">
            <video 
                src="/videos/proposal_walkthrough.mp4" 
                controls 
                poster="/fotos/Screenshot_5.webp"
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
          </div>
        </section>

        {/* NOVA SEÇÃO: A Oportunidade dos Canais de IA (GEO) */}
        <section className="mb-12 bg-gradient-to-b from-[#120F0C] to-[#080808] border border-[#FAF9F6]/10 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#A11818]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-8 h-8 text-[#A11818]" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#FAF9F6]">
              A Grande Mudança: O Fim das Buscas Tradicionais
            </h2>
          </div>

          <div className="space-y-6 text-[#FAF9F6]/90 leading-relaxed text-base">
            <p>
              O comportamento do cliente mudou. Hoje, as pessoas não procuram apenas no Google tradicional clicando em links azuis. Elas abrem o **ChatGPT, Gemini, Perplexity ou usam a busca por voz do celular** para fazer perguntas completas:
            </p>
            <blockquote className="border-l-4 border-[#FFA000] bg-black/30 p-4 font-mono text-sm text-[#FFA000] rounded-r-lg">
              "Qual é o melhor restaurante premium com lareira acesa e parrilla para jantar em Teresópolis neste fim de semana?"
            </blockquote>
            <p>
              Hoje, **nenhum** restaurante em Teresópolis está otimizado tecnicamente para responder a essas ferramentas de Inteligência Artificial. Isso é um "oceano azul". 
            </p>
            <p>
              O site que programamos para o Grupo TBB não é apenas um folheto digital. Ele é um **conector de dados estruturados**. Ele serve como o motor técnico que garante que quando um turista ou morador fizer essa pergunta para uma IA, a única resposta recomendada na serra seja a TBB.
            </p>
          </div>
        </section>

        {/* 3. A Calculadora do Canal Orgânico */}
        <section className="mb-12 bg-gradient-to-b from-[#1C1610] to-[#0E0B08] border border-[#FAF9F6]/10 rounded-2xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="w-8 h-8 text-[#FFA000]" />
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#FFA000]">Simulador de Receita do Canal Orgânico</h2>
              <p className="text-sm text-[#FAF9F6]/60">Estime o faturamento que o Grupo TBB deixa de capturar por não dominar este canal.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Sliders / Inputs */}
            <div className="space-y-6">
              {/* Slider 1: Volume de Buscas */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span>Buscas Mensais de Alta Intenção</span>
                  <span className="text-[#FFA000]">{formatarNumero(buscas)} pessoas</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="10000" 
                  step="100"
                  value={buscas} 
                  onChange={(e) => setBuscas(Number(e.target.value))}
                  className="w-full h-2 bg-black/50 rounded-lg appearance-none cursor-pointer accent-[#A11818]"
                />
                <span className="text-xs text-[#FAF9F6]/40">(Volume estimado de buscas locais de gastronomia na serra)</span>
              </div>

              {/* Slider 2: Taxa de Conversão */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span>Porcentagem de Atração de Clientes</span>
                  <span className="text-[#FFA000]">{conversao}%</span>
                </div>
                <input 
                  type="range" 
                  min="0.5" 
                  max="10" 
                  step="0.1"
                  value={conversao} 
                  onChange={(e) => setConversao(Number(e.target.value))}
                  className="w-full h-2 bg-black/50 rounded-lg appearance-none cursor-pointer accent-[#A11818]"
                />
                <span className="text-xs text-[#FAF9F6]/40">(Média inicial realista de conversão após a otimização)</span>
              </div>

              {/* Slider 3: Ticket Médio */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span>Ticket Médio por Mesa/Jantar</span>
                  <span className="text-[#FFA000]">{formatarMoeda(ticket)}</span>
                </div>
                <input 
                  type="range" 
                  min="30" 
                  max="150" 
                  step="5"
                  value={ticket} 
                  onChange={(e) => setTicket(Number(e.target.value))}
                  className="w-full h-2 bg-black/50 rounded-lg appearance-none cursor-pointer accent-[#A11818]"
                />
                <span className="text-xs text-[#FAF9F6]/40">(Com base nos cortes nobres de Parrilla e combos de burgers)</span>
              </div>
            </div>

            {/* Resultado Visual */}
            <div className="flex flex-col justify-center items-center p-6 bg-black/40 rounded-xl border border-[#FAF9F6]/5 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 text-xs px-2 py-1 bg-[#A11818] font-bold tracking-wider uppercase text-white rounded-br-md">
                Estimativa Conservadora
              </div>
              <span className="text-[#FAF9F6]/60 text-xs uppercase tracking-widest font-semibold mb-2">Faturamento Anual Potencial do Canal</span>
              
              <div className="text-4xl sm:text-5xl font-bold text-[#FFA000] drop-shadow-[0_0_10px_rgba(255,160,0,0.2)] mb-1">
                {formatarMoeda(faturamentoAnual)}
              </div>
              <span className="text-xs text-[#FAF9F6]/60 mb-6">em 12 meses</span>

              <div className="w-full border-t border-[#FAF9F6]/10 pt-4 mt-2">
                <span className="text-xs uppercase text-[#FAF9F6]/40 block mb-1">Impacto Mensal Recorrente</span>
                <div className="text-2xl font-bold text-[#FAF9F6]/90">
                  {formatarMoeda(faturamentoMensal)}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#FAF9F6]/10 text-sm text-[#FAF9F6]/70 leading-relaxed">
            <TrendingUp className="w-5 h-5 inline-block text-[#FFA000] mr-2" />
            **Como essa engrenagem funciona na prática?** Ao criar o conector de dados correto e otimizar para busca tradicional e por inteligência artificial, você cria uma fonte de aquisição direta que leva o cliente até o seu site, permitindo reservas sem intermediários e vendas de delivery sem taxas de terceiros.
          </div>
        </section>

        {/* 4. O que foi feito */}
        <section className="mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-center mb-10 flex items-center justify-center gap-3">
            <FileText className="w-6 h-6 text-[#A11818]" /> Ativos Programados para o Novo Canal
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-4 p-5 bg-[#120F0C] border border-[#FAF9F6]/5 rounded-xl">
              <CheckCircle className="w-6 h-6 text-[#FFA000] shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-1 text-[#FAF9F6]">Análise de Comportamento (200+ Posts)</h3>
                <p className="text-sm text-[#FAF9F6]/70">Ingerimos e estudamos aproximadamente 200 publicações no Instagram para extrair a alma da marca, os produtos mais vendidos e a linguagem rústica ideal.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-[#120F0C] border border-[#FAF9F6]/5 rounded-xl">
              <CheckCircle className="w-6 h-6 text-[#FFA000] shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-1 text-[#FAF9F6]">Cardápio Inteligente Dinâmico</h3>
                <p className="text-sm text-[#FAF9F6]/70">Catalogação e estruturação completa de todo o menu real (do almoço executivo aos burgers clássicos e cortes de parrilla), separando as frentes de consumo diurnas e noturnas.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-[#120F0C] border border-[#FAF9F6]/5 rounded-xl">
              <CheckCircle className="w-6 h-6 text-[#FFA000] shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-1 text-[#FAF9F6]">Design System Rústico-Premium</h3>
                <p className="text-sm text-[#FAF9F6]/70">Identidade visual Next.js + Tailwind sob medida nas cores carvão e brasa da parrilla, fontes premium Anton e Montserrat, com micro-animações interativas de faíscas.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-[#120F0C] border border-[#FAF9F6]/5 rounded-xl">
              <CheckCircle className="w-6 h-6 text-[#FFA000] shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-1 text-[#FAF9F6]">Arquitetura Multi-Unidades</h3>
                <p className="text-sm text-[#FAF9F6]/70">Seções e caminhos direcionados para as 3 unidades (Vale do Paraíso, Agriões e Várzea), destacando reservas de mesa ao lado da lareira e retirada de madrugada.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-[#120F0C] border border-[#FAF9F6]/5 rounded-xl">
              <CheckCircle className="w-6 h-6 text-[#FFA000] shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-1 text-[#FAF9F6]">Blindagem de Margem de Lucro</h3>
                <p className="text-sm text-[#FAF9F6]/70">Integração nativa de botões de conversão e link direto para o delivery próprio (TakeAt/WhatsApp), reduzindo as taxas de 27% que seriam pagas a marketplaces externos.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-[#120F0C] border border-[#FAF9F6]/5 rounded-xl">
              <CheckCircle className="w-6 h-6 text-[#FFA000] shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-1 text-[#FAF9F6]">Otimização para Mecanismos de IA (GEO)</h3>
                <p className="text-sm text-[#FAF9F6]/70">Marcação técnica avançada e dados de restaurante estruturados para que inteligências artificiais como ChatGPT, Gemini, Claude e Siri recomendem o Grupo TBB.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-[#FAF9F6]/60 bg-[#1C1610] border border-[#FAF9F6]/10 px-4 py-3 rounded-lg max-w-xl mx-auto">
            💡 **O protótipo é flexível:** Qualquer texto, imagem, cor ou seção pode ser alterado conforme a preferência de vocês.
          </div>
        </section>

        {/* Bônus do TripAdvisor */}
        <section className="mb-12 bg-gradient-to-r from-[#1C1610] to-[#2C241B] border border-[#FFA000]/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 px-3 py-1 bg-[#FFA000] text-black font-bold text-xs uppercase tracking-widest rounded-bl-lg">
            Bônus Exclusivo
          </div>
          <div className="flex gap-4 items-start">
            <Award className="w-10 h-10 text-[#FFA000] shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[#FFA000] mb-2">
                Configuração & Otimização do TripAdvisor
              </h3>
              <p className="text-sm sm:text-base text-[#FAF9F6]/80 leading-relaxed">
                Teresópolis é um polo de turismo gastronômico muito forte. Para capturar todos os visitantes e turistas que sobem a serra nos fins de semana, nós faremos a **configuração e a otimização completa do perfil do Grupo TBB no TripAdvisor** de forma 100% gratuita como bônus pela nossa parceria.
              </p>
            </div>
          </div>
        </section>

        {/* 5. CTAs Finais */}
        <section className="text-center pt-8 border-t border-[#FAF9F6]/10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase mb-8">Vamos dar o próximo passo?</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             {/* CTA 1: Visualizar Site */}
            <a 
              href="https://lmarinho0312-tbbproject.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#A11818] hover:bg-[#801313] transition-colors rounded-xl font-bold text-center tracking-wide uppercase flex items-center justify-center gap-2 group shadow-lg shadow-[#A11818]/20"
            >
              Navegar Pelo Novo Site 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* CTA 2: Contato WhatsApp */}
            <a 
              href="https://wa.me/5521990378175?text=Olá!%20Vi%20a%20proposta%20do%20novo%20site%20da%20TBB%20e%20gostaria%20de%20conversar."
              className="w-full sm:w-auto px-8 py-4 bg-[#1C1610] hover:bg-[#2C241B] transition-colors border border-[#FAF9F6]/10 rounded-xl font-bold text-[#FFA000] text-center tracking-wide uppercase flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* Footer minimalista */}
      <footer className="relative z-10 text-center py-12 text-sm text-[#FAF9F6]/40 border-t border-[#FAF9F6]/10 mt-20">
        © 2026 Grupo TBB · Apresentação Comercial Exclusiva
      </footer>
    </div>
  );
}
