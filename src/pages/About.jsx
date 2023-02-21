import BannerAbout from '../components/BannerAbout';
import Dropdown from '../components/Dropdown';
import AboutData from '../components/AboutData';

function About() {
  return (
    <>
      <BannerAbout>
      </BannerAbout>
      <div className='dropDownGlobal'>
      {AboutData.map((data, about) => {
        return <Dropdown key={about} title={data.title} content={data.content} />
      })}
      </div>
    </>
  );
}

export default About;

