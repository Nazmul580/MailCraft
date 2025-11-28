import LoginForm from "@/components/custom/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="container mx-auto flex justify-center min-h-screen pt-20">
      <div className="w-5/12">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
