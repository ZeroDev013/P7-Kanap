import banner from "../assets/images/banner.jpg";
import "../styles/banner.css";

function Banner({children}) {
    return (
        <div className="banner">
            <img src={banner} alt="banner" className="banner" />{children}
        </div>
    );
}

export default Banner;