import { useState } from "react";

const Header = () => {
    const [show, setShow] = useState(false);

    return (
        <header className="header">
            <nav className="nav">
                <button onClick={() => setShow(!show)} className="material-symbols-outlined btn-menu">menu</button>
                <ul className={`nav-list ${ show && 'show'}`}>
                    <li className="nav-item"><a onClick={() => setShow(!show)} href="#home">Inicio</a></li>
                    <li className="nav-item"><a onClick={() => setShow(!show)} href="#galery">Galería</a></li>
                    <li className="nav-item"><a onClick={() => setShow(!show)} href="#contact">Contácto</a></li>
                    <li className="nav-item"><a onClick={() => setShow(!show)} href="#home">Administración</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;