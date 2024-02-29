import { useDispatch, useSelector } from "react-redux";
import "./Employee.scss";
import { useEffect, useState } from "react";
import { addUserDetails } from "../Reducer/LoginReducer";
import DisplayUser from "./DisplayUser";
import { isObjectEmpty } from "../../Utils/ObjectUtils";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";

const Employee = () => {
  let [empValue, setEmpValue] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    address: "",
  });

  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let countries = [
    "Country",
    "India",
    "Australia",
    "Mexico",
    "Canada",
    "Spain",
  ];

  function handleChange(e) {
    let { name, value } = e.target;
    setEmpValue({ ...empValue, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let {
      firstName,
      middleName,
      lastName,
      email,
      phoneNumber,
      country,
      address,
    } = empValue;

    if (
      !firstName ||
      !middleName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !country ||
      !address
    ) {
      alert("Fill the required details");
    } else {
      dispatch(
        addUserDetails({
          firstName,
          middleName,
          lastName,
          email,
          phoneNumber,
          country,
          address,
        })
      );
      setEmpValue({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: "",
        address: "",
      });
    }
  }

  function handleReset(e) {
    e.preventDefault();
    setEmpValue({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      country: "",
      address: "",
    });
  }

  useEffect(() => {
    if (isObjectEmpty(user)) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <h4>User Name: {user.userName}</h4>

      <form className="container">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={empValue.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="middleName"
            placeholder="Enter Middle Name"
            value={empValue.middleName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={empValue.lastName}
            onChange={handleChange}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={empValue.email}
          onChange={handleChange}
        />

        <input
          name="phoneNumber"
          type="number"
          placeholder="Enter Phone Number"
          onChange={handleChange}
          value={empValue.phoneNumber}
        />
        <select name="country" onChange={handleChange} value={empValue.country}>
          {countries.map((e, i) => {
            return <option key={i}>{e}</option>;
          })}
        </select>

        <textarea
          placeholder="Enter Your address"
          name="address"
          onChange={handleChange}
          value={empValue.address}
        />

        <div>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleReset}> Reset</button>
        </div>
      </form>

      {/* <Formik
        initialValues={{ firstName: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <Field
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={empValue.firstName}
            onChange={handleChange}
          />
          <ErrorMessage name="firstName" component="span" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Submit</button>
        </Form>
      </Formik> */}

      <DisplayUser setEmpValue={setEmpValue} />
    </div>
  );
};

export default Employee;
