import { useForm } from "react-hook-form";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

   const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      
    const { confirmPassword: _confirmPassword, ...rest } = data; // prefix with _ to ignore unused var
       // Add default avatar
    const payload = {
      ...rest,
      avatar: "https://picsum.photos/800",
    };
    console.log(payload)
    const response = await api.post("/users", payload);
      console.log("User Registered:", response.data);
      navigate("/"); 
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    }
  };

  // Watch password for confirm password validation
  const password = watch("password");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-4 sm:mb-6 font-montserrat">
          Register
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-orange-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

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
              placeholder="Enter your email"
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
                pattern: {
                  value: /^[A-Za-z0-9]+$/,
                  message: "Password should only contain numbers and letters"
                }
              })}
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-orange-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-orange-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-redColor hover:text-white text-orange-500 hover:bg-orange-500 py-2 text-sm sm:text-base rounded-lg transition duration-200 border-orange-500 border-2 font-montserrat !mt-6 font-medium"
          >
            Register
          </button>
        </form>

        <p className="text-sm sm:text-base text-gray-600 text-center mt-4">
          Already have an account?
          <Link to="/" className="text-redColor pl-2 hover:underline hover:text-orange-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
