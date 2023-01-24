import '../styles/gallery.css';

function Gallery({children}) {
    return (
        <div className="gallery">
            {children}
        </div>
    );
}

export default Gallery;