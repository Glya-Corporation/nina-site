import logoW from "../assets/logo-w.png"

const Contact = () => {
    return (
        <article className="container-contact">
            <h3>Contácto</h3>
            <hr />
            <a target="_blank" href="https://wa.me/593979151566?text=¡Hola%20me%20gusta%20tu%20trabajo%20quiero%20agendar%20una%20cita!"><img src={logoW} alt="Icon whatsapp" className="logo-w" /></a>
            <a target="_blank" href="https://wa.me/593979151566?text=¡Hola%20me%20gusta%20tu%20trabajo%20quiero%20agendar%20una%20cita!">+593 97 915 1566</a>
        </article>
    );
}

export default Contact;
