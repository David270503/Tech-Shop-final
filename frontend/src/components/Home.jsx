import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

function ProductList({ products, onAddToCart }) {
    const featuredProducts = products.filter((product) => product.isFeatured)

    return (
        <>
            <div className='accroche'>
                <h2>La technologie qui simplifie votre quotidien</h2>
                <p>Découvrez nos produits</p>
                <Link to="/produits">
                    <button className='btn-acheter'>Voir</button>
                </Link>
            </div>
            <section className='products-section'>
                <h2>Nos Produits Phares</h2>
                <div className='liste'>
                    {featuredProducts.map((product) => (
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