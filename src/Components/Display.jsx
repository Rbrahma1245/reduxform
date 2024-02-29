import { useSelector } from "react-redux";
import { isObjectEmpty } from "../Utils/ObjectUtils";

function Display() {
  const user = useSelector((state) => state.login.user);

  return (
    <div style={{ textAlign: "center" }}>
      {isObjectEmpty(user) ? (
        ""
      ) : (
        <div>
          <h3>User Name : {user.username}</h3>
          <h3> Password : {user.password}</h3>
        </div>
      )}
    </div>
  );
}

export default Display;
