import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInFormdata, signInSchema } from "../validations/signIn";
import { Cookies } from "react-cookie";
export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  console.log({ errors });

  const [error, setError] = useState("");
const cookies = new Cookies()

    const navigate = useNavigate();

  const onSubmit = async (data: SignInFormdata) => {
    console.log(data);
    try {
      setError("");
      const res = await axios.post("https://reeduprojectback.onrender.com/auth/sign-in", data);

      console.log(res, "res");
        if (res.status === 200) {
        cookies.set('accessToken',res.data.token,{maxAge:60*60})
          navigate("/");
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
        className="w-full max-w-[400px] bg-gray-100 p-6 rounded-xl flex flex-col gap-3"
      >
        <h1 className="font-semibold text-xl mx-3 my-2">Sign In</h1>
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
        <button className="bg-darkBlue rounded-md p-2 mb-2 text-white hover:bg-[#656EA3] transform transation ease-in-out duration-300 ">
          Sign In
        </button>
        <div>
          <span className="font-normal text-base mx-3 ">
           Dont you have an account?
          </span>
          <Link
            to="/auth/sign-up"
            className="text-darkBlue font-medium text-base hover:text-[#656EA3]  transform transation ease-in-out duration-300 "
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
