import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div id="my_modal_3" className="modal-box relative bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button for the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

            <h3 className="font-bold text-lg text-center">Sign Up Here!</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span><br />
              <input 
                type="text" 
                placeholder="Enter Your Full Name" 
                className="w-80 px-3 py-1 border rounded-md outline-none" 
                {...register("name", { required: true })} 
              />
              <br />
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div className="mt-4 space-y-2">
              <span>Email</span><br />
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="w-80 px-3 py-1 border rounded-md outline-none" 
                {...register("email", { required: true })} 
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Set Password</span><br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            
            {/* Signup Button */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Sign Up</button>
              <p>Already Registered? <Link to="/" className="underline text-blue-500 cursor-pointer">Please Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;