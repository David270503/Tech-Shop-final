function ProductCard(props) {
    return (
        <div className="product-card">
            <img src={props.image} alt={props.name} className="image-product" />
            <h4>{props.name}</h4>
            <p>{props.price}€</p>

            <button onClick={props.onAdd}>Ajouter au panier</button>
        </div>
    )
}

export default ProductCard