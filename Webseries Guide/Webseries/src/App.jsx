import "./App.css";

const seriesList = [
  {
    title: "Breaking Bad",
    rating: "9.5/10",
    review:
      "A chemistry teacher builds a ruthless empire while transforming into a criminal legend.",
    platforms: "Netflix, Amazon Prime Video",
  },
  {
    title: "Stranger Things",
    rating: "9.1/10",
    review:
      "A nostalgic supernatural thriller where kids face monsters and government secrets.",
    platforms: "Netflix",
  },
  {
    title: "The Crown",
    rating: "8.8/10",
    review:
      "A sumptuous historical drama tracing the life and reign of Queen Elizabeth II.",
    platforms: "Netflix",
  },
  {
    title: "Black Mirror",
    rating: "8.7/10",
    review:
      "Dark, dystopian technology stories that feel eerily relevant for every episode.",
    platforms: "Netflix",
  },
  {
    title: "Money Heist",
    rating: "8.5/10",
    review:
      "A clever heist thriller with complex characters and high-stakes tension.",
    platforms: "Netflix",
  },
  {
    title: "The Mandalorian",
    rating: "8.6/10",
    review:
      "A lone bounty hunter protects a mysterious child in a stylish Star Wars journey.",
    platforms: "Disney Plus",
  },
  {
    title: "Succession",
    rating: "8.8/10",
    review:
      "A razor-sharp family drama about power, legacy, and ruthless corporate warfare.",
    platforms: "HBO Max",
  },
  {
    title: "The Witcher",
    rating: "8.2/10",
    review:
      "A fantasy adventure packed with monsters, magic, and a complex destiny.",
    platforms: "Netflix",
  },
  {
    title: "Dark",
    rating: "8.8/10",
    review:
      "A mind-bending time travel mystery that unfolds across generations.",
    platforms: "Netflix",
  },
  {
    title: "Loki",
    rating: "8.4/10",
    review:
      "A charismatic twist on the Marvel universe full of time shenanigans and charm.",
    platforms: "Disney Plus",
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
