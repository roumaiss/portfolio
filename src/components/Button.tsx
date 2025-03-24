import Link from "next/link";
import React from "react";

type ButtonProps = {
  label: string;
  style: string;
  href: string;
};
export default function Button({ label, style , href }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`btn ${style} border-2 border-black hover:bg-[#FDC435]`}
    >
      {label}
    </Link>
  );
}
