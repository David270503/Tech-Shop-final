import { useNavigate } from "react-router-dom"

function Orders({ items, confirmOrder }) {
    const navigate = useNavigate()
    const orderConfirmation = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData)
        const totalCmd = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
        const orderData = {
            user: userData,
            items: items,
            total: totalCmd
        }
        try {
            const response = await fetch('http://localhost:3001/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            })
            const data = await response.json()
            if (data.sucess) {
                console.log("Commande créée")
                confirmOrder && confirmOrder()
                navigate('/confirmation-commande')
            } else {
                console.error("Erreur serveur :", data.message)
            }
        } catch (error) {
            console.error("Erreur réseau")
        }
    }
    return (
        <>
            <div className="checkout-page">
                <div className="checkout-layout">
                    <form className="form" onSubmit={orderConfirmation}>
                        <label>
                            Nom et prénom
                            <input type="text" name="name" required />
                        </label>
                        <label>
                            Email
                            <input type="email" name="email" required />
                        </label>
                        <label>
                            Numéro de téléphone
                            <input type="tel" name="phone" required />
                        </label>
                        <label>
                            Adresse
                            <input type="text" name="address" required />
                        </label>
                        <label>
                            Ville
                            <input type="text" name="ville" required />
                        </label>
                        <label>
                            Pays
                            <input type="text" name="pays" required />
                        </label>

                        <button className="btn-send-orders" type="submit">Passer la commande</button>
                    </form>

                    <div className="resume-order">
                        <p>Récapitulatif de votre commande</p>
                        {items.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} width="80" />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>{item.price}€</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders