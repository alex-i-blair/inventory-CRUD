import { client, checkError } from './client';

export async function getUser() {
  return client.auth.session();
}

export async function checkAuth() {
  const user = await getUser();
  if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
  if (await getUser()) {
    location.replace('./cocktails');
  }
}

export async function signUpUser(email, password) {
  const response = await client.auth.signUp({ email, password });
  return response.user;
}

export async function signInUser(email, password) {
  const response = await client.auth.signIn({ email, password });
  return response.user;
}

export async function logout() {
  await client.auth.signOut();
  return (window.location.href = '/');
}

export async function getCocktails() {
  const response = await client.from('cocktails').select('*');

  return checkError(response);
}

export async function updateCocktail(id, updatedCocktail) {
  const response = await client.from('cocktails').update(updatedCocktail).match({ id });

  return checkError(response);
}

export async function deleteCocktail(id) {
  const response = await client.from('cocktails').delete().match({ id });

  return checkError(response);
}

export async function getSingleCocktail(id) {
  const response = await client.from('cocktails').select('*').match({ id }).single();

  return checkError(response);
}

export async function createCocktail(cocktail) {
  const response = await client.from('cocktails').insert(cocktail);

  return checkError(response);
}
