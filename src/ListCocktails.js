import { useState, useEffect } from 'react';
import { getCocktails } from './services/fetch-utils';
import Cocktail from './Cocktail';

export default function ListCocktails() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    async function fetchIt() {
      const cocktailList = await getCocktails();
      setCocktails(cocktailList);
    }
    fetchIt();
  }, []);

  return (
    <div>
      {cocktails.map((cocktail, i) => (
        <Cocktail key={cocktail.id + i} cocktail={cocktail} />
      ))}
    </div>
  );
}
