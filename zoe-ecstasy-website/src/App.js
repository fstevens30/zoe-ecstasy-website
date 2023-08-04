import './App.css';
import Header from './components/header/header.js';
import Social from './components/social-links/social.js';
import Listen from './components/listen/listen.js';
import Songs from './components/songs/songs.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Social />
      <Listen />
      <Songs />
      <Footer />
    </div>
  );
}

export default App;
