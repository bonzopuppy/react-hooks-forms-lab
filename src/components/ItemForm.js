import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");


  const handleNameChange = (event) => {
    setItemName(event.target.value);
  }

  const handleCategoryChange = (event) => {
    setItemCategory(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }
  

    props.onItemFormSubmit(newItem);

    setItemName("");
    setItemCategory("Produce");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name"
          value={itemName}
          onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select 
          name="category"
          value={itemCategory}
          onChange={handleCategoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button 
        type="submit"
      >
        Add to List
      </button>
    </form>
  );
}

export default ItemForm;
