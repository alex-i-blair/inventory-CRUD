import './App.css';
import { useState, useEffect } from 'react';
import { getUser, logout } from './services/fetch-utils';
import { BrowserRouter as Router, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import AuthPage from './AuthPage';

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
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
