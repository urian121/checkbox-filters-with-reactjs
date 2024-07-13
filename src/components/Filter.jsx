import ApiProductos from "./ApiProductos";

const Filter = () => {
  const categories = [
    { value: "electronics", label: "Electrónica" },
    { value: "jewelery", label: "Joyería" },
    { value: "men's clothing", label: "Ropa de Hombre" },
    { value: "women's clothing", label: "Ropa de Mujer" },
  ];
  return (
    <div id="container">
      <div id="filter">
        <h2>
          Lista de Categoria <hr />
        </h2>

        <div className="category-filters">
          <div id="color-filters">
            <ul className="filter-options filter-option_1">
              {categories.map((category) => (
                <li key={category.value}>
                  <input type="checkbox" value={category.value} /> {category.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ApiProductos />
    </div>
  );
};

export default Filter;
