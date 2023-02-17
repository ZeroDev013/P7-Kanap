import '../styles/host.css';

function Content({ dataContent }) {

  const { title, location, tags } = dataContent;

  return (
    <div className="container__left">
      <div className="title">
        <h1 className="title__text"> {title} </h1>
      </div>
      <div className="location">
        <h2 className="location__text"> {location} </h2>
      </div>
      <div className="buttons">
        <button><p className='tags'>{tags[0]}</p></button>
        <button><p className='tags'>{tags[1]}</p></button>
        <button><p className='tags'>{tags[2]}</p></button>
      </div>
    </div>
  );
}

export default Content;

