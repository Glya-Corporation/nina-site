import { useState } from "react";

const Header = () => {
    const [show, setShow] = useState(false);

    return (
        <header className="header">
            <nav className="nav">
                <button onClick={() => setShow(!show)} className="material-symbols-outlined btn-menu">menu</button>
                <ul className={`nav-list ${ show && 'show'}`}>
                    <li className="nav-item">Inicio</li>
                    <li className="nav-item">Galería</li>
                    <li className="nav-item">Contacto</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;