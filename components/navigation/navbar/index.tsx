import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          alt="DevFlow Logo"
          width={23}
          height={23}
        ></Image>
        <p className="h2-bold  text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-100">Flow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-1">Theme</div>
    </nav>
  );
};

export default Navbar;