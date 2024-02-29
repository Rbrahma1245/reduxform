import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "./Reducer/LoginReducer";
import "./Login.scss";
import { isObjectEmpty } from "../Utils/ObjectUtils";

const Login = () => {
  let [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);

  function handleChange(e) {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  function handleSubmit(e) {
    let { username, password } = formValue;
    e.preventDefault();

    if (username == "" || password == "") {
      alert("Please fill the form");
    } else {
      let id = new Date().getMilliseconds();
      dispatch(addUser({ id: id, username, password }));
      setFormValue({ username: "", password: "" });
    }
  }

  function handleLogout(e) {
    dispatch(deleteUser());
    e.preventDefault();
  }

  return (
    <div className="login-container">
      <h3>LOGIN FORM</h3>
      <form style={{ display: "flex", flexDirection: "column", width: 400 }}>
        <input
          style={{ height: 50 }}
          type="text"
          name="username"
          value={formValue.username}
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

        {isObjectEmpty(user) ? (
          <button onClick={handleSubmit}>LOGIN</button>
        ) : (
          <button onClick={handleLogout}>LOGOUT</button>
        )}
      </form>
    </div>
  );
};

export default Login;
