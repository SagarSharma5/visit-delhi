import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./LoginSignupPage.css";

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSwitch = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };

  const handleChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === "login") {
      setLoginForm({ ...loginForm, [name]: value });
    } else {
      setSignupForm({ ...signupForm, [name]: value });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (isLogin) {
      if (!loginForm.username) tempErrors.username = "Username is required.";
      if (!loginForm.password) tempErrors.password = "Password is required.";
    } else {
      if (!signupForm.name) tempErrors.name = "Name is required.";
      if (!signupForm.email) tempErrors.email = "Email is required.";
      if (!signupForm.username) tempErrors.username = "Username is required.";
      if (!signupForm.password) tempErrors.password = "Password is required.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission logic
      console.log(isLogin ? loginForm : signupForm);
    }
  };

  return (
    <div className="flex justify-center items-center h-[92.4vh] bg-black text-black">
      <div className="w-full max-w-md p-8 space-y-4 bg-slate-300 rounded-lg shadow-md">
        <CSSTransition
          in={isLogin}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  name="username"
                  value={loginForm.username}
                  onChange={(e) => handleChange(e, "login")}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.username && (
                  <p className="text-red-500 text-xs">{errors.username}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={loginForm.password}
                  onChange={(e) => handleChange(e, "login")}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">{errors.password}</p>
                )}
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
                Login
              </button>
            </form>
          </div>
        </CSSTransition>

        <CSSTransition
          in={!isLogin}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={signupForm.name}
                  onChange={(e) => handleChange(e, "signup")}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={signupForm.email}
                  onChange={(e) => handleChange(e, "signup")}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  name="username"
                  value={signupForm.username}
                  onChange={(e) => handleChange(e, "signup")}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.username && (
                  <p className="text-red-500 text-xs">{errors.username}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={signupForm.password}
                  onChange={(e) => handleChange(e, "signup")}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">{errors.password}</p>
                )}
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
                Sign Up
              </button>
            </form>
          </div>
        </CSSTransition>

        <div className="text-center">
          <button
            onClick={handleSwitch}
            className="text-blue-500 hover:underline"
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
