"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
  password: Yup.string().required("Please enter your password"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your correct email address"),
});

const Login = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors, resetForm }) => {
      setSubmitting(true);

      try {
        const response = await axios.post(
          "https://blogtest.courierplus-ng.site/api/login",
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          router.push("/dashboard");
          resetForm();
        } else {
          setErrors({ password: "Invalid email or password" });
        }
      } catch (error) {
        setErrors({ password: "An error occurred. Please try again." });
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="w-3/4 md:w-96 bg-white p-8 rounded-lg shadow-md"
      >
        <h1 className="text-2xl mb-4">Sign In</h1>

        <div className="mb-3 md:mb-5">
          <input
            type="text"
            name="email"
            placeholder="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={`block w-full py-2 px-3 text-sm text-[#1c2125] border-0 outline-none ring-[1.3px] ring-inset placeholder:text-[#8C94A3] placeholder:text-xs lg:placeholder:text-sm 2xl:placeholder:text-base 2xl:text-base focus:ring-[1.6px] focus:ring-inset rounded-md ${
              formik.errors.email && formik.touched.email
                ? "ring-[#ff8585] focus:ring-[#ff8585]"
                : "ring-gray-400 focus:ring-gray-600"
            }`}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-[#fc4f4f] mt-[0.7px] text-xs xl:text-sm 2xl:text-base">
              {formik.errors.email}
            </p>
          )}
        </div>
        <div className="mb-3 md:mb-5">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={`block w-full py-2 px-3 text-sm text-[#1c2125] border-0 outline-none ring-[1.3px] ring-inset placeholder:text-[#8C94A3] placeholder:text-xs lg:placeholder:text-sm 2xl:placeholder:text-base 2xl:text-base focus:ring-[1.6px] focus:ring-inset  rounded-md ${
              formik.errors.password && formik.touched.password
                ? "ring-[#ff8585] focus:ring-[#ff8585]"
                : "ring-gray-400 focus:ring-gray-600"
            }`}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-[#fc4f4f] mt-[0.7px] text-xs xl:text-sm 2xl:text-base">
              {formik.errors.password}
            </p>
          ) : null}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="py-2 px-5 text-xs md:text-sm font-semibold text-white bg-gray-800 rounded-full transition-all duration-200 ease-linear hover:bg-gray-900 cursor-pointer"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Please wait..." : "Sign in"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
