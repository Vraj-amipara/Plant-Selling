export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  benefits: string[];
  careLevel: 'Easy' | 'Medium' | 'Hard';
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Snake Plant (Sansevieria)',
    price: 35,
    category: 'Indoor Plants',
    image: 'https://media.istockphoto.com/id/1439949379/photo/plant-indoor-in-front-of-window-taking-light.jpg?s=612x612&w=0&k=20&c=m6lvg-LYqMaASZRZZObgV7J0CaOyULGFVbXksFcRYow=',
    description: 'A hardy indoor plant that thrives on neglect. Perfect for beginners.',
    benefits: ['Air Purifying', 'Low Maintenance'],
    careLevel: 'Easy',
  },
  {
    id: '2',
    name: 'ZZ Plant',
    price: 45,
    category: 'Indoor Plants',
    image: 'https://kyari.co/cdn/shop/files/1_c2592c28-67c7-4eeb-ae96-8d693911e234.jpg?v=1767784156&width=480',
    description: 'Known for its wide, dark green leaves. Tolerates low light and infrequent watering.',
    benefits: ['Low Maintenance', 'Drought Tolerant'],
    careLevel: 'Easy',
  },
  {
    id: '3',
    name: 'Golden Pothos',
    price: 25,
    category: 'Hanging Plants',
    image: 'https://budsnblush.com/cdn/shop/files/brasil_pothos_bnb.png?v=1758137664',
    description: 'A fast-growing trailing plant with heart-shaped leaves.',
    benefits: ['Air Purifying', 'Fast Growing'],
    careLevel: 'Easy',
  },
  {
    id: '4',
    name: 'Monstera Deliciosa',
    price: 65,
    category: 'Indoor Plants',
    image: 'https://masonhome.in/cdn/shop/files/1_d2c13962-a6a5-4515-a3be-8294a8b90fd3.png?v=1743596584',
    description: 'Famous for its natural leaf holes. A stunning statement piece for any room.',
    benefits: ['Statement Plant', 'Air Purifying'],
    careLevel: 'Medium',
  },
  {
    id: '5',
    name: 'Fiddle Leaf Fig',
    price: 85,
    category: 'Indoor Plants',
    image: 'https://masonhome.in/cdn/shop/files/150_27bbfbf1-9ba1-49e6-be93-0d73ed808e6c.png?v=1741414295',
    description: 'A popular houseplant with large, heavily veined, violin-shaped leaves.',
    benefits: ['Statement Plant'],
    careLevel: 'Hard',
  },
  {
    id: '6',
    name: 'Aloe Vera',
    price: 20,
    category: 'Succulents',
    image: 'https://cdn.shopify.com/s/files/1/0781/0514/9772/files/Blog-AloeVera-990px_0004_AdobeStock_284886074.jpg?v=1699628817',
    description: 'A succulent plant species known for its medicinal properties.',
    benefits: ['Medicinal', 'Low Maintenance'],
    careLevel: 'Easy',
  },
  {
    id: '7',
    name: 'String of Pearls',
    price: 30,
    category: 'Hanging Plants',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/SK/JV/UZ/99837791/string-of-pearl-pic-500x500.jpg',
    description: 'A unique trailing succulent with spherical leaves.',
    benefits: ['Unique Look', 'Drought Tolerant'],
    careLevel: 'Medium',
  },
  {
    id: '8',
    name: 'Terracotta Pot',
    price: 15,
    category: 'Pots & Planters',
    image: 'https://m.media-amazon.com/images/I/8193Ym1JOqL.jpg',
    description: 'Classic breathable terracotta pot, perfect for succulents and cacti.',
    benefits: ['Breathable', 'Classic Design'],
    careLevel: 'Easy',
  },
  {
    id: '9',
    name: 'Lavender Plant',
    price: 28,
    category: 'Outdoor Plants',
    image: 'https://m.media-amazon.com/images/I/71tWtbKXggL.jpg',
    description: 'A fragrant, beautiful outdoor plant that attracts pollinators.',
    benefits: ['Fragrant', 'Attracts Bees'],
    careLevel: 'Medium',
  },
  {
    id: '10',
    name: 'Majesty Palm',
    price: 55,
    category: 'Outdoor Plants',
    image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?q=80&w=800&auto=format&fit=crop',
    description: 'A classic tropical palm that thrives outdoors in warm weather.',
    benefits: ['Tropical Vibe', 'Fast Growing'],
    careLevel: 'Medium',
  },
  {
    id: '11',
    name: 'Organic Liquid Fertilizer',
    price: 18,
    category: 'Plant Care',
    image: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=800&auto=format&fit=crop',
    description: 'All-natural liquid plant food to keep your plants healthy and growing.',
    benefits: ['Organic', 'Promotes Growth'],
    careLevel: 'Easy',
  },
  {
    id: '12',
    name: 'Neem Oil Spray',
    price: 14,
    category: 'Plant Care',
    image: 'https://theelemstore.com/cdn/shop/files/REPL_HerbalNeemOilSprayNaturalInsectRepellentforPlants-500ml.c.webp?v=1712564599',
    description: 'Natural pest control for your indoor and outdoor plants.',
    benefits: ['Pest Control', 'Natural'],
    careLevel: 'Easy',
  }
];

export const categories = [
  'All',
  'Indoor Plants',
  'Outdoor Plants',
  'Succulents',
  'Hanging Plants',
  'Pots & Planters',
  'Plant Care'
];
