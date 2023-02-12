import "./BurgerMenu.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export const BurgerMenu = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="nav">
      <div className={menu ? "overlay active" : "overlay"}>
        <div className="menu">
          <div className="menu__wrapper">
            <Link to="/" className="nav__link">
              <span data-text="home" className="link-animation">
                home
              </span>
            </Link>
            <Link to="/about" className="nav__link">
              <span data-text="about" className="link-animation">
                about
              </span>
            </Link>
            <Link to="/labs" className="nav__link">
              <span data-text="lab" className="link-animation">
                labs
              </span>
            </Link>
            <Link to="/cooperation" className="nav__link">
              <span data-text="cooperation" className="link-animation">
                cooperation
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div onClick={() => setMenu(!menu)} className="burger">
        <span className={menu ? "top spin" : " top"}></span>
        <span className={menu ? "center spin" : "center"}></span>
        <span className={menu ? "bottom spin" : "bottom"}></span>
      </div>
    </div>
  );
};
