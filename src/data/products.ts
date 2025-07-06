import { Product } from '../types';
import BolsaNatural from '../images/bolsa_branca.jpeg'
import BolsaNaturalSmille from '../images/bolsa_branca_smille.jpeg'
import BolsaEstrela from '../images/bolsa_estrela.jpeg'
import BolsaLaranja from '../images/bolsa_laranja.jpeg'
import BolsaLaranja2 from '../images/bolsa_laranja2.jpeg'
import BolsaPretaVermelha from '../images/bolsa_preta_vermelha.jpeg'
import BolsaPreta from '../images/bolsa_preta.jpeg'
import BolsaSapinho from '../images/bolsa_sapinho.jpeg'

export const products: Product[] = [
  {
    id: '1',
    name: 'Bolsa Boho Neve',
    size: '85/90/95/100',
    colors: ['Natural'],
    price: 69.99,
    image: BolsaNatural,
    description: 'Estilo boho com pontos clássicos em branco cru. Perfeita para looks leves e naturais.',
    category: 'Bolsas'
  },
  {
    id: '2',
    name: 'Smile Pocket',
    size: '85/90/95/100',
    colors: ['Natural'],
    price: 39.99,
    image: BolsaNaturalSmille,
    description: 'Bolsa leve e divertida com detalhe de carinha sorridente, ideal para celular e pequenos itens.',
    category: 'Bolsas'
  },
  {
    id: '3',
    name: 'Starbag Solar',
    size: '85/90/95/100',
    colors: ['Amarelo'],
    price: 59.99,
    image: BolsaEstrela,
    description: 'Em formato de estrela, com tons terrosos e vibrantes, cheia de personalidade.',
    category: 'Bolsas'
  },
  {
    id: '4',
    name: 'Urban Chic',
    size: '85/90/95/100',
    colors: ['Terra cota'],
    price: 59.99,
    image: BolsaLaranja,
    description: 'Moderna e estilosa com corrente prateada. Ótima para sair à noite com um toque artesanal.',
    category: 'Bolsas'
  },
  {
    id: '5',
    name: 'Sunny Pocket',
    size: '85/90/95/100',
    colors: ['Laranja'],
    price: 39.99,
    image: BolsaLaranja2,
    description: 'Pequena e prática, essa bolsa radiante é perfeita para quem ama cores vibrantes.',
    category: 'Bolsas'
  },
  {
    id: '6',
    name: 'Cherry Lace e Midnight Bow',
    size: '85/90/95/100',
    colors: ['Preto', "Vermelho"],
    price: 39.99,
    image: BolsaPretaVermelha,
    description: 'Bolsinhas delicadas com laço decorativo. Ótimas para presentear ou compor um look fofo.',
    category: 'Bolsas'
  },
  {
    id: '7',
    name: 'Sol da Meia-Noite',
    size: '85/90/95/100',
    colors: ['Preto', "Amarelo"],
    price: 49.99,
    image: BolsaPreta,
    description: 'Contraste marcante entre o preto e o sol dourado. Um charme único e cheio de estilo.',
    category: 'Bolsas'
  },
  {
    id: '8',
    name: 'KeroBag',
    size: '85/90/95/100',
    colors: ['Verde'],
    price: 59.99,
    image: BolsaSapinho,
    description: 'Fofa, divertida e super original! Ideal para crianças ou adultos com espírito lúdico.',
    category: 'Bolsas'
  },
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