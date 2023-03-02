import "../styles/banner.css";

function Banner({srcImg,children}) {
    return (
        <div className="banner">
            <img src={srcImg} alt="banner" className="banner" />{children}
        </div>
    );
}

export default Banner;