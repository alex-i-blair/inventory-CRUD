import { useState } from 'react';
import { signInUser, signUpUser } from './services/fetch-utils';

export default function AuthPage({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    const user = await signInUser(email, password);
    setCurrentUser(user);
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const user = await signUpUser(email, password);
    setCurrentUser(user);
  }

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} required name="email" />
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
          name="password"
        />
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}
