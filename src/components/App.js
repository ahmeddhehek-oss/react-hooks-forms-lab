import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
   const [searchText, setSearchText] = useState("");



  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

   function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }



  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items}
       searchText={searchText}
        onSearchChange={setSearchText}
        onItemFormSubmit={handleItemFormSubmit}
 />
    </div>
  );
}

export default App;
