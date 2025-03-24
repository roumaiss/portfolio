import Form from "@/components/Form";
import React from "react";

export default function page() {
  return (
    <section className="pb-[5rem]">
      <div className="text-center my-[5rem]">
        <h2 className="font-playfair-display text-5xl font-bold mb-4">
          Contact
        </h2>
        <div className="mt-2 h-1 w-24 bg-[#FDC435] rounded-2xl mx-auto"></div>
      </div>
      <Form />
    </section>
  );
}
