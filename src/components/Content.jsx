import '../styles/host.css';

function Content({ dataContent }) {

  const { title, location, tags } = dataContent;

  return (
    <div className="locations">
      <div className="title">
        <h1 className="title__text">
          {title}
        </h1>
      </div>
      <div className="location">
        <h2 className="location__text">
          {location}
        </h2>
      </div>
      <div className="buttons">
        {
          tags.map((tags, index) =>
            <button key={index}>
              {tags}
            </button>)
        }
      </div>
    </div>
  );
}

export default Content;

