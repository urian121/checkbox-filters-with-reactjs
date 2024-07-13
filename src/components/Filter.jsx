const Filter = () => {
  return (
    <div id="container" style={{ border: "1px solid #ccc" }}>
      <div id="filter" style={{ border: "1px solid yellow" }}>
        <h3>
          Filtro Dinámico <hr />{" "}
        </h3>

        <div className="category-filters">
          <div id="color-filters">
            <ul className="filter-options filter-option_1">
              <li>
                <input type="checkbox" value="rectangle" /> Rectangle
              </li>
              <li>
                <input type="checkbox" value="square" /> Square
              </li>
              <li>
                <input type="checkbox" value="round" /> Round
              </li>
            </ul>
          </div>
        </div>

        <div className="category-filters">
          <div className="brand">
            <h4>Color</h4>
          </div>
          <div id="brand-filters" className="category-filters">
            <ul className="filter-options filter-option_2">
              <li>
                <input type="checkbox" value="pink" /> Pink
              </li>
              <li>
                <input type="checkbox" value="green" /> Green
              </li>
              <li>
                <input type="checkbox" value="blue" /> Blue
              </li>
            </ul>
          </div>
        </div>

        <div className="category-filters">
          <img id="reset" src="https://www.asus.com/media/images/rest.png" alt="" />
          Limpiar filtro
        </div>
      </div>

      <div id="products">
        <ul id="product-list"></ul>

        <div className="card">
          <div className="wrapper">
            <div className="colorProd"></div>
            <div
              className="imgProd"
              style={{
                backgroundImage:
                  "url(https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/batman.png?alt=media&amp;token=bcce964a-7224-4e47-b619-265e93b5311e)",
              }}></div>
            <div className="infoProd">
              <p className="nombreProd">ARTFX DC UNIVERSE Batman HUSH Renewal Package</p>
              <p className="extraInfo">Fecha de salida: 31/03/2021</p>
              <div className="actions">
                <div className="preciosGrupo">
                  <p className="precio precioOferta">9,999</p>
                  <p className="precio precioProd">9,999</p>
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
      </div>
    </div>
  );
};

export default Filter;
