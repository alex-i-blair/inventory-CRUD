import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getSingleCocktail } from './services/fetch-utils';

export default function Details() {
  const [cocktail, setCocktail] = useState({});
  const match = useRouteMatch();

  useEffect(() => {
    async function fetchIt() {
      const getCocktail = await getSingleCocktail(match.params.id);
      setCocktail(getCocktail);
    }
    fetchIt();
  }, [match]);

  return (
    <div className="details">
      <h3>{cocktail.name}</h3>
      <p>
        A cocktail made with: <br></br>
        {cocktail.ingredients}
      </p>
      <p>
        It is {cocktail.method} and served {cocktail.served}
      </p>
    </div>
  );
}
