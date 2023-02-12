import { Link } from "react-router-dom";
import { BurgerMenu } from "../../components/BurgerMenu/BurgerMenu";
import style from "./Header.module.scss";
import logo from "../../assets/icons/logo.svg";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <BurgerMenu />
          <div className={style.logo}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
