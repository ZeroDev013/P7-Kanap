import bannerAbout from "../assets/images/bannerAbout.jpg";
import "../styles/bannerAbout.css";

function BannerAbout({children}) {
    return (
        <div className="bannerAbout">
            <img src={bannerAbout} alt="bannerAbout" className="bannerAbout" />
            {children}
        </div>
    );
}

export default BannerAbout;