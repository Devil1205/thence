import React, { useState } from "react";
import HeaderSecondary from "../layout/Header/HeaderSecondary";
import "./Register.css";
import Error from "./Error";
import Title from "../layout/Title";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { registerUser } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      setNameError("Please enter a name");
      return false;
    }
    else {
      setNameError("");
    }
    if (!email) {
      setEmailError("Please enter a email");
      return false;
    }
    if (!email.match(/^\d{10}|[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError("Please enter a valid email address")
      return false;
    }
    else {
      setEmailError("");
      dispatch(registerUser({ user: { name, email } }));
      navigate("success");
    }
  }

  return (
    <>
      <HeaderSecondary />
      <Title title={"Thence - Registration"} />
      <div className="registration">
        <div className="flex flex-col items-center max-w-[588px] mx-auto">
          <h2 className="text-[#2DA950]">Registration Form</h2>
          <p className="text-[#1c1c1c]">Start your success Journey here!</p>
        </div>
        <div className="flex flex-col items-center">
          <form className="registerForm max-w-[400px] space-y-8 flex flex-col items-center py-12" name="registerForm" onSubmit={handleRegisterSubmit}>
            <div>
              <div className="w-full">
                <input type="text" name="name" placeholder="Enter your name" className="p-[20px_30px] w-full bg-[#EFEFEF] rounded-full focus:outline-[#2893e3] focus:outline focus:bg-sky-50" value={name} onChange={(e) => { setName(e.currentTarget.value) }} />
                <Error message={nameError} />
              </div>
            </div>
            <div className="w-full">
              <div>
                <input type="text" name="email" placeholder="Enter your email" className="p-[20px_30px] w-full bg-[#EFEFEF] rounded-full focus:outline-[#2893e3] focus:outline focus:bg-sky-50" value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} />
                <Error message={emailError} />
              </div>
            </div>
            <button disabled={!email || !name} className="thenceBtn thenceBtnSecondary py-5 w-full" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register