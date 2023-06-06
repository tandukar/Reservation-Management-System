import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "./AuthApiSlice";

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const onSubmit = async (data) => {
    const payload = { ...data };
    console.log(payload);
    try {
      const response = await login(payload);
      console.log(response);
      //   if (response.error.originalStatus === 200) {
      //     toast.success("OTP Verified");
      //     setTimeout(() => {
      //       navigate("/resetPassword");
      //     }, 1000);
      // }
      //   else{
      //     toast.error("Invalid OTP");
      //   }
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
              Let's get started! Please enter your details.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center  mt-8 md:mt-12 mx-auto md:w-4/5"
          >
            <div className="w-full text-left">
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

              <div className="flex justify-between mt-4 md:mt-6">
                <label className="text-gray-500 text-left ">Password</label>
                <a
                  onClick={() => {
                    navigate("/send-otp");
                  }}
                  className="text-teal-600 text-sm font-semibold cursor-pointer"
                >
                  Forgot your Password?
                </a>
              </div>
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

              <label className="text-left flex items-center mt-4 cursor-pointer">
                <input type="checkbox" className="form-checkbox h-4 w-4" />
                <span className="ml-2 text-sm font-semibold text-teal-600 cursor-pointer">
                  Remember this device
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="bg-teal-600 font-bold hover:bg-teal-600 text-white w-full px-4 py-2 mt-6 rounded-md focus:ring-2 focus:ring-teal-700 ring-offset-2 outline-none focus:bg-teal-700 focus:shadow-lg"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>

    // <div className="relative">
    //   <div className="absolute inset-0 z-0">
    //     <img
    //       className="w-full h-full object-cover"
    //       src="background.jpg"
    //       alt="background"
    //     />
    //     <div className="absolute inset-0 bg-gray-100 min-h-screen flex justify-center items-center">
    //       {/* <div className="bg-gray-100 min-h-screen flex justify-center items-center"> */}
    //       <div className="bg-white w-80 md:w-1/3 h-auto rounded-md shadow-md p-5 md:p-10">
    //         <div className="text-left flex flex-col items-center">
    //           <p className="font-semibold text-gray-700 text-2xl">
    //             Welcome back to
    //           </p>
    //           <h1 className="text-2xl font-bold text-orange-500 ml-2">
    //             Sunny Guest House
    //           </h1>
    //           <p className="text-gray-500 text-md mt-5">
    //             Let's get started! Please enter your details.
    //           </p>
    //         </div>

    //         <form
    //           onSubmit={handleSubmit(onSubmit)}
    //           className="flex flex-col justify-center items-center  mt-8 md:mt-12 mx-auto md:w-4/5"
    //         >
    //           <div className="w-full text-left">
    //             <div className="flex flex-col">
    //               <label className="text-gray-500 text-left">Email</label>
    //               <div className="relative">
    //                 <input
    //                   type="email"
    //                   name="email"
    //                   id="email"
    //                   className="w-full border border-gray-300 rounded-md px-4 py-2 mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
    //                   error={errors.email ? true : false}
    //                   {...register("email", {
    //                     required: "*Email is required",
    //                   })}
    //                 />
    //               </div>
    //             </div>

    //             <div className="flex justify-between mt-4 md:mt-6">
    //               <label className="text-gray-500 text-left ">Password</label>
    //               <a
    //                 onClick={() => {
    //                   navigate("/send-otp");
    //                 }}
    //                 className="text-teal-600 text-sm font-semibold cursor-pointer"
    //               >
    //                 Forgot your Password?
    //               </a>
    //             </div>
    //             <input
    //               type="password"
    //               name="password"
    //               id="password"
    //               className="w-full border border-gray-300 rounded-md px-4 py-2  mb-1 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
    //               error={errors.password ? true : false}
    //               {...register("password", {
    //                 required: "*Password is required",
    //               })}
    //             />

    //             <label className="text-left flex items-center mt-4 cursor-pointer">
    //               <input type="checkbox" className="form-checkbox h-4 w-4" />
    //               <span className="ml-2 text-sm font-semibold text-teal-600 cursor-pointer">
    //                 Remember this device
    //               </span>
    //             </label>
    //           </div>

    //           <button
    //             type="submit"
    //             className="bg-teal-600 font-bold hover:bg-teal-600 text-white w-full px-4 py-2 mt-6 rounded-md focus:ring-2 focus:ring-teal-700 ring-offset-2 outline-none focus:bg-teal-700 focus:shadow-lg"
    //           >
    //             Log in
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
