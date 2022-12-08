import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Galery = () => {
    const [photos, setPhotos] = useState([]);
    const [btnBackground, setBtnBackground] = useState('tradicional');
    const [showLoader, setShowLoader] = useState(true);
    const [photoSelected, setPhotoSelected] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        changeCategory('tradicional');
        getProducts();
    }, []);

    const changeCategory = category => {
        getProducts();
        setShowLoader(true);

        if (category === 'all') {
            getProducts()
            setTimeout(() => {
                setShowLoader(false)
            }, 4000);
        } else {
            const filteredPhotos = photos.filter(img => img.category === category);
            setPhotos(filteredPhotos);
            setTimeout(() => {
                setShowLoader(false)
            }, 3000);
        }
        setBtnBackground(category);
    };

    const seePhoto = id => {
        const showCardCurrent = photos.find(img => img.id === id);
        setPhotoSelected(showCardCurrent);
        setIsVisible(true);
    }

    const getProducts = () => {
        axios.get('https://ninadb-production.up.railway.app/api/v1/products?offset=0&limit=1000')
            .then(data => setPhotos(data.data));
    }

   /*  const addProducts = id => {
        const product = images.find(img => img.id === id);

        product.name = `${product.id}`
        delete product.id;

        axios.post('https://ninadb-production.up.railway.app/api/v1/products', product)
            .then(data => console.log(data.data))
            .catch(error => console.log(error))
    } */

    /* const deleteProducts = photoCurrent => {
        photoCurrent.forEach(product => {
            axios.delete(`https://ninadb-production.up.railway.app/api/v1/products/${product.id}`)
                .then(data => console.log(data))
                .catch(error => console.log(error))
                .finally(() => getProducts())
        }); 
    } */

    const updateCategpry = (id, e) => {
        axios.put(`https://ninadb-production.up.railway.app/api/v1/products/${id}`, {category: e})
            .then(data => console.log(data))
            .then(() => alert(`Has cambiado la categoria ahora es ${alerta(e)}`))
            .catch(error => console.error(error))

            const alerta = e => {
                if (e === "tradicional") return "Tradicional"
                if (e === "acrilico") return "Acrílico"
                if (e === "esmaltadoGel") return "Esmaltado en Gel"
            }
    }

    return (
        <article className="galery-container" id="galery">
            <section className="section--galery-filters">
                <h2>Galería</h2>
                <div className="btn-categories">
                    <button className={btnBackground === 'all' ? 'category-selected' : ''} onClick={() => changeCategory('all')}>Todas</button>
                    <button className={btnBackground === 'tradicional' ? 'category-selected' : ''} onClick={() => changeCategory('tradicional')}>Tradicional</button>
                    <button className={btnBackground === 'acrilico' ? 'category-selected' : ''} onClick={() => changeCategory('acrilico')}>Acrílicas</button>
                    <button className={btnBackground === 'esmaltadoGel' ? 'category-selected' : ''} onClick={() => changeCategory('esmaltadoGel')}>Esmaltado en Gel</button>
                </div>
            </section>
            {
                showLoader ? (<Loader />) : (
                    <section className="section--galery-photos">
                        {
                            photos.map(photo => (
                                <div key={photo.id} id={photo.id} className="cards">
                                    <img className="photo-nails" src={photo.url} alt="photo nail" />
                                    <button className="btn-ver" onClick={() => seePhoto(photo.id)}>Ver</button>
                                </div>
                            ))
                        }
                    </section>
                )
            }
            <div className={`photoCurrent ${isVisible && 'animations'}`}>
                <div className="container-photo-current">
                    <img src={photoSelected.url} alt="Photo selected" />
                    <select defaultValue="seleccionar" className="select" onChange={e => updateCategpry(photoSelected.id, e.target.value)}>
                        <option value="seleccionar" disabled>Seleccionar...</option>
                        <option value="tradicional">Tradicional</option>
                        <option value="acrilico">Acrílico</option>
                        <option value="esmaltadoGel">Esmaltado en Gel</option>
                    </select>
                    <button onClick={() => setIsVisible(false)} className="material-symbols-outlined btn-close-photo">close</button>
                </div>
            </div>
        </article>
    );
}

export default Galery;