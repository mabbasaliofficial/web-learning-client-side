import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Login = () => {
    const {emailSignIn} = useContext(AuthContext);
    const loginHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        emailSignIn(email, password)
        .then((data) => {
            const user = data.user;
            console.log(user);
        })
        .catch((error) => {
            console.log(error.message);
        });
    };
    return (
        <div className="w-25 mx-auto border p-4 mt-5 border-secondary rounded">
        <form onSubmit={loginHandler}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" name='password' />
          </div>
          <button type="submit" className="btn btn-primary d-block mx-auto w-100">
            Log In
          </button>
          <div className="mt-3">
          <span>Are you new? </span>
          <Link to='/signup' className="text-decoration-none">Sign Up</Link>
          </div>
        </form>
        </div>
      );
};

export default Login;