import { useState } from "react";

import { showLoading, hideLoading } from "loading-request";

import ApiProductos from "./ApiProducts";

const Filter = () => {
  const categories = [
    { value: "electronics", label: "Electrónica" },
    { value: "jewelery", label: "Joyería" },
    { value: "men's clothing", label: "Ropa de Hombre" },
    { value: "women's clothing", label: "Ropa de Mujer" },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (categoryValue) => {
    showLoading({
      message: "Cargando Filtro...",
      spinnerColor: "#f3752b",
      textLoadingColor: "#EE5E09",
      textLoadingSize: "35px",
    });

    // Toggle selected categories
    if (selectedCategories.includes(categoryValue)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== categoryValue));
    } else {
      setSelectedCategories([...selectedCategories, categoryValue]);
    }
    hideLoading({ timeLoading: 1000 });
  };

  return (
    <div id="container">
      <div id="filter">
        <h2>
          Lista de Categoría <hr />
        </h2>

        <div className="category-filters">
          <div id="color-filters">
            <ul className="filter-options filter-option_1">
              {categories.map((category) => (
                <li key={category.value}>
                  <label htmlFor={category.value}>
                    <input
                      type="checkbox"
                      id={category.value}
                      value={category.value}
                      checked={selectedCategories.includes(category.value)}
                      onChange={() => handleCategoryChange(category.value)}
                    />{" "}
                    {category.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ApiProductos selectedCategories={selectedCategories} />
    </div>
  );
};

export default Filter;
