import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ApiProductos = () => {
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
        console.log("Finalizo la carga");
      }
    };

    fetchData();
  }, []);
  return (
    <div className="contenedorCards">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ApiProductos;
