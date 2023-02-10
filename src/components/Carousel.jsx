
import logements from '../logements.json';
function Slider() {

    return (
        <div className="fichesLogements">
            {logements.map((logement) => (
                <div className="slider" key={logement.id}>
                    <div className="images">
                        <img src={logement.cover} alt="logement cover" className="images__logementCover" />
                    </div>
                </div>
                
            ))}
        </div>
        
    );
}

export default Slider;