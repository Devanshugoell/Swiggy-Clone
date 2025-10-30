import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";
import { useNavigate  , Navigate } from "react-router-dom";

const SignIn = () => {

  const token = localStorage.getItem("token");

  // If token exists, redirect to /restaurant
  if (token) {
    return <Navigate to="/restaurant" replace />;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useContext(AuthContext);
   const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log("This is data before sending" , data)
      const response = await api.post("/auth/login", data);
      console.log("API Response:", response.data);
      if (!response.data.access_token && !response.data.token) {
        throw new Error("No token received from server");
      }
      const token = response.data.access_token || response.data.token;
      login(token); // save to context + localStorage
      navigate("/restaurant");  // redirect
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <div className="text-left mb-6 flex flex-col gap-2">
          <p className="text-2xl sm:text-3xl font-semibold font-montserrat spacing">
            HUNGRY?
          </p>
          <p className="text-gray-500 text-base sm:text-lg">Order food from favourite restaurants near you.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address"
                }
              })}
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="name@example.com"
            />
            {errors.email && (
              <p className="text-orange-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-redColor focus:ring-orange-500"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-orange-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            className="w-full text-orange-500 hover:text-white py-2 text-sm sm:text-base rounded-lg hover:bg-orange-500 transition duration-200 border-orange-500 border-2 font-montserrat !mt-6 font-medium"
          >
            Sign in
          </button>
        </form>

        <p className="text-sm sm:text-base text-gray-600 text-center mt-4">
          Don't have an account?
          <a href="/register" className="text-redColor pl-2 hover:underline hover:text-orange-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
