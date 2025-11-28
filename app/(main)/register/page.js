import RegisterForm from "@/components/custom/RegisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="container mx-auto flex justify-center min-h-screen pt-20">
      <div className="w-5/12">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
