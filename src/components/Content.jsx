import '../styles/host.css';

function Content({ dataContent }) {

  const { title, location, tags } = dataContent;

  return (
    <div className="container__left">
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
          tags.map(tags =>
            <button>
              <p className='tags'>
                {tags}
              </p>
            </button>)
        }
      </div>
    </div>
  );
}

export default Content;

