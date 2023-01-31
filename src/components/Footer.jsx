import '../styles/footer.css';
import LOGO from "../assets/images/LOGO.svg";

function Footer() {
    return (
        <div className="footer">
            <img src={LOGO} alt="Logo" className="footer__img" />
            <h3>© 2020 Kasa. All rights reserved</h3>
        </div>

    );
}

export default Footer;