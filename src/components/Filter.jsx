import ApiProductos from "./ApiProductos";

const Filter = () => {
  return (
    <div id="container">
      <div id="filter">
        <h3>
          Filtro Dinámico <hr />
        </h3>

        <div className="category-filters">
          <div id="color-filters">
            <ul className="filter-options filter-option_1">
              <li>
                <input type="checkbox" value="electronics" /> Electrónica
              </li>
              <li>
                <input type="checkbox" value="jewelery" /> Joyería
              </li>
              <li>
                <input type="checkbox" value="men's clothing" /> Ropa de Hombre
              </li>
              <li>
                <input type="checkbox" value="women's clothing" /> Ropa de mujer
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="products">
        <ApiProductos />
      </div>
    </div>
  );
};

export default Filter;
