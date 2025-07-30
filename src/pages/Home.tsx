import React, { useState, useMemo } from "react";
import { Header } from "../components/header/Index";
import { Filters } from "../components/Filters";
import { Card } from "../components/Card/Index";
import { ProductModal } from "../components/ProductModal";
import { products } from "../data/products";
import { filterProducts } from "../utils/filters";
import { Product as ProductType, Filters as FiltersType } from "../types";
import { Heart, Instagram, Search, ShoppingBag, User } from "lucide-react";
import { Footer } from "../components/Footer/Index";
import { FaWhatsapp } from "react-icons/fa";

export function Home() {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FiltersType>({
    search: "",
    minPrice: 0,
    maxPrice: 200,
    colors: [],
    sizes: [],
    category: "Todas",
  });

  const filteredProducts = useMemo(() => {
    return filterProducts(products, filters);
  }, [filters]);

  const handleProductClick = (product: ProductType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSearchChange = (search: string) => {
    setFilters((prev) => ({ ...prev, search }));
  };

  const favorite = (id: string) => {
    alert(id);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header.Root>
        <Header.Image />
        <Header.Input handleSearchChange={handleSearchChange} icon={Search} />
        <Header.Actions>
          <Header.Action icon={Heart} />
          <Header.Action icon={ShoppingBag} />
          <Header.Action icon={User} />
        </Header.Actions>
      </Header.Root>

      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Filters
            filters={filters}
            onFiltersChange={setFilters}
            isOpen={isFiltersOpen}
            onToggle={() => setIsFiltersOpen(!isFiltersOpen)}
          />

          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Peças de Crochê Artesanais
              </h2>
              <p className="text-gray-600">
                Encontrados {filteredProducts.length} produto
                {filteredProducts.length !== 1 ? "s" : ""}
              </p>
            </div>

            {products.length === 0 ? (
              <Card.Error>
                <Card.ErrorImage />
                <Card.ErrorTitle title="Nenhum produto encontrado" />
                <Card.ErrorMessage message="Tente ajustar seus filtros para encontrar o que procura." />
              </Card.Error>
            ) : (
              <Card.Grid>
                {products.map((product) => (
                  <Card.Container>
                    <Card.FloatContent>
                      <Card.Image name={product.name} image={product.image} />
                      <Card.FloatFavorite
                        icon={Heart}
                        favorite={() => favorite(product.id)}
                      />
                      <Card.FloatDescription
                        icon={ShoppingBag}
                        seeDetails={() => handleProductClick(product)}
                      />
                    </Card.FloatContent>
                    <Card.Body>
                      <Card.title title={product.name} />
                      <Card.Content>
                        <Card.Price price={product.price} />
                        <Card.Size size={product.size} />
                      </Card.Content>
                      <Card.Colors colors={product.colors} />
                      <Card.Description description={product.description} />
                    </Card.Body>
                  </Card.Container>
                ))}
              </Card.Grid>
            )}
          </div>
        </div>
      </main>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Footer */}
      <Footer.Container>
        <Footer.Content>
          <Footer.Title title="Calendula Crochê" />
          <Footer.Description description="Peças artesanais feitas com amor e cuidado" />
          <Footer.Actions>
            <Footer.Button text="Instagram" icon={Instagram}/>
            <Footer.Button text="Whatsapp" icon={FaWhatsapp}/>
          </Footer.Actions>
        </Footer.Content>
      </Footer.Container>
    </div>
  );
}
