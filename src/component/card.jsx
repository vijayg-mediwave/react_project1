const Card = (props) => {
  const { data } = props;

  return (
    <div>
      <div className="card-container grid-cards">
        {data.map((r) => (
          <div>
            <article className="cards" id="article">
              <h2>{r.data.title}</h2>
              <p>{r.data.selftext}</p>
              <a href={r.data.url}>click here to see more</a>

              <main><h5>SCORE:{r.data.score}</h5></main>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
