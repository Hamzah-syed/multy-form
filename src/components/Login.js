import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from "@sweetalert/with-react";

//context
import { GlobalContext } from "../globalContext/GlobalContext";
//errorMsgComponent
import ErrorMsg from "./ErrorMsg";

const Login = () => {
  const { users } = useContext(GlobalContext);

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    const isValid = users.filter(
      (user) => user.email === values.email && user.password === values.password
    );
    if (isValid.length) {
      console.log(isValid);
      swal("Success", "Login Successfully", "success");
    } else {
      // alert("user not found")
      swal("Error", "Invalid Email Or Password!", "error");
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Incorrect Email").required("Email is required"),

    password: Yup.string().required("Password is required"),
  });

  return (
    <section className="text-gray-500 bg-gray-900 body-font relative">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-white">
            Slow-carb next level shoindxgoitch ethical authentic, poko scenester
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
          <Form className="lg:w-2/6 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-white text-lg font-medium title-font mb-5">
              Login
            </h2>
            <div className="mb-4">
              <Field
                className="bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-indigo-500 text-base w-full px-4 py-2 "
                name="email"
                placeholder="Email"
                type="text"
              />
              <ErrorMessage name="email" component={ErrorMsg} />
            </div>
            <div className="mb-4">
              <Field
                className="bg-gray-900 rounded border text-white border-gray-900 focus:outline-none focus:border-indigo-500 w-full text-base px-4 py-2 "
                name="password"
                placeholder="Password"
                type="password"
              />
              <ErrorMessage name="password" component={ErrorMsg} />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
            <p className="text-xs text-gray-600 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Login;
