import ProductCard from "./ProductCard"

function Products({ products, onAddToCart }) {
    return (
        <>
            <section className="section-products"></section>
            <h1 className="title-products">Decouvrez nos Produits</h1>
            <div className="liste">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                        onAdd={() => onAddToCart(product)}
                    />
                ))}
            </div>
        </>
    )
}

export default Products