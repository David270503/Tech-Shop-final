function ProductCard(props) {
    return (
        <div className="product-card">
            <img src={props.image} alt={props.titre} className="image-product" />
            <h4>{props.titre}</h4>
            <p>{props.prix}</p>

            <button onClick={props.onAdd}>Ajouter au panier</button>
        </div>
    )
}

export default ProductCard