import { Link, useNavigate } from 'react-router-dom'

const Menu = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        {/* Link to = a=href */}
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/product/ordenador">Product orde</Link>
                    </li>
                    <li>
                        <Link to="/product/pantalla">Pantalla</Link>
                    </li>
                    <li>
                        <Link to="/product/ratón">Ratón</Link>
                    </li>
                </ul>
            </nav>
            <button onClick = {() => navigate ('/')}> Ir al home</button>
        </>
    );
};

export default Menu;