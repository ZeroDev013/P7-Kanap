import BANNER from "../assets/images/IMG.jpg";
import "../styles/banner.css";

function Banner({children}) {
    return (
        <div className="banner">
            <img src={BANNER} alt="banner" className="banner" />{children}
        </div>
    );
}

export default Banner;