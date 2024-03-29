import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Helmet } from "react-helmet";
export default function Signup() {

  let naviagte = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);
  let phoneRegex = /^[0-9]{11}$/;
  let passwordRegex = /^[A-Z][a-z0-9]{5,10}$/;
  let validateScheme = yup.object({
    name: yup
      .string()
      .min(3, "name minlength is 3")
      .max(10, "name maxlength is 10")
      .required("name required"),
    email: yup
      .string()
      .email("email is invalid")
      .required("email is required "),
    phone: yup
      .string()
      .matches(phoneRegex, "phone is invalid")
      .required("phone required"),
    password: yup
      .string()
      .matches(passwordRegex, "password is invalid")
      .required("password is required"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password")], "password and repassword doesnot match")
      .required("repassword is required"),
  });

  async function sendSignUpDataToApi(values) {
    setLoading(false);
    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );
      if (data.message == "success") {
        toast.success("Register success");
        naviagte("/signin");
      }
    } catch (error) {
      console.error("API Error:", error.response.data);
      console.error("API Error message:", error.response.data.message);
      setErrorMsg(error.response.data.message);
      setLoading(true);
      const detailedErrors = error.response.data.errors;
    }
  }
  let Register = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema: validateScheme,
    onSubmit: (values) => {
      sendSignUpDataToApi(values);
    },
  });

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" content="register" />
        <title>Register</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-75 m-auto my-4 text-start">
        <h2>Register Now:</h2>
        <form onSubmit={Register.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Ener Your Name"
            type="text"
            name="name"
            value={Register.values.name}
            onChange={Register.handleChange}
            className="form-control mb-3"
            id="name"
          />
          {Register.errors.name && Register.touched.name ? (
            <div className="alert my-2 py-2 alert-danger">
              {Register.errors.name}
            </div>
          ) : (
            ''
          )}

          <label htmlFor="email">Email:</label>
          <input
            placeholder="Enter Your Email"
            type="text"
            name="email"
            value={Register.values.email}
            onChange={Register.handleChange}
            className="form-control mb-3"
            id="email"
          />
          {Register.errors.email && Register.touched.email ? (
            <div className="alert my-2 py-2 alert-danger">
              {Register.errors.email}
            </div>
          ) : (
            ''
          )}
          <label htmlFor="phone">Phone:</label>
          <input
            placeholder="Enter Your Phone"
            type="text"
            name="phone"
            value={Register.values.phone}
            onChange={Register.handleChange}
            className="form-control mb-3"
            id="phone"
          />
          {Register.errors.phone && Register.touched.phone ? (
            <div className="alert my-2 py-2 alert-danger">
              {Register.errors.phone}
            </div>
          ) : (
            ''
          )}

          <label htmlFor="password">Password:</label>
          <input
            placeholder="Enter Your Password"
            type="password"
            name="password"
            value={Register.values.password}
            onChange={Register.handleChange}
            className="form-control mb-3"
            id="password"
          />
          {Register.errors.password && Register.touched.password ? (
            <div className="alert my-2 py-2 alert-danger">
              {Register.errors.password}
            </div>
          ) : ( ''
            
          )}
          <label htmlFor="rePassword">rePassword:</label>
          <input
            placeholder="RePassword"
            type="password"
            name="rePassword"
            value={Register.values.rePassword}
            onChange={Register.handleChange}
            className="form-control mb-3"
            id="rePassword"
          />
          {Register.errors.rePassword && Register.touched.rePassword ? (
            <div className="alert my-2 py-2 alert-danger">
              {Register.errors.rePassword}
            </div>
          ) : (
            ''
          )}
          {errorMsg ? (
            <div className="alert alert-danger my-2 py-2">{errorMsg}</div>
          ) : (
            ""
          )}
          <button
            disabled={!(Register.isValid && Register.dirty)}
            className="btn bg-main text-white"
            type="submit"
          >
            {loading ? " SignUp" : <i className="fa fa-spinner fa-spin"> </i>}
          </button>
        </form>
      </div>
    </div>
  );
}
