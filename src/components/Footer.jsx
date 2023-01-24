import '../styles/footer.css';
import LOGO from "../assets/images/LOGO.svg";

function Footer({children}) {
    return (
        <div className="footer">
            {children}
            <img src={LOGO} alt="Logo" className="footer__img" />
            <h2>© 2020 Kasa. All rights reserved</h2>
        </div>
        
    );
}

export default Footer;