import React, { useState } from "react";
import FormInput from "./FormInput";
import { Link, Form } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const onchange = (e) => {
    setUserName(e.target.value);
  }
  return (
    <section className=" h-screen grid place-items-center">
      <Form
        method="post"
        className=" card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className=" text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="name"
          label="User Name"
          name="identifier"
          defaultValue="Abhi"
          value={userName}
          onchange={onchange}
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
          value={password}
          onchange={onchange}
        />
        <div className=" mt-4">
          <Link
            to="/home"
            className=" link link-hover link-primary capitalize  btn btn-primary btn-block text-white hover:text-white"
          >
            Login
          </Link>
        </div>
        <p className=" text-center">
          not a member yet?
          <Link
            to="/home"
            className=" link link-hover link-primary capitalize  btn btn-primary btn-block text-white hover:text-white"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
