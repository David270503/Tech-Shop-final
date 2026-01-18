import { Link } from "react-router-dom";

function Cart({ items, onRemove, onUpdateQuantity }) {
  const total = items.reduce((acc, item) => acc + (parseFloat(item.prix) * (item.quantity || 1)), 0);

  return (
    <div className="cart-page">
      <Link to='/produits' className='back-link'>
        ← Retour aux produits
      </Link>

      <h2>Mon Panier</h2>
      {items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="cart-container">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.titre} width="80" />
              <div className="item-details">
                <h3>{item.titre}</h3>
                <p>{item.prix}€</p>
              </div>

              <div className="quantity-selector">
                <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
              </div>

              <div className="item-subtotal">
                {(item.prix * item.quantity).toFixed(2)}€
              </div>

              <button className='btn-delete-product' onClick={() => onRemove(item.id)}>Supprimer</button>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total Commande : {total.toFixed(2)}€</h3>
            <button className="btn-checkout">Valider la commande</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;