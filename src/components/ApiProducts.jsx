import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ApiProductos = ({ selectedCategories }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url_api = "https://fakestoreapi.com/products";
      try {
        const response = await axios.get(url_api);
        setData(response.data);
      } catch (error) {
        console.log("Error en la carga");
      } finally {
        console.log("Finalizó la carga");
      }
    };

    fetchData();
  }, []);

  const filterProducts = (products, categories) => {
    if (categories.length === 0) {
      return products; // No categories selected, return all products
    }
    return products.filter((product) => categories.includes(product.category.toLowerCase()));
  };

  const filteredProducts = filterProducts(data, selectedCategories);

  return (
    <div className="contenedorCards">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ApiProductos;
