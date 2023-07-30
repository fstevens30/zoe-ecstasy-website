import './App.css';
import InstagramIcon from '@mui/icons-material/Instagram';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>zoe ecstasy</h1>
        <h2>coming soon...</h2>
        <div>
          <a className="App-link" href="https://www.instagram.com/zoeecstasy/" target="_blank" rel="noreferrer">
            <InstagramIcon /><p>instagram</p>
          </a>

          <a className="App-link" href="https://soundcloud.com/zoeecstasy" target="_blank" rel="noreferrer">
            <p>soundcloud</p>
          </a>

          <a className="App-link" href="https://open.spotify.com/artist/6ujW3pX50DpH6Cu9MeX8nq" target="_blank" rel="noreferrer">
            <p>spotify</p>
          </a>

          <a className="App-link" href="https://music.apple.com/nz/artist/zoe-ecstasy/1650651815" target="_blank" rel="noreferrer">
            <p>apple music</p>
          </a>

        </div>
      </header>
    </div>
  );
}

export default App;
