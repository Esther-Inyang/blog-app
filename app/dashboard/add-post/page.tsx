"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef, useState, useEffect } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";
// import ProtectedRoute from "@/components/auths-context/ProtectedRoute";

const AddPost: React.FC = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const imageUploadRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = () => {
    if (imageUploadRef.current) {
      imageUploadRef.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // if (file && file.size > 2 * 1024 * 1024) {
    //   // 2MB limit
    //   alert("File size exceeds 2MB");
    //   return;
    // }

    if (file && !["image/jpeg", "image/png"].includes(file.type)) {
      alert("Invalid file type. Only JPG and PNG are allowed.");
      return;
    }

    if (file) {
      formik.setFieldValue("upload_img", file);
      // preview URL
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
    if (imageUploadRef.current) {
      imageUploadRef.current.value = "";
    }
  };

  useEffect(() => {
    // clean up preview URL when component unmounts
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const formik = useFormik({
    initialValues: {
      title: "",
      upload_img: null as File | null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Please enter your title"),
      upload_img: Yup.string().required("Please upload a cover image"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });

  return (
    // <ProtectedRoute>
    <div className="h-screen pt-10 pb-20 px-5 md:p-10">
      <form onSubmit={formik.handleSubmit} className="pb-10 flex flex-col">
        <div className="md:w-[90%] lg:w-[60%] mx-auto pt-5 pb-10 px-7 md:py-5 lg:px-10 bg-gray-50 rounded-md shadow-md">
          <h2 className="text-lg 2xl:text-xl text-gray-800 font-semibold">
            Add a New Post
          </h2>
          <div className="mt-3 md:mt-5">
            <div className="w-full mt-1 md:mt-2 py-10 md:p-10 border-[1.3px] border-gray-300 rounded-md grid place-content-center bg-white shadow-md">
              <div className="flex flex-col items-center">
                <div onClick={handleImageUpload}>
                  <IoCloudUploadOutline className="text-gray-700 text-2xl" />
                </div>
                <input
                  type="file"
                  name="upload_img"
                  ref={imageUploadRef}
                  onChange={handleImageChange}
                  onBlur={formik.handleBlur}
                  accept=".jpg,.png"
                  className="w-[80%] h-full hidden"
                />

                <p
                  onClick={handleImageUpload}
                  className="mt-1 text-xs md:text-sm text-gray-700 font-medium cursor-pointer transition-all duration-200 ease-linear hover:text-gray-800 xl:text-base"
                >
                  {previewUrl
                    ? "Click to upload a different cover image"
                    : "Click to Upload a cover image"}
                </p>
                <p className="mt-1 text-xs xl:text-sm text-gray-400">
                  JPG or PNG (max 2mb)
                </p>
                {formik.values.upload_img && previewUrl && (
                  <div className="mt-2">
                    <p className="mb-2 text-sm text-center text-gray-600 font-medium">
                      Preview
                    </p>
                    <Image
                      src={previewUrl}
                      alt="Preview"
                      width={200}
                      height={200}
                      priority
                      className="max-w-[200px] max-h-[200px] object-contain rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
            {formik.touched.upload_img && formik.errors.upload_img ? (
              <p className="text-[#fc4f4f] mt-[0.7px] text-xs xl:text-sm 2xl:text-base">
                {formik.errors.upload_img}
              </p>
            ) : null}
          </div>

          <div className="mt-5">
            <label className="text-base text-gray-900 font-normal">Title</label>
            <input
              name="title"
              type="text"
              placeholder="Enter your title here"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              className={`block w-full mt-1.5 py-2 px-3 text-[14px] text-[#1c2125] border-0 outline-none ring-[1.3px] ring-inset placeholder:text-[#8C94A3] placeholder:text-xs md:placeholder:text-sm focus:ring-[1.6px] focus:ring-inset rounded-md shadow-md ${
                formik.errors.title && formik.touched.title
                  ? "ring-[#ff8585] focus:ring-[#ff8585]"
                  : "ring-gray-300 focus:ring-gray-400"
              }`}
            />
            {formik.touched.title && formik.errors.title ? (
              <p className="text-[#fc4f4f] text-xs md:text-sm">
                {formik.errors.title}
              </p>
            ) : null}
          </div>
          <div className="mt-3">
            <label className="text-base text-gray-900 font-normal">
              Description
            </label>
            <textarea
              placeholder="Type your post.."
              className={`block w-full h-[200px] mt-1.5 py-2 px-3 text-[14px] text-[#1c2125] border-0 outline-none ring-[1.3px] ring-inset ring-gray-300 focus:ring-gray-400  placeholder:text-[#8C94A3] placeholder:text-xs md:placeholder:text-sm focus:ring-[1.6px] focus:ring-inset resize-none rounded-md shadow-md`}
            ></textarea>
          </div>

          <div className="md:w-[50%] mt-8">
            <label className="mb-2 text-base text-gray-900 font-normal">
              Select Category
            </label>
            <select className="w-full py-2 px-3 border-0 outline-none ring-[1.3px] ring-inset ring-gray-300 focus:ring-gray-400 focus:ring-[1.6px] focus:ring-inset rounded-md shadow-md">
              <option className="text-sm">Education</option>
              <option className="text-sm">Politics</option>
              <option className="text-sm">Programming</option>
              <option className="text-sm">Medicine</option>
            </select>
          </div>

          <div className="lg:w-[50%] mx-auto flex justify-center mt-10">
            <button className="text-base text-white py-2 px-10 rounded-md font-semibold bg-gray-700 transition-all duration-200 ease-linear hover:bg-gray-800">
              Add Post
            </button>
          </div>
        </div>
      </form>
    </div>
    // </ProtectedRoute>
  );
};

export default AddPost;
