import React from "react";

function CategoryFilter({ categories, setSelectedCat, selectedCat }) {
  function handleClick(e) {
    setSelectedCat(e.target.textContent);
  }
  //
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        let selectedClass = category === selectedCat ? "selected" : "";
        return (
          <button
            className={selectedClass}
            onClick={handleClick}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
