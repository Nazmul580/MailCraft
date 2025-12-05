"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Header = () => {
  const { data: session } = useSession();

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
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="cursor-pointer outline-none">
                  <AvatarImage src={session?.user?.image} />
                  <AvatarFallback className="bg-primary text-white font-semibold">
                    {session?.user?.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="">
                <DropdownMenuItem>
                  <Link href={"/dashboard"}>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => signOut()}
                  className="cursor-pointer"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
