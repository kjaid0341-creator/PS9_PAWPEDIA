
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

function Home() {
  const [dog, setDog] = useState('');
  const [loading, setLoading] = useState(true);

  async function getDog() {
    setLoading(true);
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await res.json();
      setDog(data.message);
    } catch {
      alert('Failed to load dog!');
    }
    setLoading(false);
  }

  useEffect(() => {
    getDog();
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO PAWPEDIA 🐾</p>
          <h1>Every Dog Has a <span>Story.</span></h1>
          <p className="hero-description">
            Discover dog breeds and their photos.
          </p>

          <div className="hero-buttons">
            <Link to="/breeds" className="button primary">
              Explore Breeds
            </Link>
            <button className="button secondary"
              onClick={getDog} disabled={loading}>
              New Dog 🐕
            </button>
          </div>
        </div>

        <div className="hero-image">
          {loading ? <Loader /> : <img src={dog} alt="Random dog" />}
        </div>
      </section>

      <section className="welcome-section">
        <h2>Explore the World of Dogs</h2>
        <p>Find your favourite breed and discover adorable dogs.</p>
        <Link to="/breeds" className="button primary">
          Discover All Breeds →
        </Link>
      </section>
    </main>
  );
}

export default Home;
