import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpFormdata, signupSchema } from "../validations/signUp";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });
  console.log({ errors });

  const [error, setError] = useState("");

    const navigate = useNavigate();

  const onSubmit = async (data: SignUpFormdata) => {
    console.log(data);
    try {
      setError("");
      const res = await axios.post("http://localhost:3000/auth/sign-up", data);

      console.log(res, "res");
        if (res.status === 201) {
          navigate("/auth/sign-in");
        }
    } catch (e: any) {
      setError(e.response?.data?.message || "Something went wrong");
      // console.log(error)
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white text-darkBlue">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[400px] bg-gray-100 p-6 rounded-xl flex flex-col gap-4"
      >
        <h1 className="font-semibold text-xl mx-3 my-2">Sign Up</h1>
        <input
          type="text"
          placeholder="fullName"
          className="px-4 py-2 rounded-md"
          {...register("fullName")}
        />
        <p className="italic text-red mx-3">{errors.fullName?.message}</p>
        <input
          type="text"
          placeholder="email"
          className="px-4 py-2 rounded-md"
          {...register("email")}
        />
        <p className="italic text-red mx-3">{errors.email?.message}</p>
        <input
          type="password"
          className="px-4 py-2 rounded-md"
          placeholder="password"
          {...register("password")}
        />
        <p className="italic text-red mx-3">{errors.password?.message}</p>
        <p className="italic text-red mx-3">{error}</p>
        <button className="bg-darkBlue rounded-md p-2 my-2 text-white hover:bg-[#656EA3] transform transation ease-in-out duration-300 ">
          Sign Up
        </button>
        <div>
          <span className="font-normal text-base mx-3 ">
            Already have account?
          </span>
          <Link
            to="/auth/sign-in"
            className="text-darkBlue font-medium text-base hover:text-[#656EA3]  transform transation ease-in-out duration-300 "
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
