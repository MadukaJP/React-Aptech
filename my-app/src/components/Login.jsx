import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className='auth-container'>
    <h2>Sign In</h2>
    <form>
      <label>
      Username:
          <input type="text" name='username' required />
      </label>
      <label>
        Password:
          <input type="password" name='password' required />
      </label>

      <button type="submit">Sign In</button>
      <p>
          Don't have an account? <Link to="/signup">Log In</Link>
      </p>
    </form>
  </div>
  )
}

export default Login        