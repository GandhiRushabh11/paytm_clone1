import React from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";

function Signup() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-xl bg-white w-96 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            label={"FirstName"}
            placeholder={"First Name"}
            type={"text"}
          />
          <InputBox
            label={"LastName"}
            placeholder={"Last Name"}
            type={"text"}
          />
          <InputBox label={"Email"} placeholder={"Email ID"} type={"email"} />
          <InputBox
            label={"Password"}
            placeholder={"Password"}
            type={"password"}
          />
          <div className="pt-4">
            <Button label={"Sign Up"}/>
          </div>
          <ButtonWarning label={"Already have account ?"} to={"/signin"} buttonText={"SignIn"}/>
        </div>
      </div>
    </div>
  );
}

export default Signup;
