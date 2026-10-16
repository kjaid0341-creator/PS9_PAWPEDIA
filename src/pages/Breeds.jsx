
import { useState, useEffect } from 'react';
import DogCard from '../components/DogCard';
import Loader from '../components/Loader';

function Breeds() {
  const [breeds, setBreeds] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // Get all breeds from the API
  useEffect(() => {
    async function getBreeds() {
      try {
        const response = await fetch(
          'https://dog.ceo/api/breeds/list/all'
        );

        const data = await response.json();

        const breedNames = Object.keys(data.message);

        const breedList = [];

        for (let i = 0; i < breedNames.length; i++) {
          const name = breedNames[i];

          breedList.push({
            name: name,
            subBreedCount: data.message[name].length
          });
        }

        setBreeds(breedList);
      } catch (error) {
        alert('Unable to load dog breeds');
      } finally {
        setLoading(false);
      }
    }

    getBreeds();
  }, []);

  // Search breeds by name
  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="page-container">
      <h1>Explore Dog Breeds 🐾</h1>

      <p>Find your favourite dog breed.</p>

      {/* Search box */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search a breed..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <p>
        Showing {filteredBreeds.length} of {breeds.length} breeds
      </p>

      {/* Display breed cards */}
      {filteredBreeds.length > 0 ? (
        <div className="breed-grid">
          {filteredBreeds.map((breed) => (
            <DogCard
              key={breed.name}
              breed={breed.name}
              subBreedCount={breed.subBreedCount}
            />
          ))}
        </div>
      ) : (
        <p>No breeds found. Try another name.</p>
      )}
    </main>
  );
}

export default Breeds;
