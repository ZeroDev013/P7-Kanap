import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Card from '../components/Card';

import logements from '../logements.json';

import '../styles/body.css';

function Home() {

  return (
    <>
      <Banner>
        <h1><span>Chez vous, &nbsp;</span><span> partout et ailleurs</span></h1>
      </Banner>
      <Gallery>
        {logements.map((logement) => <Card key = {logement.id} dataCard = {logement} />)}
      </Gallery>
    </>
  );
}

export default Home;


