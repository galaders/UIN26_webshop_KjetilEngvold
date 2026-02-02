import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ items, onToggleBought, onUpdateQuantity }) {
  return (
    <section>
      <ul>
        {items.map(item => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggleBought={onToggleBought}
            onUpdateQuantity={onUpdateQuantity}
          />
        ))}
      </ul>
    </section>
  );
}
