"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import MainButton from "./MainButton";

type Inputs = {
  name: string;
  email: string;
  message: string;
};
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mx-auto w-[20rem] lg:w-[27rem] gap-10 "
    >
      <div className="">
        <label htmlFor="" className="block font-bold font-nunito mb-2">
          Name
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          
          className="input w-full border-[#E8ECF4] "
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="" className="block font-bold font-nunito mb-2">
          Email
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email",
            },
          })}
          
          className="input w-full border-[#E8ECF4]"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="" className="block font-bold font-nunito mb-2">
          Message
        </label>
        <textarea
          {...register("message", { required: "Message cannot be empty" })}
          
          className="input h-40 w-full  border-[#E8ECF4]"
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div className="text-end">
        <MainButton label="Send" />
      </div>
    </form>
  );
}

export default Form;
