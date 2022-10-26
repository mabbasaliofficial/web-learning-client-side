import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";
import { BsGoogle } from 'react-icons/fa';
import { Button } from "react-bootstrap";

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const signUpHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
        .then(data => {
            const user = data.user;
                console.log(user);
            })
        
    }
  return (
    <div className="w-25 mx-auto border p-4 mt-5 border-secondary rounded">
    <form onSubmit={signUpHandler}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="photoURL" className="form-label">
          Photo URL
        </label>
        <input
          type="text"
          name="photoURL"
          id="photoURL"
          className="form-control"
        />
      </div>
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
        <input type="password" name="password" className="form-control" id="password" />
      </div>
      <button type="submit" className="btn btn-primary d-block mx-auto w-100">
        Sign Up
      </button>
      <div className="mt-3">
      <span>Already have an account? </span>
      <Link to='/login' className="text-decoration-none">Log In</Link>
      </div>
    </form>
    <div>
    <button type="button" class="btn btn-outline-primary mt-5 d-block mx-auto w-100">
        Sign In With Google
      </button>
    <button type="button" class="btn btn-outline-primary mt-1npm d-block mx-auto w-100">
        Sign In With Github
      </button>
    </div>
    </div>
  );
};

export default SignUp;
