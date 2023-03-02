import Banner from '../components/Banner';
import Card from '../components/Card';
import homeBanner from "../assets/images/banner.jpg";
import logements from '../logements.json';
import '../styles/home.css';

function Home() {

  return (
    <>
      <Banner srcImg={homeBanner}>
        <h1 className='titleBanner'><span>Chez vous, &nbsp;</span><span> partout et ailleurs</span></h1>
      </Banner>
      <div className="gallery">
      {logements.map((logement) =>
          <Card key={logement.id}
            dataCard={logement} />)}
        </div>
    </>
  );
}

export default Home;


