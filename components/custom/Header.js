import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" py-5 border-b border-gray-100">
      <nav className="container mx-auto px-2 flex items-center justify-between  ">
        <div>
          <Link href={"/"}>
            <h1 className="font-lobster text-3xl font-bold text-primary">
              MailCraft
            </h1>
          </Link>
        </div>
        <div>
          <Button className="">Get Started</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
