import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Blusa Cropped Floral',
    size: '85/90/95/100',
    colors: ['Rosa', 'Azul', 'Branco', 'Verde'],
    price: 89.90,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Blusa cropped delicada feita em crochê com detalhes florais. Perfeita para dias quentes e looks românticos.',
    category: 'Blusas'
  },
  {
    id: '2',
    name: 'Vestido Longo Boho',
    size: '85/90/95/100/105',
    colors: ['Bege', 'Terracota', 'Mostarda', 'Verde Oliva'],
    price: 149.90,
    image: 'https://images.pexels.com/photos/7679718/pexels-photo-7679718.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Vestido longo em crochê com estilo boho chic. Ideal para eventos especiais e ocasiões românticas.',
    category: 'Vestidos'
  },
  {
    id: '3',
    name: 'Top Halter Verão',
    size: '80/85/90/95',
    colors: ['Coral', 'Amarelo', 'Turquesa', 'Lilás'],
    price: 69.90,
    image: 'https://images.pexels.com/photos/7679719/pexels-photo-7679719.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Top halter em crochê perfeito para o verão. Combina com saias, shorts e calças.',
    category: 'Tops'
  },
  {
    id: '4',
    name: 'Cardigan Oversized',
    size: '90/95/100/105',
    colors: ['Cinza', 'Caramelo', 'Off White', 'Marrom'],
    price: 129.90,
    image: 'https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Cardigan oversized em crochê, ideal para looks despojados e aconchegantes.',
    category: 'Cardigans'
  },
  {
    id: '5',
    name: 'Shorts Cintura Alta',
    size: '70/75/80/85',
    colors: ['Preto', 'Nude', 'Azul Marinho', 'Vermelho'],
    price: 59.90,
    image: 'https://images.pexels.com/photos/7679722/pexels-photo-7679722.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Shorts de cintura alta em crochê, perfeito para combinar com tops e blusas.',
    category: 'Shorts'
  },
  {
    id: '6',
    name: 'Saia Midi Renda',
    size: '75/80/85/90/95',
    colors: ['Preto', 'Branco', 'Nude', 'Azul'],
    price: 94.90,
    image: 'https://images.pexels.com/photos/7679723/pexels-photo-7679723.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Saia midi com detalhes em renda de crochê. Elegante e versátil para diversas ocasiões.',
    category: 'Saias'
  },
  {
    id: '7',
    name: 'Bolsa Bucket Casual',
    size: '25x30',
    colors: ['Natural', 'Preto', 'Caramelo', 'Verde'],
    price: 79.90,
    image: 'https://images.pexels.com/photos/7679724/pexels-photo-7679724.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Bolsa bucket em crochê, prática e estilosa para o dia a dia.',
    category: 'Acessórios'
  },
  {
    id: '8',
    name: 'Bikini Vintage',
    size: '80/85/90/95',
    colors: ['Coral', 'Amarelo', 'Verde', 'Azul'],
    price: 89.90,
    image: 'https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Bikini em crochê com estilo vintage. Perfeito para praia e piscina.',
    category: 'Moda Praia'
  }
];

export const categories = [
  'Todas',
  'Blusas',
  'Vestidos',
  'Tops',
  'Cardigans',
  'Shorts',
  'Saias',
  'Acessórios',
  'Moda Praia'
];

export const allColors = [
  'Rosa', 'Azul', 'Branco', 'Verde', 'Bege', 'Terracota', 'Mostarda', 'Verde Oliva',
  'Coral', 'Amarelo', 'Turquesa', 'Lilás', 'Cinza', 'Caramelo', 'Off White', 'Marrom',
  'Preto', 'Nude', 'Azul Marinho', 'Vermelho', 'Natural'
];

export const allSizes = ['70', '75', '80', '85', '90', '95', '100', '105', '25x30'];