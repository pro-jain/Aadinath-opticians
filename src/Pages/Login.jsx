import React from 'react';

const Login = () => {
  return (
    <section className="page auth">
      <h1>Login</h1>
      <p className="subcopy">Sign in to track orders and book fittings.</p>
      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="primary-btn">
          Continue
        </button>
      </form>
    </section>
  );
};

export default Login;
