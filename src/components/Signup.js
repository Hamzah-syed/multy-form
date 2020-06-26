import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuid } from "uuid";
import { GlobalContext } from "../globalContext/GlobalContext";
import swal from "@sweetalert/with-react";
import { useHistory } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";

const Signup = () => {
  const { users, addUser } = useContext(GlobalContext);

  const initialValues = {
    id: uuid(),
    name: "",
    email: "",
    password: "",
  };

  const emails = users.map((users) => users.email);
  let history = useHistory();

  const onSubmit = (values) => {
    addUser(values);
    swal({
      title: "Your account has been created",
      icon: "success",
      button: "Start Journey",
    }).then(() => {
      history.push("/");
    });
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name Is Required"),
    email: Yup.string()
      .notOneOf(emails, "Email already exist")
      .email("Invalid Email")
      .required("Email Is Required"),
    password: Yup.string()
      .min(4, "Password length must be greater then 4")
      .required("Password Is Required"),
  });

  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p className="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div className=" mb-4">
              <Field
                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 w-full  text-base px-4 py-2"
                placeholder="Full Name"
                type="text"
                name="name"
              />
              <ErrorMessage name="name" component={ErrorMsg} />
            </div>
            <div className=" mb-4">
              <Field
                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 w-full text-base px-4 py-2"
                placeholder="Email"
                type="email"
                name="email"
              />
              <ErrorMessage name="email" component={ErrorMsg} />
            </div>
            <div className=" mb-4">
              <Field
                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 w-full  text-base px-4 py-2"
                placeholder="Password"
                type="password"
                name="password"
              />
              <ErrorMessage name="password" component={ErrorMsg} />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Signup;
