import { Link } from "react-router-dom";
import Orders from "./Orders";

function Cart({ items, onRemove, onUpdateQuantity }) {
  const total = items.reduce((acc, item) => acc + (parseFloat(item.price) * (item.quantity || 1)), 0);

  return (
    <div className="cart-page">
      <h2>Mon Panier</h2>
      {items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="cart-container">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} width="80" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.price}€</p>
              </div>

              <div className="quantity-selector">
                <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
              </div>

              <div className="item-subtotal">
                {(item.price * item.quantity).toFixed(2)}€
              </div>

              <button className='btn-delete-product' onClick={() => onRemove(item.id)}>Supprimer</button>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total Commande : {total.toFixed(2)}€</h3>
            <Link to='/commande' className="checkout">
              Valider la commande
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;