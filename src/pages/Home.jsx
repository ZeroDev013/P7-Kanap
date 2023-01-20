import Banner from '../components/Banner';
import '../styles/home.css';

import Gallery from '../components/Gallery';

/* import Card from '../components/Card'; */

function Home() {
  return (
    <>
      <div class="home">
        <Banner>
          <h1><span>Chez vous, &nbsp;</span><span> partout et ailleurs</span></h1>
        </Banner>
        <Gallery>
          {/* <Card>
          </Card> */}
        </Gallery>
      </div>
    </>
  );
}

export default Home;
