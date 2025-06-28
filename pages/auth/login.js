import Navbar from '../../components/Navbar';

export default function Login() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required /><br />
          <input type="password" placeholder="Password" required /><br />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/auth/register">Register</a></p>
      </main>
    </>
  );
}
