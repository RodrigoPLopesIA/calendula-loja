import React, { useState } from 'react';
import { X, MessageCircle, Heart, Share2, Palette } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const colorPalette = [
  { name: 'Branco', hex: '#FFFFFF' },
  { name: 'Preto', hex: '#000000' },
  { name: 'Cinza', hex: '#808080' },
  { name: 'Vermelho', hex: '#FF0000' },
  { name: 'Rosa', hex: '#FFC0CB' },
  { name: 'Rosa Choque', hex: '#FF1493' },
  { name: 'Coral', hex: '#FF7F50' },
  { name: 'Laranja', hex: '#FFA500' },
  { name: 'Amarelo', hex: '#FFFF00' },
  { name: 'Verde', hex: '#008000' },
  { name: 'Verde Claro', hex: '#90EE90' },
  { name: 'Verde Escuro', hex: '#006400' },
  { name: 'Azul', hex: '#0000FF' },
  { name: 'Azul Claro', hex: '#87CEEB' },
  { name: 'Azul Marinho', hex: '#000080' },
  { name: 'Roxo', hex: '#800080' },
  { name: 'Lilás', hex: '#DDA0DD' },
  { name: 'Marrom', hex: '#A52A2A' },
  { name: 'Bege', hex: '#F5F5DC' },
  { name: 'Nude', hex: '#E6C2A6' },
  { name: 'Caramelo', hex: '#D2691E' },
  { name: 'Mostarda', hex: '#FFDB58' },
  { name: 'Terracota', hex: '#E2725B' },
  { name: 'Turquesa', hex: '#40E0D0' }
];

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [customColor, setCustomColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [customSize, setCustomSize] = useState('');
  const [customWidth, setCustomWidth] = useState('');
  const [notes, setNotes] = useState('');
  const [showColorPalette, setShowColorPalette] = useState(false);

  if (!product || !isOpen) return null;

  const handleWhatsAppMessage = () => {
    const formatSize = (size: string) => {
      if (size.includes('x')) {
        return size + ' cm';
      }
      return size + 'cm';
    };

    const sizeInfo = customSize && customWidth 
      ? `${customSize}cm (tamanho) x ${customWidth}cm (largura)`
      : selectedSize 
        ? formatSize(selectedSize)
        : 'Não especificado';

    const message = `Olá! Tenho interesse no produto:
    
📦 *${product.name}*
💰 Preço: R$ ${product.price.toFixed(2).replace('.', ',')}
📏 Medidas: ${sizeInfo}
🎨 Cor: ${selectedColor || customColor || 'Não selecionado'}
${notes ? `💬 Observações: ${notes}` : ''}

Gostaria de mais informações!`;

    const phoneNumber = '5521981777047'; // Substitua pelo seu número
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const availableSizes = product.size.split('/');

  const formatSizeDisplay = (size: string) => {
    if (size.includes('x')) {
      return size + ' cm';
    }
    return size + 'cm';
  };

  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName);
    setCustomColor('');
    setShowColorPalette(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Detalhes do Produto</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart className="h-5 w-5 text-rose-500" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-3xl font-bold text-rose-600">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Tamanhos Disponíveis</h3>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {availableSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setCustomSize('');
                        setCustomWidth('');
                      }}
                      className={`
                        py-2 px-4 border rounded-md text-sm font-medium transition-all duration-200
                        ${selectedSize === size
                          ? 'bg-rose-500 text-white border-rose-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-rose-300'
                        }
                      `}
                    >
                      {formatSizeDisplay(size)}
                    </button>
                  ))}
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Ou especifique medidas personalizadas:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tamanho (cm)
                      </label>
                      <input
                        type="number"
                        value={customSize}
                        onChange={(e) => {
                          setCustomSize(e.target.value);
                          setSelectedSize('');
                        }}
                        placeholder="Ex: 85"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Largura (cm)
                      </label>
                      <input
                        type="number"
                        value={customWidth}
                        onChange={(e) => {
                          setCustomWidth(e.target.value);
                          setSelectedSize('');
                        }}
                        placeholder="Ex: 40"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    * Para roupas: tamanho = circunferência do busto, largura = largura da peça
                  </p>
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Cores Disponíveis</h3>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => {
                        setSelectedColor(color);
                        setCustomColor('');
                      }}
                      className={`
                        py-2 px-4 border rounded-md text-sm font-medium transition-all duration-200
                        ${selectedColor === color
                          ? 'bg-rose-500 text-white border-rose-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-rose-300'
                        }
                      `}
                    >
                      {color}
                    </button>
                  ))}
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-medium text-gray-900">Escolher cor personalizada:</h4>
                    <button
                      onClick={() => setShowColorPalette(!showColorPalette)}
                      className="flex items-center space-x-2 px-3 py-1 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors"
                    >
                      <Palette className="h-4 w-4" />
                      <span className="text-sm">Paleta</span>
                    </button>
                  </div>

                  {showColorPalette && (
                    <div className="mb-4 p-3 border border-gray-200 rounded-lg bg-white">
                      <div className="grid grid-cols-6 gap-2 mb-3">
                        {colorPalette.map(color => (
                          <button
                            key={color.name}
                            onClick={() => handleColorSelect(color.name)}
                            className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-gray-500 transition-colors relative group"
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          >
                            {selectedColor === color.name && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-full border border-gray-400"></div>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500">Clique em uma cor para selecioná-la</p>
                    </div>
                  )}

                  <input
                    type="text"
                    value={customColor}
                    onChange={(e) => {
                      setCustomColor(e.target.value);
                      setSelectedColor('');
                    }}
                    placeholder="Ou digite uma cor específica (ex: Azul bebê, Rosa chá...)"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Observações (opcional):
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Alguma observação especial sobre o produto..."
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppMessage}
                className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Enviar Pedido pelo WhatsApp</span>
              </button>

              <div className="text-sm text-gray-500 text-center">
                Ao clicar acima, você será redirecionado para o WhatsApp com sua mensagem pronta
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};