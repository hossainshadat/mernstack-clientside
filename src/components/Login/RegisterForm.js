import React from "react";
import { useContext } from "react";
import { AuthContext } from "./../../contexts/AuthProvider";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const { createUser, updateNamePhoto } = useContext(AuthContext);
  console.log(createUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.username.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // Create Acc
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateNamePhoto(name, photoURL).then(() => {
          toast.success("Name and Photo Updated");
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <form
            onSubmit={handleSubmit}
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-400">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="Photo Url" className="block dark:text-gray-400">
                Photo Url
              </label>
              <input
                type="text"
                name="photoURL"
                id="Photo Url"
                placeholder="Photo Url"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block dark:text-gray-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-400">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="Submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Register
              </button>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <p className="text-xs text-center sm:px-6 dark:text-gray-400">
            Alreadey Registered ?
            <a
              rel="noopener noreferrer"
              href="#"
              className=" dark:text-gray-100"
            >
              {" "}
              Click Log In Button
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
