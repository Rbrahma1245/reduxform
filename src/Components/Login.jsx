import { useState } from "react";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { addUser } from "./Reducer/LoginReducer";
import { NavLink } from "react-router-dom";

const Login = () => {
  let [formValue, setFormValue] = useState({
    userName: "",
    password: "",
  });

  const dispatch = useDispatch();

  function handleChange(e) {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  function handleSubmit(e) {
    let { userName, password } = formValue;

    if (userName == "" || password == "") {
      alert("Please fill the form");
      e.preventDefault();
    } else {
      let id = new Date().getMilliseconds();
      dispatch(addUser({ id: id, userName, password }));
      setFormValue({ userName: "", password: "" });
    }
  }

  //   function handleLogout(e) {
  //     dispatch(deleteUser());
  //     e.preventDefault();
  //   }

  return (
    <div className="login-container">
      <h3>LOGIN FORM</h3>
      <form style={{ display: "flex", flexDirection: "column", width: 400 }}>
        <input
          style={{ height: 50 }}
          type="text"
          name="userName"
          value={formValue.userName}
          placeholder="Enter User Name"
          onChange={handleChange}
        />
        {/* <span>ERROR FIELD</span> */}
        <br />
        <input
          style={{ height: 50 }}
          type="password"
          name="password"
          value={formValue.password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
        {/* <span>ERROR FIELD</span> */}
        <br />

        <NavLink to={`/employee`} onClick={handleSubmit}>
          LOGIN
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
