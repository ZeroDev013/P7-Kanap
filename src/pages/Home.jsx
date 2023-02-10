//components
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Card from '../components/Card';

//import data logements
import logements from '../logements.json';

//import css body
import '../styles/home.css';

//Affiche le texte
//Affiche l'image et le titre du logement
function Home() {

  return (
    <>
      <Banner>
        <h1><span>Chez vous, &nbsp;</span><span> partout et ailleurs</span></h1>
      </Banner>
      <Gallery>
        {logements.map((logement) => <Card key = {logement.id} data = {logement} />)}
      </Gallery>
    </>
  );
}

export default Home;


