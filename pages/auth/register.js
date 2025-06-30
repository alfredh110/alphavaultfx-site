export default function Register() {
  return (
    <main style={{ padding: '2rem' }}>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Name" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/auth/login">Login</a></p>
    </main>
  );
}
