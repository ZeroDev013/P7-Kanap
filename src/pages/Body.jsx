import Banner from '../components/Banner';
import '../styles/body.css';

import Gallery from '../components/Gallery';

import logements from '../logements.json';

import Card from '../components/Card';
import Footer from '../components/Footer';

//.Map créer une boucle for each  "affiche l'image du logement + titre"
function Body() {

  return (
    <>
      <div className="body">
        <Banner>
          <h1><span>Chez vous, &nbsp;</span><span> partout et ailleurs</span></h1>
        </Banner>
        <Gallery>
          {logements.map((logement) => <Card img={logement.cover} title={logement.title} />)}
        </Gallery>
      </div>
      <Footer>
      </Footer>
    </>
  );
}

export default Body;
