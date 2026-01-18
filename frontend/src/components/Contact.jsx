function Contact(props) {
    return (
        <>
            <div className="contact">
                <h1>Contact</h1>
                <p>Contacter l'un de nos conseillers</p>
            </div>

            <form className="form-contact">
                <input type="text" placeholder="Nom" required />
                <input type="text" placeholder="Prenom" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Object" required />
                <textarea name="Message" placeholder="Message"></textarea>
                <button type="submit" id="btn-send">Envoyer</button>
            </form>
        </>
    )
}

export default Contact