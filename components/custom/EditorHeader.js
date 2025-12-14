"use client";

import Link from "next/link";
import { useState } from "react";
import { CiMobile3 } from "react-icons/ci";
import { FiMonitor } from "react-icons/fi";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const EditorHeader = () => {
  const [activeTab, setActiveTab] = useState();

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
          <Tabs
            defaultValue="desktop"
            onValueChange={(value) => setActiveTab(value)}
            className="w-full"
          >
            <TabsList>
              <TabsTrigger value="desktop" className="cursor-pointer">
                <FiMonitor size={40} />
              </TabsTrigger>
              <TabsTrigger
                value="mobile"
                asChild
                className="cursor-pointer outline-none"
              >
                <CiMobile3 size={40} />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex gap-2">
          <Button variant={"outline"} className="cursor-pointer">
            Send Test Email
          </Button>
          <Button className="cursor-pointer">Save Email Template</Button>
        </div>
      </nav>
    </header>
  );
};

export default EditorHeader;
