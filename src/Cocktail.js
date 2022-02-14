import { Link } from 'react-router-dom';

export default function Cocktail({ cocktail }) {
  return (
    <Link to={`/cocktails/${cocktail.id}`}>
      <div>
        <h3>{cocktail.name}</h3>
        <p>A cocktail made with {cocktail.ingredients}</p>
        <p>
          it is {cocktail.method} and served {cocktail.served}
        </p>
      </div>
    </Link>
  );
}
