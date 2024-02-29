import { useDispatch, useSelector } from "react-redux";
import "./Employee.scss";
import { useEffect, useState } from "react";
import { addUserDetails } from "../Reducer/LoginReducer";
import DisplayUser from "./DisplayUser";
import { isObjectEmpty } from "../../Utils/ObjectUtils";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

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
    "India",
    "Australia",
    "Mexico",
    "Canada",
    "Spain",
  ];

  useEffect(() => {
    if (isObjectEmpty(user)) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);




  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name required").min(3, "First Name must be at least 3 characters"),
    middleName: Yup.string().required("Middle Name required"),
    lastName: Yup.string().required("Last Name required"),
    email: Yup.string().email("Invalid Email").required("Email required"),
    phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number')
      .required('Phone number is required'),
    country: Yup.string().required("Country required"),
    address: Yup.string().required('Address is required').min(5, 'Address is too short').max(100, 'Address is too long'),
  });

  let [initialValue, setInitialValue] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "", // Add country to your initial values
    address: ""
  })
  // const initialValue = {
  //   firstName: "",
  //   middleName: "",
  //   lastName: "",
  //   email: "",
  //   phoneNumber: "",
  //   country: "", // Add country to your initial values
  //   address: ""
  // };


  console.log(initialValue, "hhhhhhhhhhh");

  useEffect(() => {
    console.log(initialValue, "from use effect");
  }, [initialValue])

  return (
    <div>
      <h4>User Name: {user.userName}</h4>

      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          // setEmpValue(values)
          resetForm();
          dispatch(addUserDetails(values))

          console.log("test.......");
        }}

      >

        {(formikProps) => (

          <Form className="container">
            <div className="input-container" >
              <label >First Name </label>
              <div>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                />
                <ErrorMessage name="firstName" component="span" className="error" />
              </div>
            </div>

            <div className="input-container" >
              <label >Middle Name</label>
              <div>
                <Field
                  type="text"
                  name="middleName"
                  placeholder="Enter Middle Name"
                />
                <ErrorMessage name="middleName" component="span" className="error" />
              </div>
            </div>

            <div className="input-container" >
              <label >Last Name</label>

              <div>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                />
                <ErrorMessage name="lastName" component="span" className="error" />
              </div>
            </div>

            <div className="input-container" >
              <label >Email : </label>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                />
                <ErrorMessage name="email" component="span" className="error" />
              </div>
            </div>
            <div className="input-container" >
              <label >Phone Number</label>

              <div>
                <Field
                  type="number"
                  name="phoneNumber"
                  placeholder="Enter your Phone number"
                />
                <ErrorMessage name="phoneNumber" component="span" className="error" />
              </div>
            </div>

            <div className="input-container" >
              <label >Country</label>
              <div style={{ display: "flex" }}>
                <Field as="select" name="country" >
                  <option value="" label="Select an option" className="error" />
                  {countries.map((e, i) => {
                    return <option key={i}>{e}</option>;
                  })}

                </Field>
                <ErrorMessage name="country" component="div" className="error" />
              </div>


            </div>

            <div className="input-container" >
              <label >Address</label>
              <div>
                <Field
                  as="textarea"
                  name="address"
                  placeholder="Enter your Address"
                />
                <ErrorMessage name="address" component="span" className="error" />
              </div>

            </div>


            <button type="submit">Submit</button>
            <button type="submit" onClick={() => console.log(formikProps)}>RESET</button>

            <DisplayUser formikProps={formikProps} setInitialValue={setInitialValue} />



          </Form>
        )}
      </Formik>



    </div>
  );
};

export default Employee;
