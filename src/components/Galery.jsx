import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk, updateCategpryThunk } from "../store/slices/products.slice";
import { setShowLoader } from "../store/slices/showLoader.slice";
import Loader from "./Loader";

const Galery = () => {
    const [photos, setPhotos] = useState([]);
    const [btnBackground, setBtnBackground] = useState('');
    const [photoSelected, setPhotoSelected] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch();
    
    const allPhotos = useSelector(state => state.products);
    const showLoader = useSelector(state => state.loader);

    useEffect(() => {
        dispatch(getProductsThunk());
    }, []);
    
    useEffect(() => {
        changeCategory('tradicional')
    },[allPhotos])

    const changeCategory = category => {
        dispatch(setShowLoader(true));

        if (category === 'all') {
            setPhotos(allPhotos);
            setTimeout(() => {
                dispatch(setShowLoader(false));
            }, 4000);
        } else {
            const filteredPhotos = allPhotos.filter(img => img.category === category);
            setPhotos(filteredPhotos);
            setTimeout(() => {
                dispatch(setShowLoader(false));
            }, 3000);
        }

        setBtnBackground(category);
    };

    const seePhoto = id => {
        const showCardCurrent = photos.find(img => img.id === id);
        setPhotoSelected(showCardCurrent);
        setIsVisible(true);
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
                    <select defaultValue="seleccionar" className="select" onChange={e => dispatch(updateCategpryThunk(photoSelected.id, e.target.value))}>
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