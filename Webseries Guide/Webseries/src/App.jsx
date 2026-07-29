import "./App.css";

const seriesList = [
  {
    title: "Game of Thrones",
    rating: "9.4/10",
    review:
      "A sprawling fantasy epic of family rivalry, dragons, and unpredictable power struggles.",
    platforms: "HBO Max",
    image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
  },
  {
    title: "Breaking Bad",
    rating: "9.5/10",
    review:
      "A chemistry teacher builds a ruthless empire while transforming into a criminal legend.",
    platforms: "Netflix, Amazon Prime Video",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
  },
  {
    title: "Money Heist",
    rating: "8.5/10",
    review:
      "A clever heist thriller with complex characters and high-stakes tension.",
    platforms: "Netflix",
    image: "https://image.tmdb.org/t/p/w500/MoEKaPFHABtA1xKoOteirGaHl1.jpg",
  },
  {
    title: "Stranger Things",
    rating: "9.1/10",
    review:
      "A nostalgic supernatural thriller where kids face monsters and government secrets.",
    platforms: "Netflix",
    image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
  },
  {
    title: "Dark",
    rating: "8.8/10",
    review:
      "A mind-bending time travel mystery that unfolds across generations.",
    platforms: "Netflix",
    image: "https://image.tmdb.org/t/p/w500/z0iCS5Znx7CpoH0HuU6V8Ui0dwt.jpg",
  },
  {
    title: "Loki",
    rating: "8.4/10",
    review:
      "A charismatic twist on the Marvel universe full of time shenanigans and charm.",
    platforms: "Disney Plus",
    image: "https://image.tmdb.org/t/p/w500/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
  },
  {
    title: "A Knight of the Seven Kingdoms",
    rating: "8.7/10",
    review:
      "A charming Westeros chapter with noble duty, humor, and a memorable knightly duel.",
    platforms: "HBO Max",
    image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
  },
  {
    title: "Black Mirror",
    rating: "8.7/10",
    review:
      "Dark, dystopian technology stories that feel eerily relevant for every episode.",
    platforms: "Netflix",
    image: "https://image.tmdb.org/t/p/w500/3RI6iya7wWl5DZ1fJnLxwjw1hmK.jpg",
  },
  {
    title: "The Crown",
    rating: "8.8/10",
    review:
      "A sumptuous historical drama tracing the life and reign of Queen Elizabeth II.",
    platforms: "Netflix",
    image: "https://image.tmdb.org/t/p/w500/4Ur4CgiNf7cLj4EbwaxOKxHSPPh.jpg",
  },
  {
    title: "The Mandalorian",
    rating: "8.6/10",
    review:
      "A lone bounty hunter protects a mysterious child in a stylish Star Wars journey.",
    platforms: "Disney Plus",
    image: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
  },
];

function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Webseries Guide</span>
          <h1>Top 10 Picks for Streaming</h1>
          <p>
            Browse the best shows, ratings, one-sentence reviews, and the
            platforms where they stream.
          </p>
        </div>
      </header>

      <section className="series-grid">
        {seriesList.map((series, index) => (
          <article key={series.title} className="series-card">
            <div className="series-rank">#{index + 1}</div>
            <img
              className="series-image"
              src={series.image}
              alt={`${series.title} poster`}
            />
            <h2>{series.title}</h2>
            <p className="series-review">{series.review}</p>
            <div className="series-meta">
              <span className="series-rating">Rating: {series.rating}</span>
              <span className="series-platforms">
                Platforms: {series.platforms}
              </span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;
