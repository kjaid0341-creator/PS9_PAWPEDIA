import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-icon">🐕</div>

      <h1>404 - Page Not Found</h1>

      <p>
        Oops! This page has wandered off. Let's get you back home.
      </p>

      <Link to="/" className="button primary">
        Go to Home
      </Link>
    </main>
  );
}

export default NotFound;