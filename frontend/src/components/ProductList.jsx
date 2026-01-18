import ProductCard from './ProductCard'

function ProductList({ products, onAddToCart }) {
    return (
        <>
            <section className='products-section'>
                <h2>Nos Produits Phares</h2>
                <div className='liste'>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                            onAdd={() => onAddToCart(product)}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductList