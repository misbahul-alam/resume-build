import Button from "@/components/widgets/Button";
import Checkbox from "@/components/widgets/Checkbox";
import InputField from "@/components/widgets/InputField";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="bg-slate-100 w-screen min-h-screen content-center">
      <div className="bg-white sm:max-w-lg mx-auto px-8 py-6 rounded-md shadow-sm sm:w-[90vw] min-h-[100vh] sm:min-h-auto">
        <h2 className="text-2xl font-semibold">Welcome back!</h2>
        <p className="text-base text-gray-700 mb-4">
          Please enter your credentials to continue.
        </p>
        <form className="space-y-2">
          <InputField label="Email Address" />
          <InputField label="Password" />
          <div className="flex items-center gap-1 ">
            <Checkbox id="remember" name="remember" />

            <label htmlFor="remember">Remember me</label>
          </div>
          <Button name="LOGIN" className="w-full" />
        </form>
        <p className="text-gray-500 mt-2">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-600 ">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
