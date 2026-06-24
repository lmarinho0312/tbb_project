import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, X, MessageSquare, RotateCcw, Send, ShoppingCart, MessageCircle, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text?: string;
  isTyping?: boolean;
  isRecommendation?: boolean;
  recommendationData?: {
    title: string;
    price: string;
    description: string;
    whatsappUrl: string;
  };
}

export default function ChatBot({ isOpen, onClose, onOpen }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<string>('welcome');
  const [typing, setTyping] = useState<boolean>(false);
  
  // Respostas salvas do usuário para calcular a sugestão final
  const [selections, setSelections] = useState({
    peopleCount: 1,
    flow: '', // 'quiz' ou 'ingrediente'
    preference: '', // 'classico', 'defumado', 'almoco'
    hunger: '', // 'leve', 'media', 'monstro'
    ingredient: '', // 'bacon', 'queijo_coalho', 'cebola_picles', 'fresco'
    sides: '', // 'nenhum', 'batata', 'bebida', 'completo'
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll para a última mensagem
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  // Mensagem inicial de boas-vindas ao abrir o chat pela primeira vez
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      triggerWelcome();
    }
  }, [isOpen]);

  const triggerWelcome = () => {
    setMessages([]);
    setSelections({
      peopleCount: 1,
      flow: '',
      preference: '',
      hunger: '',
      ingredient: '',
      sides: '',
    });
    setStep('welcome');
    
    simulateBotMessage(
      "Olá! Sou a Lu, assistente virtual da TBB. 🔥 Se bater aquela indecisão sobre o que pedir hoje, estou aqui para te ajudar a escolher o burger ou combo ideal para matar sua fome! Como você prefere começar?"
    );
  };

  const simulateBotMessage = (text: string, callback?: () => void) => {
    setTyping(true);
    const typingDuration = Math.min(1200, text.length * 15); // proporcional ao tamanho do texto

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: 'bot',
          text,
        },
      ]);
      if (callback) callback();
    }, typingDuration);
  };

  const handleUserChoice = (label: string, value: any, nextStep: string, updateKey?: string) => {
    // 1. Adicionar mensagem do usuário no chat
    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        sender: 'user',
        text: label,
      },
    ]);

    // 2. Atualizar estado de seleções
    let newSelections = { ...selections };
    if (updateKey) {
      newSelections = { ...selections, [updateKey]: value };
      setSelections(newSelections);
    }

    setStep(nextStep);

    // 3. Simular resposta da assistente dependendo do próximo passo
    setTimeout(() => {
      generateBotResponse(nextStep, newSelections);
    }, 400);
  };

  const generateBotResponse = (nextStep: string, currentSelections: typeof selections) => {
    if (nextStep === 'flow_selection') {
      simulateBotMessage("Legal! Quer fazer um quiz rápido de fome/pessoas ou prefere filtrar direto pelos ingredientes que você mais ama?");
    }
    
    else if (nextStep === 'people') {
      simulateBotMessage("Show de bola! Quantas pessoas vão comer hoje por aí?");
    }

    else if (nextStep === 'group_choice') {
      simulateBotMessage(`Entendi, o pedido é para ${currentSelections.peopleCount} pessoas. Vocês preferem um Combo econômico completo (Burgers + Batata + Bebidas) ou querem escolher hambúrgueres individuais?`);
    }
    
    else if (nextStep === 'preference') {
      simulateBotMessage("E sobre o sabor, qual o seu estilo favorito hoje? 🍔");
    }
    
    else if (nextStep === 'hunger') {
      simulateBotMessage("Qual o tamanho da fome nesse exato momento?");
    }
    
    else if (nextStep === 'ingredients') {
      simulateBotMessage("Excelente escolha! Qual ingrediente principal você faz questão que tenha no seu hambúrguer?");
    }
    
    else if (nextStep === 'sides') {
      simulateBotMessage("Perfeito. Quer adicionar algum acompanhamento ou uma bebida bem gelada para completar?");
    }
    
    else if (nextStep === 'recommendation') {
      calculateRecommendation(currentSelections);
    }
  };

  const calculateRecommendation = (currentSelections: typeof selections) => {
    setTyping(true);
    
    // Simulação de cálculo da brasa
    setTimeout(() => {
      setTyping(false);

      let title = "O Preferido (X-Tudo)";
      let price = "R$ 40,90";
      let description = "Pão brioche, 1 blend 120g, queijo prato, bacon, cheddar, ovo, alface americana, tomate, maionese temperada, ketchup e barbecue.";
      
      // Lógica de determinação do produto baseada nas escolhas
      if (currentSelections.flow === 'ingrediente') {
        switch (currentSelections.ingredient) {
          case 'queijo_coalho':
            title = "Smash Queijudo";
            price = "R$ 29,90";
            description = "Pão, smash 100g, queijo prato, creme de cheddar e maionese Hellmann's.";
            break;
          case 'bacon':
            title = "Super Crispy";
            price = "R$ 41,90";
            description = "Pão, Blend 120g, queijo prato, maionese branca, Cream cheese, Bacon e cebola crispy.";
            break;
          case 'cebola_picles':
            title = "Smash Onion";
            price = "R$ 25,90";
            description = "Pão brioche, smash 100g prensado na cebola, creme de cheddar e maionese temperada.";
            break;
          case 'fresco':
            title = "Salad Burger";
            price = "R$ 25,90";
            description = "Pão brioche, 1 blend 120g, queijo prato, cebola roxa, alface, tomate e maionese temperada.";
            break;
        }
      } else {
        // Fluxo de Quiz (Pessoas/Fome/Preferencia)
        if (currentSelections.peopleCount === 2) {
          if (currentSelections.preference === 'combo') {
            title = "Combo Supremo Bacon + Combo Salad";
            price = "R$ 108,80";
            description = "Sugestão Casal: 1x Combo Supremo Bacon (R$ 66,90) + 1x Combo Salad (R$ 41,90). O par perfeito de TBB!";
          } else {
            title = "2x O Preferido (X-Tudo)";
            price = "R$ 81,80";
            description = "Sugestão Casal: 2x O Preferido (X-Tudo) preparados na chapa com muito sabor e suculência, para quem valoriza o sabor clássico.";
          }
        } else if (currentSelections.peopleCount >= 3) {
          title = "Combo Supremo Bacon + Combo Double Bacon + Combo Salad";
          price = "R$ 171,70";
          description = "Sugestão Grupo: 1x Combo Supremo Bacon, 1x Combo Double Bacon e 1x Combo Salad. Acompanha batatas e refrigerantes.";
        } else {
          // Individual
          if (currentSelections.preference === 'almoco') {
            title = "Estrogonofe do Chef Mateus";
            price = "R$ 38,90";
            description = "Arroz soltinho, estrogonofe cremoso de carne bovina preparado com o tempero especial da casa e batatas fritas super crocantes.";
          } else if (currentSelections.preference === 'defumado') {
            if (currentSelections.hunger === 'monstro') {
              title = "Combo Supremo Bacon";
              price = "R$ 66,90";
              description = "1 Supremo Bacon (3 blends de 120g, triplo queijo, triplo bacon no pão brioche com parmesão) + 1 Batata Frita P + 1 Coca-Cola 200ml.";
            } else if (currentSelections.hunger === 'media') {
              title = "Costela Grill 2.0";
              price = "R$ 48,90";
              description = "Blend 150g bovino feito na brasa, queijo prato derretido, costela bovina premium desfiada e defumada, barbecue e cebola roxa no pão brioche.";
            } else {
              title = "Smash Bacon";
              price = "R$ 37,90";
              description = "Pão brioche, smash 100g, creme de cheddar, bacon e maionese temperada.";
            }
          } else {
            // Clássico
            if (currentSelections.hunger === 'leve') {
              title = "Salad Burger";
              price = "R$ 25,90";
              description = "Pão brioche, 1 blend 120g, queijo prato, cebola roxa, alface, tomate e maionese temperada.";
            } else if (currentSelections.hunger === 'media') {
              title = "O Preferido (X-Tudo)";
              price = "R$ 40,90";
              description = "Pão brioche, 1 blend 120g, queijo prato, bacon, cheddar, ovo, alface americana, tomate, maionese temperada, ketchup e barbecue.";
            } else {
              title = "Combo O Preferido";
              price = "R$ 55,90";
              description = "1 O Preferido (X-Tudo) + 1 Batata Frita P + 1 Coca-Cola 200ml.";
            }
          }
        }
      }

      // Somar acompanhamentos se não for combo fechado e o usuário selecionou
      let itemsListText = `- 1x ${title} (${price})`;
      let finalPriceNum = parseFloat(price.replace('R$', '').replace(',', '.').trim());
      
      if (!title.includes('Combo') && !title.includes('+')) {
        if (currentSelections.sides === 'batata' || currentSelections.sides === 'completo') {
          itemsListText += "\n- 1x Batata M Simples (R$ 30,00)";
          finalPriceNum += 30.00;
        }
        if (currentSelections.sides === 'bebida' || currentSelections.sides === 'completo') {
          itemsListText += "\n- 1x Coca-Cola 350ml (R$ 8,00)";
          finalPriceNum += 8.00;
        }
      }

      const formattedFinalPrice = `R$ ${finalPriceNum.toFixed(2).replace('.', ',')}`;

      // Montar texto da mensagem do WhatsApp
      const whatsappText = `Olá, TBB! Usei a assistente Lu no site e gostaria de fazer este pedido:

🔥 *DETALHES DO PEDIDO:*
${itemsListText}

👥 *Pessoas:* ${currentSelections.peopleCount} pessoa(s)
💪 *Preferencia:* ${currentSelections.flow === 'ingrediente' ? 'Filtro por ingrediente' : currentSelections.preference === 'defumado' ? 'Defumados' : 'Clássicos/Pratos'}
💰 *Total Estimado:* ${formattedFinalPrice}

Gostaria de finalizar meu pedido e combinar a entrega.`;

      const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

      // Adicionar mensagem especial de recomendação
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: 'bot',
          text: "E aqui está minha sugestão perfeita para você! 👇",
        },
        {
          id: Math.random().toString(),
          sender: 'bot',
          isRecommendation: true,
          recommendationData: {
            title: title + (currentSelections.sides === 'completo' && !title.includes('Combo') && !title.includes('+') ? ' (com Fritas + Bebida)' : ''),
            price: formattedFinalPrice,
            description,
            whatsappUrl,
          }
        }
      ]);
    }, 1000);
  };

  const getQuickReplies = () => {
    switch (step) {
      case 'welcome':
        return [
          { label: 'Fazer o Quiz da Fome 🙋‍♂️', value: 'quiz', nextStep: 'people', key: 'flow' },
          { label: 'Filtrar por Ingrediente 🥓', value: 'ingrediente', nextStep: 'ingredients', key: 'flow' },
        ];
      case 'people':
        return [
          { label: 'Só para mim 🙋‍♂️', value: 1, nextStep: 'preference', key: 'peopleCount' },
          { label: 'Para nós 2 (Casal) 👩‍❤️‍👨', value: 2, nextStep: 'group_choice', key: 'peopleCount' },
          { label: 'Para a Galera (3+) 🧑‍🤝‍🧑', value: 3, nextStep: 'preference', key: 'peopleCount' },
        ];
      case 'group_choice':
        return [
          { label: 'Quero indicação de Combo 📦', value: 'combo', nextStep: 'recommendation', key: 'preference' },
          { label: 'Hambúrgueres Individuais 🍔', value: 'individual', nextStep: 'preference', key: 'preference' },
        ];
      case 'preference':
        return [
          { label: 'Clássico Tradicional 🍔', value: 'classico', nextStep: 'hunger', key: 'preference' },
          { label: 'Defumado Intenso (Bacon/Cheddar) 🥓', value: 'defumado', nextStep: 'hunger', key: 'preference' },
          { label: 'Almoço / Prato Executivo 🍛', value: 'almoco', nextStep: 'recommendation', key: 'preference' },
        ];
      case 'hunger':
        return [
          { label: 'Fome Leve (1 burger simples) 🍔', value: 'leve', nextStep: 'sides', key: 'hunger' },
          { label: 'Fome Média (burger caprichado) 🥓🍔', value: 'media', nextStep: 'sides', key: 'hunger' },
          { label: 'Fome de Leão (burger monstro/combo) 🦁', value: 'monstro', nextStep: 'sides', key: 'hunger' },
        ];
      case 'ingredients':
        return [
          { label: 'Bacon Grelhado 🥓', value: 'bacon', nextStep: 'hunger', key: 'ingredient' },
          { label: 'Queijo Coalho 🧀', value: 'queijo_coalho', nextStep: 'sides', key: 'ingredient' },
          { label: 'Cebola Caramelizada/Picles 🧅', value: 'cebola_picles', nextStep: 'sides', key: 'ingredient' },
          { label: 'Rúcula e Tomate Seco 🌿', value: 'fresco', nextStep: 'sides', key: 'ingredient' },
        ];
      case 'sides':
        return [
          { label: 'Só o hambúrguer mesmo 🍔', value: 'nenhum', nextStep: 'recommendation', key: 'sides' },
          { label: 'Com Batata Rústica 🍟', value: 'batata', nextStep: 'recommendation', key: 'sides' },
          { label: 'Com Bebida Gelada 🥤', value: 'bebida', nextStep: 'recommendation', key: 'sides' },
          { label: 'Combo Completo (Batata + Bebida) 🍟🥤', value: 'completo', nextStep: 'recommendation', key: 'sides' },
        ];
      default:
        return [];
    }
  };

  return (
    <>
      {/* Botão flutuante (Launcher) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            onClick={onOpen}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-3.5 bg-tbbRed text-rustico pl-4 pr-5 py-3.5 rounded-full shadow-[0_8px_30px_rgba(161,24,24,0.4)] border border-white/10 hover:bg-tbbRedHover transition-all active:scale-95 group focus:outline-none select-none"
            style={{ touchAction: 'manipulation' }}
          >
            {/* Indicador de Notificação Pulsante */}
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brasa opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-brasa flex items-center justify-center font-cinzel font-bold text-[8px] text-carvao">1</span>
            </span>

            {/* Avatar da Lu / Ícone */}
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-carvao border border-white/20 shrink-0">
              <span className="absolute inset-0 flex items-center justify-center font-cinzel text-tbbRed font-black text-sm">Lu</span>
            </div>

            <div className="text-left leading-tight">
              <span className="font-cinzel text-[9px] text-rustico/60 block uppercase tracking-wider font-bold">Assistente Virtual</span>
              <p className="font-sans-clean font-bold text-xs text-rustico group-hover:text-brasa transition-colors">Dúvidas? Fale com a Lu</p>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Janela de Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.92 }}
            className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 w-auto sm:w-[380px] h-[540px] z-50 bg-[#120E0A] border border-white/[0.08] rounded-rustico-lg flex flex-col shadow-[0_16px_50px_rgba(0,0,0,0.85)] overflow-hidden"
          >
            {/* Cabeçalho */}
            <div className="bg-[#1C1610] px-5 py-4 border-b border-white/[0.06] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-carvao border border-tbbRed/40 flex items-center justify-center">
                  <span className="font-cinzel text-tbbRed font-black text-base shadow-glow-tbbRed">Lu</span>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border border-[#1C1610]" />
                </div>
                <div className="text-left">
                  <span className="font-cinzel text-xs font-bold text-rustico block uppercase tracking-wider">Assistente Lu</span>
                  <span className="font-sans-clean text-[9px] text-rustico/45 block">Online • Assando sugestões</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-carvao hover:bg-white/5 border border-white/5 text-rustico/60 hover:text-rustico flex items-center justify-center transition-all active:scale-90"
                aria-label="Fechar chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Corpo do Chat / Mensagens */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin select-text">
              {/* Contexto de Embers */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,61,0,0.15),transparent)]" />
              
              {messages.map((msg) => {
                if (msg.isRecommendation && msg.recommendationData) {
                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white/[0.02] border border-brasa/20 p-5 rounded-rustico-md flex flex-col gap-4 text-left my-2 relative overflow-hidden"
                    >
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-brasa/5 rounded-full blur-xl pointer-events-none" />
                      
                      <div className="flex justify-between items-start gap-2 border-b border-white/[0.05] pb-3">
                        <div>
                          <span className="font-cinzel text-[9px] text-brasa tracking-widest uppercase font-bold block mb-1">🔥 Recomendado</span>
                          <h4 className="font-display text-lg text-rustico uppercase leading-tight font-black">{msg.recommendationData.title}</h4>
                        </div>
                        <span className="font-cinzel text-xl text-brasa font-bold">{msg.recommendationData.price}</span>
                      </div>
                      
                      <p className="font-body text-xs text-rustico/65 leading-relaxed">
                        {msg.recommendationData.description}
                      </p>

                      <div className="flex flex-col gap-2 pt-2">
                        <a
                          href={msg.recommendationData.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 bg-green-600 hover:bg-green-700 text-rustico font-cinzel font-bold text-xs uppercase tracking-wider rounded transition-all shadow-[0_4px_15px_rgba(22,163,74,0.3)] hover:scale-[1.01] active:scale-95"
                        >
                          <MessageCircle className="w-4.5 h-4.5 fill-rustico" />
                          Aceitar e Pedir no WhatsApp
                        </a>
                        <button
                          onClick={triggerWelcome}
                          className="w-full py-2 bg-transparent hover:bg-white/[0.03] border border-white/10 hover:border-white/20 text-rustico/55 hover:text-rustico font-cinzel font-bold text-[9px] uppercase tracking-wider rounded transition-all flex items-center justify-center gap-1.5"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          Fazer outro Quiz
                        </button>
                      </div>
                    </motion.div>
                  );
                }

                const isBot = msg.sender === 'bot';
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-rustico-md text-xs leading-relaxed ${
                        isBot
                          ? 'bg-[#1C1610] text-rustico border border-white/[0.04]'
                          : 'bg-tbbRed text-rustico shadow-md'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                );
              })}

              {/* Balão de digitando */}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-[#1C1610] text-rustico border border-white/[0.04] px-4 py-2.5 rounded-rustico-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rustico/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-rustico/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-rustico/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              
              <div ref={chatEndRef} />
            </div>

            {/* Área de Respostas Rápidas / Input */}
            <div className="bg-carvao p-4 border-t border-white/[0.06] shrink-0">
              <div className="flex flex-col gap-2 max-h-[140px] overflow-y-auto pr-1">
                {getQuickReplies().map((reply, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleUserChoice(reply.label, reply.value, reply.nextStep, reply.key)}
                    className="w-full text-left px-3.5 py-2.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 text-rustico/80 hover:text-rustico rounded-rustico-md font-sans-clean text-xs font-semibold transition-all active:scale-[0.99]"
                  >
                    {reply.label}
                  </motion.button>
                ))}
                
                {getQuickReplies().length === 0 && !typing && (
                  <div className="text-center py-2 flex items-center justify-center gap-1.5 text-rustico/35 font-cinzel text-[10px] uppercase tracking-wider">
                    <AlertCircle className="w-3.5 h-3.5 text-rustico/35" />
                    Quiz Finalizado
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
