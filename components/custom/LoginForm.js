"use client";

import React, { useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

const LoginForm = () => {
  const loginSchema = z.object({
    email: z.string().email("Valid email required"),
    password: z.string().min(6, "Password required"),
  });
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showpass, setShowPass] = useState(false);

  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };

  const onSubmit = async (values) => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        ...values,
      });

      if (res?.error) throw new Error(res.error);
      form.reset();
    } catch (error) {
      if (error.message === "CredentialsSignin") {
        console.log("Ivalid Credentials");
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className=" px-10 py-15 rounded-md shadow-sm">
      <h2 className="text-center text-2xl font-bold py-4 capitalize">
        Login to your account
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full"
        >
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showpass ? "text" : "password"}
                      {...field}
                      className="pr-10"
                    />
                    {showpass ? (
                      <Eye
                        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                        onClick={handleShowPass}
                      />
                    ) : (
                      <EyeOff
                        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                        onClick={handleShowPass}
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full cursor-pointer">
            Login
          </Button>
          <Button
            variant={"outline"}
            type="button"
            className="w-full cursor-pointer"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <FcGoogle />
            Login With Google
          </Button>

          <p className="font-bold text-gray-400">
            Don{"'"}t have account?{"  "}
            <Link href={"/register"} className="text-primary font-semibold">
              Register
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
