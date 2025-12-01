import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = async () => {
  const session = await auth();
  console.log(session);

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
          {!session ? (
            <Link href={"/login"}>
              <Button className="cursor-pointer">Get Started</Button>
            </Link>
          ) : (
            <Avatar>
              <AvatarImage src={session?.user?.image} />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
