import BANNERABOUT from "../assets/images/IMG1.jpg";
import "../styles/bannerAbout.css";

function BannerAbout({children}) {
    return (
        <div className="bannerAbout">
            <img src={BANNERABOUT} alt="bannerAbout" className="bannerAbout" />{children}
        </div>
    );
}

export default BannerAbout;