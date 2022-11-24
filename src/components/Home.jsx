import { Carousel } from "react-bootstrap";
import Data from "../data/data"
import logoI from "../assets/logo-i.png"
import logoF from "../assets/logo-f.png"

const Home = () => {
    const profile = Data.profile;

    return (
        <article className="home">
            <section className="photo-background">
                <div className="photo-background bakground-f"></div>
                <Carousel fade controls={false} indicators={false}>
                    {
                        profile.map(img => (
                            <Carousel.Item interval={5000} key={img.id}>
                                <div className="photo-profile">
                                    <img src={img.url} alt="photo-andreina" />
                                </div>
                            </Carousel.Item>
                        ))
                    }

                </Carousel>
                <div className="img-networks">
                    <img src={logoI} alt="networks" />
                    <img src={logoF} alt="networks" />
                </div>
            </section>
            <section className="home-description">
                <h2>
                    Sobre mí
                </h2>
                <p>
                    Soy andreina la mejor estetisista!
                </p>
            </section>
        </article>
    );
}

export default Home;
