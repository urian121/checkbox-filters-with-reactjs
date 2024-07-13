import { useState, useEffect } from "react";
import axios from "axios";

const ProductCard = ({ product }) => (
  <div className="card">
    <div className="wrapper">
      <div className="colorProd"></div>
      <div
        className="imgProd"
        style={{
          backgroundImage: `url(${product.image})`,
        }}></div>
      <div className="infoProd">
        <p className="nombreProd">{product.title}</p>
        <p className="extraInfo">Categoria: {product.category}</p>
        <div className="actions">
          <div className="preciosGrupo">
            <p className="precio precioOferta">{product.price}</p>
            <p className="precio precioProd">{product.price - product.price * 0.2}</p>
          </div>
          <div className="icono action aFavs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z"></path>
            </svg>
          </div>
          <div className="icono action alCarrito">
            <svg className="inCart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <title>Quitar del carrito</title>
              <path d="M30 22H12M2 6h6l10 40h32l3.2-9.7"></path>
              <circle cx="20" cy="54" r="4"></circle>
              <circle cx="46" cy="54" r="4"></circle>
              <circle cx="46" cy="22" r="16"></circle>
              <path d="M53 18l-8 9-5-5"></path>
            </svg>
            <svg className="outCart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <title>Agregar al carrito</title>
              <path d="M2 6h10l10 40h32l8-24H16"></path>
              <circle cx="23" cy="54" r="4"></circle>
              <circle cx="49" cy="54" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
