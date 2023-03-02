import '../styles/host.css';

function Content({ dataContent }) {

  const { title, location, tags } = dataContent;

  return (
    <div className="locations">
      <div className='wrap'>
        <h1 className="title__text">
          {title}
        </h1>
        <p className="location__text">
          {location}
        </p>
        <div className="buttons">
          {
            tags.map((tags, index) =>
              <button className="buttons__text"
                key={index}>
                {tags}
              </button>)
          }
        </div>
      </div>
    </div>
  );
}

export default Content;

