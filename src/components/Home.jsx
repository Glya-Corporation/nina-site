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
                    <a target="_blank" href="https://www.instagram.com/ninaabozo/"><img src={logoI} alt="networks" /></a>
                    <a target="_blank" href=""><img src={logoF} alt="networks" /></a>
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
