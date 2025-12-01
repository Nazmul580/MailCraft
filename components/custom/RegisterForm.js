"use client";

import React from "react";
import { z } from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
  const registerSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email required"),
    password: z.string().min(6, "Password must be at least 6 chars"),
  });
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values) => {
    console.log("Register Data:", values);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "Application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error("registration faild:", data.message);
      console.log("user create successfull", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" px-10 py-15 rounded-md shadow-sm">
      <h2 className="text-center text-2xl font-bold py-4">Create an account</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full"
        >
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full cursor-pointer">
            Register
          </Button>
          <Button
            variant={"outline"}
            type="button"
            className="w-full cursor-pointer"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <FcGoogle />
            Continue With Google
          </Button>

          <p className="font-bold text-gray-400">
            Already have an account?{"  "}
            <Link href={"/login"} className="text-primary font-semibold">
              Login
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
