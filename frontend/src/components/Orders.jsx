function Orders() {
    return (
        <>
            <form className="form">
                <label>
                    Nom et prénom
                    <input type="text" name="name" />
                </label>
                <label>
                    Email
                    <input type="email" name="email" />
                </label>
                <label>
                    Numéro de téléphone
                    <input type="tel" name="telephone" />
                </label>
                <label>
                    Adresse
                    <input type="text" name="adrese" />
                </label>
                <label>
                    Ville
                    <input type="text" name="ville" />
                </label>
                <label>
                    Pays
                    <input type="text" name="pays" />
                </label>
            </form>

            <div className="resume-order">
                <p>Votre commande</p>
                {}
            </div>
        </>
    )
}

export default Orders