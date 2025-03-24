import Image from "next/image";
import React from "react";
import Button from "./Button";

type CardProps = {
  title: string;
  description: string;
  src: string;
};
export default function CardProduct({ title, description, src }: CardProps) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <div className=" card-body lg:w-[50%] flex flex-col justify-center gap-10 p-10 ">
        <h2 className="card-title font-playfair-display font-bold text-2xl lg:text-4xl">
          {title}
        </h2>
        <p className="font-nunito text-[#828282] text-xl">
          {description}
        </p>
        <div className="card-actions">
          <Button label="View project" style="rounded-full" href="/productDetail" />
        </div>
      </div>
      <figure className="lg:w-[50%]">
        <Image
          src={src}
          alt="project1"
          width="700"
          height="700"
          className=""
        ></Image>
      </figure>
    </div>
  );
}
