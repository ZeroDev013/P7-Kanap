import Dropdown from '../components/Dropdown';
import AboutData from '../components/AboutData';
import img from "../assets/images/bannerAbout.jpg";
import Banner from '../components/Banner';
import "../styles/about.css";

function About() {
  return (
    <>
      <div className="bannerAbout">
        <Banner srcImg={img} />
      </div>
      <div className='dropDownGlobal'>
        {AboutData.map((data, about) => {
          return <Dropdown key={about} title={data.title} content={data.content} />
        })}
      </div>
    </>
  );
}

export default About;

