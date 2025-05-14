import './App.css';

const games = [
  {
    title: "DAWN DASH",
    description: "Experience the thrill of high-speed parkour in Dawn Dash, an endless runner where precision and reflexes are key!",
    link: "https://play.google.com/store/apps/details?id=com.ThirteenBitStudio.DawnDash",
    image: "/images/game1.png"
  },
  {
    title: "DIAMOND DASH",
    description: "Take on the thrilling challenge of an endless zigzag road in this fast-paced infinite runner!",
    link: "https://play.google.com/store/apps/details?id=com.ThirteenBitStudio.DiamondDash",
    image: "/images/game2.png"
  },
  {
    title: "GALACTIC DEFENDER",
    description: "Dodge meteors, destroy enemy spaceships, and take on powerful bosses in this fast-paced arcade game. Test your reflexes, collect power-ups, and push your skills to the limit as you chase the highest score.",
    link: "https://play.google.com/store/apps/details?id=com.ThirteenBitStudio.GalacticDefender",
    image: "/images/game3.png"
  }
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>GAME PORTFOLIO</h1>
        <p className="subtitle">Crafted with passion. Built for fun.</p>
      </header>

      <div className="games">
        {games.map((game, index) => (
          <a href={game.link} target="_blank" rel="noopener noreferrer" className="game-card" key={index}>
            <img src={game.image} alt={game.title} />
            <h2>{game.title}</h2>
            <p>{game.description}</p>
          </a>
        ))}
      </div>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>If you would like to get in touch or have any questions, feel free to reach out to me:</p>
        <ul>
          <li>
            <a href="mailto:adityakane2688@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hithereaditya" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aditya-kane-6428362b7/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Aditya Kane</p>
      </footer>
    </div>
  );
}

export default App;
