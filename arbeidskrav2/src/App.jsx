import { useState } from "react";
import AddForm from "./AddForm.jsx";
import ShoppingList from "./ShoppingList.jsx";
import "./App.css";
import "./style.css";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "karbonadedeig", quantity: 2, bought: false },
    { id: 2, name: "Eplejuice", quantity: 1, bought: true }
  ]);

  function addItem(name, quantity) {
    const newItem = {
      id: Date.now(),
      name,
      quantity: Number(quantity),
      bought: false
    };
    setItems([newItem, ...items]);
  }

  function toggleBought(id) {
    setItems(items.map(item =>
      item.id === id ? { ...item, bought: !item.bought } : item
    ));
  }

  function updateQuantity(id, newQty) {
    if (newQty < 1) return;
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: newQty } : item
    ));
  }

  return (
    <main>
      <header>
        <h1>Handleliste</h1>
      </header>

      <AddForm onAddItem={addItem} />
      <ShoppingList
        items={items}
        onToggleBought={toggleBought}
        onUpdateQuantity={updateQuantity}
      />
    </main>
  );
}
