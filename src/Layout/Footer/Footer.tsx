import { TrianglePurple } from "../../components/UI/Triangle/TrianglePurple";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";

import style from "./Footer.module.scss";

export const navigationLinks = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/cooperation", title: "Cooperation" },
  { path: "/labs", title: "Labs" },
];
export const Footer = () => {
  return (
    <footer className={style.footer}>
      <TrianglePurple />
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.logo}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className={style.text}>
              © Croc Capital, LLC, 2022. All Rights Reserved. Terms of Service
            </div>
          </div>

          <ul className={style.navigation}>
            <li className={style.title}>Navigation</li>
            {navigationLinks.map((link) => (
              <Link key={link.path} className={style.link} to={link.path}>
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
