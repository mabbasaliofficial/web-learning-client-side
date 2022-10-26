import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="w-25 mx-auto border p-4 mt-5 border-secondary rounded">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
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