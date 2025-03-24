import MainButton from "@/components/MainButton";
import SocialMedia from "@/components/SocialMedia";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main>
      <section className="flex flex-col  lg:flex-row-reverse justify-between items-center mx-[3rem] lg:mx-[10rem] mb-[5rem] ">
        <div className="">
          <Image
            src="/images/home3.svg"
            alt="decorate image"
            width="300"
            height="300"
          ></Image>
        </div>
        <div className="lg:w-[50%] flex flex-col gap-5 mt-[5rem]">
          <h1 className="font-playfair-display font-bold text-4xl lg:text-6xl">
            About me
          </h1>
          <p className="font-nunito text-[#828282] text-xl lg:text-2xl capitalize">
            Hello! Im Amirouche Romaissa, a passionate web developer dedicated
            to building creative and efficient web solutions. I love crafting
            user-friendly websites and applications that blend functionality
            with great design.
          </p>
          <div>
            <MainButton label="Projects" />
          </div>
        </div>
      </section>
      <SocialMedia />
    </main>
  );
}
