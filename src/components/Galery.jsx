import { useEffect, useState } from "react";
import Data from '../data/data'
import Loader from "./Loader";

const Galery = () => {
    const images = Data.images;
    const [photos, setPhotos] = useState([]);
    const [btnBackground, setBtnBackground] = useState('tradicional');
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        changeCategory('tradicional');
    }, [images]);

    const changeCategory = category => {
        setShowLoader(true);

        if (category === 'all') {
            setPhotos(images)
            setTimeout(() => {
                setShowLoader(false)
            }, 4000);
        } else {
            const filteredPhotos = images.filter(img => img.category === category);
            setPhotos(filteredPhotos);
            setTimeout(() => {
                setShowLoader(false)
            }, 3000);
        }
        setBtnBackground(category);
    };

    return (
        <article className="galery-container">
            <section className="section--galery-filters">
                <h2>Galería</h2>
                <div className="btn-categories">
                    <button className={btnBackground === 'all' && 'category-selected'} onClick={() => changeCategory('all')}>Todas</button>
                    <button className={btnBackground === 'tradicional' && 'category-selected'} onClick={() => changeCategory('tradicional')}>Tradicional</button>
                    <button className={btnBackground === 'acrilico' && 'category-selected'} onClick={() => changeCategory('acrilico')}>Acrílicas</button>
                    <button className={btnBackground === 'esmaltadoGel' && 'category-selected'} onClick={() => changeCategory('esmaltadoGel')}>Esmaltado en Gel</button>
                </div>
            </section>
            {
                showLoader ? (<Loader />) : (
                    <section className="section--galery-photos">
                        {
                            photos.map(photo => (
                                <div key={photo.id} id={photo.id} className="cards">
                                    <img className="photo-nails" src={photo.url} alt="photo nail" />
                                </div>
                            ))
                        }
                    </section>
                )
            }
        </article>
    );
}

export default Galery;