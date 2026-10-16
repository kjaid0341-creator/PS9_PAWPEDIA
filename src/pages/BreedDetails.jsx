
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../components/Loader';

function BreedDetails() {
  const { breed } = useParams();

  const [subBreeds, setSubBreeds] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get breed details and 6 dog images
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);

        const response1 = await fetch(
          `https://dog.ceo/api/breed/${breed}/list`
        );

        const data1 = await response1.json();
        setSubBreeds(data1.message);

        const response2 = await fetch(
          `https://dog.ceo/api/breed/${breed}/images/random/6`
        );

        const data2 = await response2.json();
        setImages(data2.message);
      } catch (error) {
        alert('Unable to load breed details');
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [breed]);

  // Load 6 more images
  async function loadMore() {
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random/6`
      );

      const data = await response.json();

      setImages([...images, ...data.message]);
    } catch (error) {
      alert('Unable to load more images');
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="page-container">
      <Link to="/breeds" className="back-link">
        ← Back to Breeds
      </Link>

      <h1>{breed.toUpperCase()}</h1>

      <h2>Sub-breeds</h2>

      {subBreeds.length > 0 ? (
        subBreeds.map((item) => (
          <span className="subbreed-tag" key={item}>
            {item}
          </span>
        ))
      ) : (
        <p>No sub-breeds available.</p>
      )}

      <h2>Photo Gallery 🐶</h2>

      <p>{images.length} photos loaded</p>

      <div className="photo-grid">
        {images.map((image, index) => (
          <div className="photo-card" key={index}>
            <img
              src={image}
              alt={breed + ' dog'}
            />
          </div>
        ))}
      </div>

      <div className="load-more-container">
        <button className="button primary" onClick={loadMore}>
          Load 6 More Photos
        </button>
      </div>
    </main>
  );
}

export default BreedDetails;
