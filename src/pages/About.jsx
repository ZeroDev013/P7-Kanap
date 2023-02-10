import BannerAbout from '../components/BannerAbout';
import Dropdown from '../components/Dropdown';
import AboutData from '../components/AboutData';

function About() {
  return (
    <>
      <BannerAbout>
      </BannerAbout>
      {AboutData.map((data, about) => {
        return <Dropdown key={about} title={data.title} content={data.content} />
      })}
    </>
  );
}

export default About;

