"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import Logo from "@/components/Logo";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async ({ email, password }) => {
    setLoading(true);
    try {
      await axios.post("/api/login", { email, password });

      router.push("/");
    } catch (error) {
      setError(error.response.data);
    }
    setLoading(false);
  };

  return (
    <div className="mx-auto screen w-screen px-2 flex-col min-h-screen text-center ">
      <Logo className={"scale-110 mb-7"} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler({
            email: e.target.email.value,
            password: e.target.password.value,
          });
        }}
        className="max-w-[420px] w-full relative"
      >
        {error && (
          <span className="text-red-600 absolute top-0.5 inset-x-0 text-center">
            {error}
          </span>
        )}
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
          {loading && <span className="loader mr-2"></span>} Login
        </button>
        <div className="footer text-center flex justify-center w-full">
          <Link
            href={"/register"}
            className="text-sm text-center cursor-pointer no-underline hover:underline"
          >
            Dont have an account? Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
