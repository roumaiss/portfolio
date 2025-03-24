import Button from "@/components/Button";
import CardProduct from "@/components/CardProduct";
import Form from "@/components/Form";
import MainButton from "@/components/MainButton";
import SocialMedia from "@/components/SocialMedia";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <section className="flex flex-col  lg:flex-row justify-between items-center   lg:mx-[10rem] relative">
      <div className="lg:absolute lg:-top-30 lg:-right-40">
          <Image
            src="/images/home2.svg"
            alt="decorate image"
            width="700"
            height="700"
          ></Image>
        </div>
        <div className="lg:w-[60%] flex flex-col gap-5 lg:mt-[5rem] mx-[3rem] lg:mx-0">
          <p className="font-nunito text-[#FDC435] text-xl  lg:text-2xl">UI/UX Designer</p>
          <h1 className="font-playfair-display font-bold text-4xl lg:text-6xl">
            Hello, my name is Amirouche Romaissa
          </h1>
          <p className="font-nunito text-[#828282] text-xl lg:text-2xl capitalize">
            Hello! Im Amirouche Romaissa, a passionate web developer dedicated
            to building creative and efficient web solutions. I love crafting
            user-friendly websites and applications that blend functionality
            with great design.
          </p>
          <div className="flex gap-10">
            <MainButton label="Projects" />
            <Button
              label="LinkedIn"
              style="rounded-sm "
              href="https://www.linkedin.com/in/amirouche-romaissa-7961742b6/"
            />
          </div>
        </div>
      </section>
      {/* projects section */}
      <section className="my-[10rem] lg:mx-[15rem] mx-[3rem] ">
        <div className="text-center my-[5rem]">
          <h2 className="font-playfair-display text-3xl lg:text-5xl font-bold mb-4">
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
      <section>
        <div className="text-center my-[5rem]">
          <h2 className="font-playfair-display text-3xl lg:text-5xl font-bold mb-4">
            Contact
          </h2>
          <div className="mt-2 h-1 w-24 bg-[#FDC435] rounded-2xl mx-auto"></div>
        </div>
        <Form />
      </section>
      {/* footer */}
      <footer className="mt-[5rem]">
        <SocialMedia />

        <div>
          <Image
            src="/images/Vector.svg"
            alt="decore"
            width={100}
            height={100}
            className="w-full"
          ></Image>
        </div>
      </footer>
    </main>
  );
}
