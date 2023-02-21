import '../styles/footer.css';
import logowWite from "../assets/images/logoWhite.png";

function Footer() {
    return (
        <div className="footer">
            <img src={logowWite} alt="Logo" className="footer__img" />
            <h3>© 2020 Kasa. All rights reserved</h3>
        </div>

    );
}

export default Footer;