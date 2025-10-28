import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, searchText, onSearchChange, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
      const normalizedSearch = searchText?.toLowerCase() || "";
  const normalizedName = item.name?.toLowerCase() || "";

  const matchesSearch = normalizedName.includes(normalizedSearch);


    return matchesCategory && matchesSearch;
  });



  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
       searchText={searchText}
        onSearchChange={onSearchChange}

       onCategoryChange={handleCategoryChange}
       />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
