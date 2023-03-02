import Dropdown from '../components/Dropdown';
import AboutData from '../components/AboutData';
import img from "../assets/images/bannerAbout.jpg";
import Banner from '../components/Banner';

function About() {
  return (
    <>
      <Banner  srcImg={img}/>
      <div className='dropDownGlobal'>
      {AboutData.map((data, about) => {
        return <Dropdown key={about} title={data.title} content={data.content} />
      })}
      </div>
    </>
  );
}

export default About;

