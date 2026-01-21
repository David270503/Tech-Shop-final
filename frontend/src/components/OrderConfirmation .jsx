import { Link } from "react-router-dom"
import { useCart } from "../hooks/useCart"

function OrderConfirmation() {
    const { order } = useCart()
    return (
        <>
            <div className="confirmation-order">
                <div className="confirmation-card">
                    <div className="icon-sucess">✅</div>
                    <h1>Merci pour votre commande</h1>
                    <p>Votre commande a bien été validée.</p>
                </div>
                <div className="recapitulatif-commande">
                    <p>Voici le résumé de votre commande</p>
                    {order.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} width="80" />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p>{item.price}€</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Link to='/produits' className='btn-back-home'>
                    Continuer mes achats
                </Link>
            </div>
        </>
    )
}

export default OrderConfirmation