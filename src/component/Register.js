import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from './header';
import { useDispatch } from 'react-redux';
import { login } from '../features/userslice'
import { signIn } from '../features/registerslice';
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterClick = () => {

    navigate("/");
  };

  const handleSignIn = () => {
    if (name === "" || email === "" || password === "") {
      alert("Fill all the Credentials");
    } else if (!isValid) {
      alert("Enter a valid email address");
    } else {

      console.log("good");
    }
  };
  const isValidEmail = (value) => {

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValid(emailRegex.test(value));
  }
  
  function handleSubmit(event) {
    event.preventDefault();

    dispatch(
      signIn({ name, email, password })
      )
      navigate("/home")

  }
  
  return (

    <div>

      {/* For Registeration Menu */}

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register Yourself</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
              <div className="mt-2">
                <input id="name"
                  name="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email"
                  name="email"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value)
                    isValidEmail(e.target.value)
                  }
                  }
                  value={email}
                  autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>

              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  autoComplete="current-password"
                  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button onClick={handleSignIn} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already a Member?&nbsp;
            <button onClick={handleRegisterClick} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</button>
          </p>

        </div>
      </div>

    </div>
  )
}

export default Register