import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-transparent z-50 ">
      <div className="navbar-start ">
        <Link
          href="/"
          className="btn btn-ghost text-xl font-bold font-comfortaa lg:mx-[8rem]"
        >
          Amirouche Romaissa
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold font-comfortaa "
          >
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex mx-[8rem]">
        <ul className="menu menu-horizontal px-1 font-comfortaa font-bold">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
