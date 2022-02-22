import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { createCocktail } from './services/fetch-utils';

export default function CreatePage() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [method, setMethod] = useState('');
  const [served, setServed] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    await createCocktail({
      name,
      ingredients,
      method,
      served,
    });
    history.push('/cocktails');
  }

  return (
    <div className="form-container">
      <h1>Add a Cocktail</h1>
      <form onSubmit={handleSubmit} className="add-form">
        <label>
          Name
          <input type="text" onChange={(e) => setName(e.target.value)} required name="name" />
        </label>
        <label>
          Ingredients
          <textarea
            type="text"
            onChange={(e) => setIngredients(e.target.value)}
            required
            name="ingredients"
          />
        </label>
        <label>
          Method
          <select
            defaultValue={1}
            onChange={(e) => setMethod(e.target.value)}
            required
            name="method"
          >
            <option value="1" disabled hidden>
              Choose
            </option>
            <option>shaken</option>
            <option>stirred</option>
            <option>built</option>
          </select>
        </label>
        <label>
          Served
          <textarea
            type="text"
            onChange={(e) => setServed(e.target.value)}
            required
            name="served"
          />
        </label>
        <button>Add Cocktail</button>
      </form>
    </div>
  );
}
