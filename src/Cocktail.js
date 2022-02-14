import { Link } from 'react-router-dom';

export default function Cocktail({ cocktail }) {
  return (
    <Link to={`/cocktails/${cocktail.id}`}>
      <div>
        <h2>{cocktail.name}</h2>
      </div>
    </Link>
  );
}
