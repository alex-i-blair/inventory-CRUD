import './App.css';
import { useState, useEffect } from 'react';
import { getUser, logout } from './services/fetch-utils';
import { BrowserRouter as Router, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import AuthPage from './AuthPage';
import CreatePage from './CreatePage';
import ListCocktails from './ListCocktails';
import Details from './Details';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));

  async function handleLogout() {
    logout();
    setCurrentUser('');
  }

  useEffect(() => {
    async function getUserObject() {
      const data = await getUser();
      setCurrentUser(data);
    }
    getUserObject();
  }, []);

  return (
    <div className="App">
      <Router>
        <header>
          {currentUser && (
            <>
              <NavLink to="/cocktails">Cocktail List</NavLink>
              <NavLink to="/create">Create Page</NavLink>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {currentUser ? (
                <Redirect to="/cocktails" />
              ) : (
                <AuthPage setCurrentUser={setCurrentUser} />
              )}
            </Route>
            <Route exact path="/cocktails">
              {!currentUser ? <Redirect to="/" /> : <ListCocktails />}
            </Route>
            <Route exact path="/create">
              {currentUser ? <CreatePage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/cocktails/:id">
              {currentUser ? <Details /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
