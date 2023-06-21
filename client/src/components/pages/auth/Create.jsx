import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "./AuthApiSlice";

const Create = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();

  const onSubmit = async (data) => {
    const payload = { ...data };
    try {
      console.log(payload);
      if (payload.password === payload.confirmPassword) {
        console.log("passwords match");
        console.log(payload);
        const response = await registerUser(payload);
        if (response) {
          navigate("/login");
        } else {
          console.log("error");
        }
      } else {
        console.log("passwords don't match");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <img
        className="w-full object-cover h-screen "
        src="background4.jpg"
        alt="hero"
      />
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center ">
        <div className="bg-white w-80 md:w-1/3 h-auto rounded-md shadow-md p-5 md:p-10">
          <div className="text-left flex flex-col items-center">
            <p className="font-semibold text-gray-700 text-2xl">
              Welcome back to
            </p>
            <h1 className="text-2xl font-bold text-orange-500 ml-2">
              Sunny Guest House
            </h1>
            <p className="text-gray-500 text-md mt-5">
              Let's get started by creating an Account.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center  mt-8 md:mt-12 mx-auto md:w-4/5"
          >
            <div className="w-full text-left">
              <div className="flex flex-col">
                <label className="text-gray-500 text-left">User name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    error={errors.username ? true : false}
                    {...register("username", {
                      required: "*Username is required",
                    })}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-500 text-left">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    error={errors.email ? true : false}
                    {...register("email", {
                      required: "*Email is required",
                    })}
                  />
                </div>
              </div>

              <div className="flex flex-col mt-2">
                <label className="text-gray-500 text-left ">Password</label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full border border-gray-300 rounded-md px-4 py-2  mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  error={errors.password ? true : false}
                  {...register("password", {
                    required: "*Password is required",
                  })}
                />
              </div>
              <div className="flex flex-col mt-2">
                <label className="text-gray-500 text-left ">
                  Confirm Password
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="w-full border border-gray-300 rounded-md px-4 py-2  mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  error={errors.password ? true : false}
                  {...register("confirmPassword", {
                    required: "*Password is required",
                  })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-teal-600 font-bold hover:bg-teal-600 text-white w-full px-4 py-2 mt-6 rounded-md focus:ring-2 focus:ring-teal-700 ring-offset-2 outline-none focus:bg-teal-700 focus:shadow-lg"
            >
              Create User 
            </button>
          <p className="text-gray-700 mt-3">Already have an account?  <button onClick={()=>{navigate('/login')} } >Login </button></p>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Create;
