import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white w-90 md:w-2/6 h-4/5 rounded-md shadow-md p-12">
        <div className="text-left flex flex-col md:flex-row items-center mt-2">
          <p className="font-bold text-gray-700 text-2xl">Welcome back to</p>
          <h1 className="text-3xl font-bold text-orange-500 ml-2">
            Sunny Guest House
          </h1>
        </div>
        <p className="text-gray-500 text-lg mt-5">
          Let's get started! Please enter your details.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center mt-20 md:mt-36 mx-auto md:w-4/5"
        >
          <div className="w-full text-left">
            <label className="text-gray-500 text-left ">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              error={errors.password ? true : false}
              {...register("email", {
                required: "*Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <div className="flex justify-between mt-6">
              <label className="text-gray-500 text-left ">Password</label>
              <a className="text-teal-600 text-sm font-semibold cursor-pointer">
                Forgot your Password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2  mb-2 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              error={errors.password ? true : false}
              {...register("password", {
                required: "*Password is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <label className="text-left flex items-center mt-6 cursor-pointer">
              <input type="checkbox" className="form-checkbox h-4 w-4" />
              <span className="ml-2 text-sm font-semibold text-teal-600 cursor-pointer">
                Remember this device
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-transparent"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
