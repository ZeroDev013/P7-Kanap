import '../styles/gallery.css';

function Gallery({children}) {
    return (
        <div className="gallery">
            {children}
            <div className="cards">
                <div className="=cards__card">
                </div>
            </div>
        </div>
    );
}

export default Gallery;