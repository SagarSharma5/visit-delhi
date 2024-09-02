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
    confirmPassword: "",
    dateOfBirth: "",
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
      if (!signupForm.name || !/^[A-Za-z\s]{3,}$/.test(signupForm.name)) {
        tempErrors.name = "Name must contain at least 3 alphabetic characters.";
      }
      if (
        !signupForm.email ||
        !/^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/.test(
          signupForm.email
        )
      ) {
        tempErrors.email = "Invalid email format.";
      }
      if (!signupForm.username) tempErrors.username = "Username is required.";
      if (
        !signupForm.password ||
        signupForm.password.length < 8 ||
        !/\d/.test(signupForm.password) ||
        !/[A-Za-z]/.test(signupForm.password)
      ) {
        tempErrors.password =
          "Password must be at least 8 characters long and contain both letters and numbers.";
      }
      if (signupForm.password !== signupForm.confirmPassword) {
        tempErrors.confirmPassword = "Passwords do not match.";
      }
      if (
        !signupForm.dateOfBirth ||
        !/^(\d{4})-(\d{2})-(\d{2})$/.test(signupForm.dateOfBirth)
      ) {
        tempErrors.dateOfBirth = "Date of birth must be in YYYY-MM-DD format.";
      } else {
        const today = new Date();
        const birthDate = new Date(signupForm.dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (
          monthDifference < 0 ||
          (monthDifference === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }
        if (age < 18) {
          tempErrors.dateOfBirth = "You must be at least 18 years old.";
        }
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission logic
      alert("Form submitted successfully!");
      console.log(isLogin ? loginForm : signupForm);
    }
  };

  const inputClassName = (field) => {
    if (errors[field]) return "border-red-500"; // Red border if there's an error
    if (signupForm[field] && !errors[field]) return "border-green-500"; // Green border if there's no error and the field is filled
    return "border-gray-300"; // Default border color
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
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${inputClassName(
                    "username"
                  )}`}
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
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${inputClassName(
                    "password"
                  )}`}
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
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${inputClassName(
                    "name"
                  )}`}
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
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${inputClassName(
                    "email"
                  )}`}
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
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${inputClassName(
                    "username"
                  )}`}
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
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${inputClassName(
                    "password"
                  )}`}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">{errors.password}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={signupForm.confirmPassword}
                  onChange={(e) => handleChange(e, "signup")}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${inputClassName(
                    "confirmPassword"
                  )}`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={signupForm.dateOfBirth}
                  onChange={(e) => handleChange(e, "signup")}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${inputClassName(
                    "dateOfBirth"
                  )}`}
                />
                {errors.dateOfBirth && (
                  <p className="text-red-500 text-xs">{errors.dateOfBirth}</p>
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
