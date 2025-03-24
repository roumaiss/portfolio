import Image from "next/image";
import React from "react";

export default function notFound() {
  return (
    <main className="min-h-screen  mt-[2rem] flex flex-col items-center justify-center">
      <h1 className="font-playfair-display text-7xl text-[#FDC435]  font-bold">
        This page is not available yet!
      </h1>
      <Image
        src="/images/inWork.png"
        alt="in work "
        width="700"
        height="700"
      ></Image>
    </main>
  );
}
