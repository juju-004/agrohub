"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Logo from "@/components/Logo";

const Register = () => {
  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_HOSTNAME + "register";
  const [loading, setLoading] = useState(false);

  const submitHandler = async ({ email, password, fullname }) => {
    setLoading(true);
    try {
      await axios.post(baseURL, { email, password, fullname });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="mx-auto screen w-screen px-2 flex-col min-h-screen text-center">
      <Logo className={"scale-110 mb-7"} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler({
            email: e.target.email.value,
            password: e.target.password.value,
            fullname: e.target.fullname.value,
          });
        }}
        className="w-full max-w-[420px]"
      >
        <div className="email">
          <label htmlFor="fullname">Fullname</label>
          <div className="sec2">
            <input
              required
              type="text"
              name="fullname"
              placeholder="John Baker"
            />
          </div>
        </div>
        <div className="email">
          <label htmlFor="email">Email Address</label>
          <div className="sec2">
            <input
              required
              type="email"
              name="email"
              placeholder="Username@gmail.com"
            />
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <div className="sec2">
            <input
              required
              type="password"
              name="password"
              placeholder=".................."
            />
          </div>
        </div>
        <button
          disabled={loading}
          className="login disabled:opacity-50 fx opacity-[0.99] hover:opacity-80 duration-200"
        >
          {loading && <span className="loader mr-2"></span>} Signup
        </button>
        <div className="footer text-center flex justify-center w-full">
          <Link
            href={"/login"}
            className="text-sm no-underline text-center cursor-pointer hover:underline"
          >
            Already have an account? Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
