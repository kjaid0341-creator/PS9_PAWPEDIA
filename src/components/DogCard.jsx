
import { Link } from 'react-router-dom';

function DogCard(props) {
  return (
    <Link to={'/breeds/' + props.breed} className="breed-card">

      <div className="card-icon">🐶</div>

      <h3>
        {props.breed}
      </h3>

      <p>
        Sub-breeds: {props.subBreedCount}
      </p>

      <span className="view-link">
        Explore breed →
      </span>

    </Link>
  );
}

export default DogCard;
