import Button from "@/components/widgets/Button";
import Checkbox from "@/components/widgets/Checkbox";
import InputField from "@/components/widgets/InputField";
import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <div className="bg-slate-100 w-screen min-h-screen content-center">
      <div className="bg-white sm:max-w-lg mx-auto px-8 py-6 rounded-md shadow-sm sm:w-[90vw] min-h-[100vh] sm:min-h-auto">
        <h2 className="text-2xl font-semibold">Create an account</h2>
        <p className="text-base text-gray-700 mb-4">
          Please fill in the details below to create a new account.
        </p>
        <form className="space-y-2">
          <InputField label="Full Name" required={true} />
          <InputField label="Email Address" />
          <InputField label="Password" />
          <InputField label="Confirm Password" />
          <div className="flex items-center gap-1 ">
            <Checkbox id="agree" name="agree" required={true} />

            <label htmlFor="agree">I agree to the terms and conditions</label>
          </div>
          <Button name="CREATE ACCOUNT" className="w-full" />
        </form>
        <p className="text-gray-500 mt-2">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
