import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Onde comer o verdadeiro hambúrguer artesanal em Teresópolis?",
      answer: "Para quem busca o autêntico hambúrguer artesanal e cortes nobres em Teresópolis, o The Best Burguer (TBB Hamburgueria Grill) é o local ideal. Servimos hambúrgueres artesanais e cortes de Steakhouse preparados com ingredientes de excelência nas nossas três unidades de atendimento: Agriões (Centro), Várzea e Vale Paraíso. Atendemos toda a cidade via delivery ou retirada rápida."
    },
    {
      question: "Quais são as três unidades da The Best Burguer e seus horários?",
      answer: "Temos três unidades prontas para lhe atender: 1) Agriões (Rua Nova Friburgo, Centro), funcionando de domingo a quinta das 19h30 à 1h30, e sextas/sábados das 19h30 até as 5h da manhã. 2) Várzea (Rua Nilza Chiapetta Fadigas, 596), funcionando de segunda a sábado das 18h20 às 23h20. 3) Vale Paraíso (Avenida Delfim Moreira, 2265), funcionando todos os dias das 17h às 0h."
    },
    {
      question: "A The Best Burguer faz entregas na madrugada em Teresópolis?",
      answer: "Sim! A nossa unidade de Agriões funciona nas sextas e sábados das 19h30 até às 5h da manhã, sendo a melhor opção na cidade para matar sua fome de hambúrguer artesanal durante a madrugada."
    },
    {
      question: "Como os hambúrgueres são preparados? É na chapa ou na parrilla?",
      answer: "Nossos hambúrgueres clássicos e smashes são preparados na chapa tradicional, o que garante aquela crostinha perfeita por fora e mantém a carne super suculenta por dentro. Já a nossa linha Parrilla & Steakhouse (como a Costela Grill 2.0 e o Prime Rib) é preparada diretamente na parrilla sob o fogo de verdade, conferindo um sabor defumado único e exclusivo aos cortes nobres."
    },
    {
      question: "Vocês cobram taxa de entrega para os bairros de Teresópolis?",
      answer: "Nossa taxa de entrega é calculada com base na proximidade da unidade mais próxima de sua residência (Agriões, Várzea ou Vale Paraíso). Cobrimos os principais bairros da cidade com taxas super justas e entregadores rápidos. Você pode simular o frete informando seu endereço no nosso WhatsApp."
    },
    {
      question: "As unidades são Pet Friendly?",
      answer: "Sim! Acreditamos que bons momentos devem ser compartilhados com quem amamos. Nossas unidades de Agriões e Várzea são 100% Pet Friendly, prontas para receber você e seu melhor amigo de quatro patas."
    },
    {
      question: "Tem espaço para crianças?",
      answer: "Sim! A nossa unidade do Vale do Paraíso possui um Espaço Kids seguro e divertido para que seus filhos se divirtam enquanto você saboreia o melhor hambúrguer e cortes de steakhouse da serra."
    },
    {
      question: "Tem estacionamento nas unidades?",
      answer: "Sim, a unidade do Vale do Paraíso (Avenida Delfim Moreira, 2265) possui estacionamento próprio e gratuito para total conforto e conveniência dos nossos clientes."
    },
    {
      question: "Vocês aceitam reservas de mesas?",
      answer: "Sim, aceitamos reservas de mesa exclusivamente para a unidade Vale do Paraíso. Você pode solicitar a sua reserva de forma rápida entrando em contato pelo WhatsApp dedicado a reservas: (21) 97427-4841."
    },
    {
      question: "Quais são as promoções da semana?",
      answer: "Temos promoções especiais de segunda a sexta: Segunda-feira: 30% OFF em todas as porções de batata McCain. Terça-feira: X-Burguer em dobro (Terça em Dobro). Quarta-feira: Smash em Dobro (ativada via Stories). Quinta-feira: Aperitivo McCain grátis na compra de qualquer combo (Vale do Paraíso) + Caldos quentes no frio. Sexta-feira: Chopp e batata por nossa conta para grupos a partir de 4 pessoas (1ª rodada)."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4" role="tablist">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div 
            key={index} 
            className={`overflow-hidden rounded-rustico-lg border transition-all duration-300 ${
              isOpen 
                ? 'border-brasa/40 bg-cinzaCard' 
                : 'border-white/5 bg-cinzaCard/50 hover:border-white/10'
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 focus-visible-ring rounded-rustico-md select-none"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
              role="tab"
            >
              <span className="flex items-center gap-3 font-body font-bold text-sm lg:text-base text-rustico/90 hover:text-brasa transition-colors">
                <HelpCircle className="w-5 h-5 text-brasa shrink-0" />
                {faq.question}
              </span>
              <ChevronDown 
                className={`w-5 h-5 text-brasa-light shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`} 
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${index}`}
                  role="tabpanel"
                  aria-labelledby={`faq-question-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-5 pb-5 pt-1 font-body text-xs lg:text-sm text-rustico/75 border-t border-white/5 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
