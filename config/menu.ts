export interface MenuItemType {
  title: string;
  price: string;
  badge?: string;
  imageUrl: string;
  altText: string;
  description: string;
}

export const menuData = {
  classicos: [
    {
      title: "Salad Burger",
      price: "R$ 25,90",
      imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Pão brioche, 1 blend 120g, queijo prato, cebola roxa, alface, tomate e maionese temperada.",
      description: "Pão brioche, 1 blend 120g, queijo prato, cebola roxa, alface, tomate e maionese temperada."
    },
    {
      title: "O Preferido (X-Tudo)",
      price: "R$ 40,90",
      badge: "Campeão de Vendas",
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Pão brioche, 1 blend 120g, queijo prato, bacon, cheddar, ovo, alface americana, tomate, maionese temperada, ketchup e barbecue.",
      description: "Pão brioche, 1 blend 120g, queijo prato, bacon, cheddar, ovo, alface americana, tomate, maionese temperada, ketchup e barbecue."
    },
    {
      title: "X Egg",
      price: "R$ 37,90",
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Pão brioche, 1 blend 120g, queijo prato, ovo, cheddar, alface americana, tomate, maionese temperada, ketchup e barbecue.",
      description: "Pão brioche, 1 blend 120g, queijo prato, ovo, cheddar, alface americana, tomate, maionese temperada, ketchup e barbecue."
    },
    {
      title: "X Bacon",
      price: "R$ 37,90",
      imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Pão brioche, 1 blend 120g, queijo prato, bacon, cheddar, alface americana, tomate, maionese temperada, ketchup e barbecue.",
      description: "Pão brioche, 1 blend 120g, queijo prato, bacon, cheddar, alface americana, tomate, maionese temperada, ketchup e barbecue."
    }
  ] as MenuItemType[],

  premium: [
    {
      title: "Super Crispy",
      price: "R$ 41,90",
      badge: "Crocante TBB",
      imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Pão, blend 120g, queijo prato, maionese branca, cream cheese, bacon e cebola crispy.",
      description: "Pão, blend 120g, queijo prato, maionese branca, cream cheese, bacon e cebola crispy."
    },
    {
      title: "Double Bacon",
      price: "R$ 47,90",
      badge: "Creamy & Smoky",
      imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Pão brioche com parmesão, 2 blends 120g, dobro cream cheese, dobro bacon, cebola roxa, maionese e barbecue.",
      description: "Pão brioche com parmesão, 2 blends 120g, dobro cream cheese, dobro bacon, cebola roxa, maionese e barbecue."
    },
    {
      title: "Double Best",
      price: "R$ 47,90",
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Pão brioche com parmesão, 2 blends 120g, dobro cream cheese, dobro calabresa, cebola roxa, maionese e barbecue.",
      description: "Pão brioche com parmesão, 2 blends 120g, dobro cream cheese, dobro calabresa, cebola roxa, maionese e barbecue."
    },
    {
      title: "Double Cheddar",
      price: "R$ 47,90",
      imageUrl: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Pão brioche com parmesão, 2 blends 120g, dobro de cheddar, dobro de bacon, cebola roxa, maionese temperada e barbecue.",
      description: "Pão brioche com parmesão, 2 blends 120g, dobro de cheddar, dobro de bacon, cebola roxa, maionese temperada e barbecue."
    },
    {
      title: "Supremo Bacon",
      price: "R$ 51,90",
      badge: "Para Grandes Fomes",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "Pão brioche com parmesão, 3 blends 120g, triplo queijo, triplo bacon, tripla cebola roxa, maionese e barbecue.",
      description: "Pão brioche com parmesão, 3 blends 120g, triplo queijo, triplo bacon, tripla cebola roxa, maionese e barbecue."
    }
  ] as MenuItemType[],

  smashes: [
    {
      title: "X Saladinha Smash",
      price: "R$ 27,90",
      imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Pão, smash 100g, queijo prato ou cheddar, tomate, alface e maionese Hellmann's.",
      description: "Pão, smash 100g, queijo prato ou cheddar (especificar), tomate, alface e maionese Hellmann's."
    },
    {
      title: "Smash Onion",
      price: "R$ 25,90",
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Pão brioche, smash 100g prensado na cebola, creme de cheddar e maionese temperada.",
      description: "Pão brioche, smash 100g prensado na cebola, creme de cheddar e maionese temperada."
    },
    {
      title: "Smash Classic",
      price: "R$ 28,90",
      imageUrl: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Pão brioche, smash 100g, creme de cheddar, cebola caramelizada e maionese temperada.",
      description: "Pão brioche, smash 100g, creme de cheddar, cebola caramelizada e maionese temperada."
    },
    {
      title: "Smash Bacon",
      price: "R$ 37,90",
      imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Pão brioche, smash 100g, creme de cheddar, bacon e maionese temperada.",
      description: "Pão brioche, smash 100g, creme de cheddar, bacon e maionese temperada."
    },
    {
      title: "Smash Fininho",
      price: "R$ 24,90",
      badge: "Ideal para Crianças",
      imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Pão brioche, 1 smash 100g, creme de cheddar ou queijo prato e maionese temperada.",
      description: "Pão brioche, 1 smash 100g, creme de cheddar ou queijo prato e maionese temperada."
    },
    {
      title: "Smash Queijudo",
      price: "R$ 29,90",
      badge: "Favorito do Feed",
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Pão, smash 100g, queijo prato, creme de cheddar e maionese Hellmann's.",
      description: "Pão, smash 100g, queijo prato, creme de cheddar e maionese Hellmann's."
    }
  ] as MenuItemType[],

  parrilla: [
    {
      title: "Costela Grill 2.0",
      price: "R$ 48,90",
      badge: "Estrela da Parrilla",
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Blend 150g, queijo prato derretido, costela bovina desfiada no ponto perfeito com barbecue e cebola roxa.",
      description: "Blend bovino suculento de 150g feito na brasa, queijo prato derretido, costela bovina premium desfiada e defumada, barbecue e cebola roxa no pão brioche."
    },
    {
      title: "Prime Rib Parrilla",
      price: "R$ 69,90",
      badge: "Corte Nobre",
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Prime rib assado na brasa com tempero da casa.",
      description: "Corte nobre bovino preparado diretamente na parrilla com o legítimo sabor defumado e suculência extrema. Acompanha vinagrete da casa e chimichurri."
    },
    {
      title: "Pão com Linguiça",
      price: "R$ 28,90",
      imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Pão baguete com linguiça defumada e queijo prato.",
      description: "Pão baguete crocante recheado com linguiça suína defumada na brasa, 4 fatias de queijo prato derretido e maionese da casa. Acompanha croquetes de cortesia."
    },
    {
      title: "Contra Filé no Pão",
      price: "R$ 30,00",
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Baguete com contra filé grelhado na brasa e queijo.",
      description: "Pão baguete crocante, bife de contra filé na brasa, 4 fatias de queijo prato derretido, cebola roxa, alface americana, tomate e barbecue."
    }
  ] as MenuItemType[],

  combos: [
    {
      title: "Combo Supremo Bacon",
      price: "R$ 66,90",
      badge: "Campeão de Fome",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "Supremo Bacon com batata P e Coca 200ml.",
      description: "Supremo Bacon + Batata Frita P + Coca-Cola 200ml."
    },
    {
      title: "Combo Double Bacon",
      price: "R$ 62,90",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "Double Bacon com batata P e Coca 200ml.",
      description: "Double Bacon + Batata Frita P + Coca-Cola 200ml."
    },
    {
      title: "Combo Double Cheddar",
      price: "R$ 62,90",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "Double Cheddar com batata P e Coca 200ml.",
      description: "Double Cheddar + Batata Frita P + Coca-Cola 200ml."
    },
    {
      title: "Combo Super Crispy",
      price: "R$ 60,00",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "Super Crispy com batata P e Coca 200ml.",
      description: "Super Crispy + Batata Frita P + Coca-Cola 200ml."
    },
    {
      title: "Combo O Preferido",
      price: "R$ 55,90",
      badge: "Mais Procurado",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "O Preferido com batata P e Coca 200ml.",
      description: "O Preferido (X-Tudo) + Batata Frita P + Coca-Cola 200ml."
    },
    {
      title: "Combo X Bacon",
      price: "R$ 52,90",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "X Bacon com batata P e Coca 200ml.",
      description: "X Bacon + Batata Frita P + Coca-Cola 200ml."
    },
    {
      title: "Combo X Egg",
      price: "R$ 52,90",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "X Egg com batata P e Coca 200ml.",
      description: "X Egg + Batata Frita P + Coca-Cola 200ml."
    },
    {
      title: "Combo Salad",
      price: "R$ 41,90",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "Salad Burger com batata P e Coca 200ml.",
      description: "Salad Burger + Batata Frita P + Coca-Cola 200ml."
    },
    {
      title: "Combo Double Best",
      price: "R$ 62,90",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "Double Best com batata P e Coca 200ml.",
      description: "Double Best + Batata Frita P + Coca-Cola 200ml."
    },
    {
      title: "Combo Smash Bacon",
      price: "R$ 49,90",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "Smash Bacon com batata P e Coca 200ml.",
      description: "Smash Bacon + Batata Frita P + Coca-Cola 200ml."
    },
    {
      title: "Combo Smash Classic",
      price: "R$ 44,90",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "Smash Classic com batata P e Coca 200ml.",
      description: "Smash Classic + Batata Frita P + Coca-Cola 200ml."
    },
    {
      title: "Combo Queijudo",
      price: "R$ 43,90",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "Smash Queijudo com batata P e Coca 200ml.",
      description: "Smash Queijudo + Batata Frita P + Coca-Cola 200ml."
    },
    {
      title: "Combo Smash Onion",
      price: "R$ 38,90",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "Smash Onion com batata P e Coca 200ml.",
      description: "Smash Onion + Batata Frita P + Coca-Cola 200ml."
    },
    {
      title: "Combo Smash Fininho",
      price: "R$ 37,90",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "Smash Fininho com batata P e Coca 200ml.",
      description: "Smash Fininho + Batata Frita P + Coca-Cola 200ml."
    },
    {
      title: "Combo Contra Filé no Pão",
      price: "R$ 45,00",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "Contra Filé no Pão com batata P e Coca 200ml.",
      description: "Contra Filé no Pão + Batata Frita P + Coca-Cola 200ml."
    },
    {
      title: "Combo Pão com Linguiça",
      price: "R$ 44,90",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80&fm=webp",
      altText: "Pão com Linguiça com batata P e Coca 200ml.",
      description: "Pão com Linguiça + Batata Frita P + Coca-Cola 200ml."
    }
  ] as MenuItemType[],

  acompanhamentos: [
    {
      title: "Batata Frita Simples P",
      price: "R$ 15,00",
      imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Porção pequena de batata frita.",
      description: "Porção individual de batatas fritas super crocantes."
    },
    {
      title: "Batata Frita Simples M",
      price: "R$ 30,00",
      imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Porção média de batata frita.",
      description: "Batata frita simples, indicada para 1 pessoa."
    },
    {
      title: "Batata Frita Simples G",
      price: "R$ 35,00",
      imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Porção grande de batata frita.",
      description: "Batata frita simples, indicada para 2 a 3 pessoas."
    },
    {
      title: "Batata M Bacon e Cheddar",
      price: "R$ 35,00",
      badge: "Mais Pedida",
      imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Batata frita com cheddar e bacon.",
      description: "Batata frita com creme de cheddar e bacon crocante (indicada para 1 pessoa)."
    },
    {
      title: "Batata G Bacon e Cheddar",
      price: "R$ 45,00",
      imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Porção grande de batata com cheddar e bacon.",
      description: "Batata frita com creme de cheddar e bacon crocante (indicada para 2 a 3 pessoas)."
    },
    {
      title: "Batata M Sobrecoxa e Cream Cheese",
      price: "R$ 44,90",
      badge: "Destaque",
      imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Batata frita com sobrecoxa e cream cheese.",
      description: "Batata com iscas de sobrecoxa desossada feita na brasa e cream cheese (indicada para 1 pessoa)."
    },
    {
      title: "Batata G Sobrecoxa e Cream Cheese",
      price: "R$ 54,90",
      imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Porção grande de batata com sobrecoxa e cream cheese.",
      description: "Batata com iscas de sobrecoxa desossada feita na brasa e cream cheese (indicada para 2 a 3 pessoas)."
    },
    {
      title: "Filé com Fritas M",
      price: "R$ 50,90",
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Batata frita com iscas de contra filé.",
      description: "Batata frita e 2 bifes em iscas de contra filé acebolado (indicada para 1 pessoa)."
    },
    {
      title: "Filé com Fritas G",
      price: "R$ 65,90",
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Porção grande de batata frita com contra filé.",
      description: "Batata frita e 2 bifes em iscas de contra filé acebolado (indicada para 2 a 3 pessoas)."
    }
  ] as MenuItemType[],

  bebidas: [
    {
      title: "Coca-Cola 200ml",
      price: "R$ 4,50",
      imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Coca-Cola 200ml",
      description: "Mini garrafa pet/lata de Coca-Cola 200ml gelada (disponível também em versão Zero)."
    },
    {
      title: "Coca-Cola 350ml (Lata)",
      price: "R$ 8,00",
      imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Lata de Coca-Cola 350ml",
      description: "Lata de Coca-Cola 350ml gelada (disponível também em versão Zero)."
    },
    {
      title: "Coca-Cola 600ml",
      price: "R$ 9,00",
      imageUrl: "https://images.unsplash.com/photo-1534057308991-b9b3a578f1b1?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Coca-Cola 600ml",
      description: "Garrafa de Coca-Cola 600ml gelada (disponível também em versão Zero)."
    },
    {
      title: "Coca-Cola 1L",
      price: "R$ 13,00",
      imageUrl: "https://images.unsplash.com/photo-1534057308991-b9b3a578f1b1?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Coca-Cola 1L",
      description: "Garrafa de Coca-Cola 1 Litro bem gelada."
    },
    {
      title: "Coca-Cola 1.5L",
      price: "R$ 16,90",
      imageUrl: "https://images.unsplash.com/photo-1534057308991-b9b3a578f1b1?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Coca-Cola 1.5L",
      description: "Garrafa de Coca-Cola 1.5 Litros bem gelada."
    },
    {
      title: "Guaraná Antarctica 200ml",
      price: "R$ 4,50",
      imageUrl: "https://images.unsplash.com/photo-1608885898957-a599fb18de36?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Guaraná 200ml",
      description: "Mini garrafa de Guaraná Antarctica 200ml bem gelado."
    },
    {
      title: "Guaraná Antarctica 1L",
      price: "R$ 10,00",
      imageUrl: "https://images.unsplash.com/photo-1608885898957-a599fb18de36?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Guaraná 1L",
      description: "Garrafa de Guaraná Antarctica 1 Litro bem gelado."
    },
    {
      title: "Fanta Laranja 350ml",
      price: "R$ 8,00",
      imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Fanta Laranja 350ml",
      description: "Lata de Fanta Laranja 350ml gelada."
    },
    {
      title: "Fanta Uva 350ml",
      price: "R$ 8,00",
      imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Fanta Uva 350ml",
      description: "Lata de Fanta Uva 350ml gelada."
    },
    {
      title: "H2OH! Limoneto / Tradicional",
      price: "R$ 8,00",
      imageUrl: "https://images.unsplash.com/photo-1608885898957-a599fb18de36?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "H2OH!",
      description: "Garrafa H2OH! 500ml bem gelada (sabores: Limoneto ou Limão Tradicional)."
    },
    {
      title: "Guaravita 290ml",
      price: "R$ 3,00",
      imageUrl: "https://images.unsplash.com/photo-1608885898957-a599fb18de36?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Guaravita",
      description: "Copo de Guaravita 290ml bem gelado."
    },
    {
      title: "Água sem Gás 500ml",
      price: "R$ 5,00",
      imageUrl: "https://images.unsplash.com/photo-1608885898957-a599fb18de36?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Água mineral",
      description: "Garrafa de água mineral gelada."
    }
  ] as MenuItemType[],

  almoco: [
    {
      title: "Estrogonofe do Chef Mateus",
      price: "R$ 38,90",
      badge: "Almoço Executivo",
      imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Estrogonofe do Chef Mateus",
      description: "Estrogonofe cremoso de carne ou frango, arroz branco soltinho e batata frita super crocante. O preferido das tardes."
    },
    {
      title: "Picadinho Especial TBB",
      price: "R$ 39,90",
      badge: "Sabor da Vó",
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Picadinho Especial",
      description: "Picadinho de carne grelhada na chapa com feijão fresco, farofa temperada e arroz branco."
    },
    {
      title: "Churrasco Misto na Brasa",
      price: "R$ 49,90",
      badge: "Completo",
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80&fm=webp",
      altText: "Churrasco misto com acompanhamentos",
      description: "Churrasco misto com bife de Angus na brasa, linguiça defumada e sobrecoxa. Acompanha arroz, farofa, batata frita, maionese e vinagrete."
    }
  ] as MenuItemType[]
};
