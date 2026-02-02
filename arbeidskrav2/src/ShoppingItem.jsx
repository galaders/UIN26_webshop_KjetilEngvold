export default function ShoppingItem({ item, onToggleBought, onUpdateQuantity }) {
  return (
    <li>
      <article>
        <label>
          <input
            type="checkbox"
            checked={item.bought}
            onChange={() => onToggleBought(item.id)}
          />
          {item.name}
        </label>

        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={e => onUpdateQuantity(item.id, Number(e.target.value))}
        />
      </article>
    </li>
  );
}
