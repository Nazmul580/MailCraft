"use client";

import React from "react";
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
  const onSubmit = (values) => {
    console.log("Register Data:", values);
    // send to backend API
  };
  return (
    <div className=" px-10 py-15 rounded-md shadow-sm">
      <h2 className="text-center text-2xl font-bold py-4">
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
                  <Input type="password" {...field} />
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
