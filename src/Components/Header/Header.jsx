import { useSelector } from "react-redux";
import "./Header.scss";
import { isObjectEmpty } from "../../Utils/ObjectUtils";

function Header() {
  const user = useSelector((state) => state.login.user);

  return (
    <div className="header-container" style={{ display: "flex" }}>
      <div className="header-left">LOGO</div>

      <div className="header-right">
        {isObjectEmpty(user) ? "Login" : user.userName}
      </div>
    </div>
  );
}

export default Header;
