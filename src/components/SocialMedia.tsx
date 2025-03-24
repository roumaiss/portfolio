import Link from "next/link";
import React from "react";

export default function SocialMedia() {
  return (
    <div>
      <div className="flex justify-center items-center gap-4">
        <Link href="mailto:roumaissa8901@gmail.com">
          <span className="icon-[ic--twotone-email] w-[3rem] h-[3rem]"></span>
        </Link>
        <Link href="https://www.instagram.com/">
          <span className="icon-[tdesign--logo-instagram-filled] w-[3rem] h-[3rem]"></span>
        </Link>
        <Link href="https://www.linkedin.com/in/amirouche-romaissa-7961742b6/">
          <span className="icon-[mdi--linkedin] w-[3rem] h-[3rem]"></span>
        </Link>
      </div>
      <p className="text-center font-nunito text-[#828282] mt-4">
        &copy; 2023 Amirouche Romaissa. All rights reserved.
      </p>
    </div>
  );
}
