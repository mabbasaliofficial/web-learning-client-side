import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";

const SignUp = () => {
  const { createUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const signUpHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((data) => {
        const user = data.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const googleHandler = () => {
    googleSignIn()
      .then((data) => {
        const user = data.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const githubHandler = () => {
    githubSignIn()
      .then((data) => {
        const user = data.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="w-25 mx-auto border p-4 mt-5 border-secondary rounded">
      <form onSubmit={signUpHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input type="text" name="name" id="name" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="photoURL" className="form-label">
            Photo URL
          </label>
          <input type="text" name="photoURL" id="photoURL" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" name="email" id="email" className="form-control" />
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
        <div>
          <button
            type="button"
            onClick={googleHandler}
            class="btn btn-outline-primary mt-2 d-block mx-auto w-100"
          >
            Sign In With Google
          </button>
          <button
            onClick={githubHandler}
            type="button"
            class="btn btn-outline-primary mt-1 d-block mx-auto w-100"
          >
            Sign In With Github
          </button>
        </div>
        <div className="mt-3">
          <span>Already have an account? </span>
          <Link to="/login" className="text-decoration-none">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
