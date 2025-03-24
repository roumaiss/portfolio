import CardProduct from "@/components/CardProduct";
import React from "react";

export default function page() {
  return (
    <section className="py-[10rem] mx-[15rem] ">
      <div className="text-center my-[5rem]">
        <h2 className="font-playfair-display text-5xl font-bold mb-4">
          Projects
        </h2>
        <div className="mt-2 h-1 w-24 bg-[#FDC435] rounded-2xl mx-auto"></div>
      </div>
      <div className="flex flex-col gap-20">
        <CardProduct
          title="Live Better"
          src="/images/project.jpg"
          description="this app helps users plan and track healthy habits with personalized to-do lists and expert guidance. Professionals can create structured health plans, making it easy to build a better lifestyle."
        />
        <CardProduct
          title="Aura Website"
          src="/images/project2.jpg"
          description="The project is a website where customers can browse and purchase a wide selection of stylish glasses. It features a search function to find opticians in their city who have the desired products in stock"
        />
        <CardProduct
          title="furniture Website"
          src="/images/project4.svg"
          description="The project is a website that offers a variety of furniture for customers to browse and purchase. It includes a search feature to help users find furniture stores in their city with specific items in stock."
        />
      </div>
    </section>
  );
}
