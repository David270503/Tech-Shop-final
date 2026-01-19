import { Link } from "react-router-dom"

function Header(props) {
    return (
        <header className="main-header">
            <div className='logo-container'>
                <Link to="/">
                    <img src="/Images/logo.png" alt="logo" className="logo-image" />
                    <h1 className="title">Tech-Shop</h1>
                </Link>
            </div>
            <nav className="nav-links">
                <div className="menu-center">
                    <Link to="/">Accueil</Link>
                    <Link to="/produits">Produits</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className='nav-icons'>
                    <Link to="#" className="compte-icon">
                        <img src="/Images/logo-compte.png" alt="icon compte" />
                    </Link>
                    <Link to="/panier" className="panier-icon">
                        <img src="/Images/logo-panier.png" alt="icon panier" />
                        <span className='badge'>{props.count}</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header