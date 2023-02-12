import { useState } from "react";
import style from "./SupportsCard.module.scss";

interface ISupportsCard {
  num: string;
  title: string;
  descr: string[];
}
export const SupportsCard = ({ num, title, descr }: ISupportsCard) => {
  const [hover, setHover] = useState(false);

  const showHover = () => {
    setHover(true);
  };
  const hideHover = () => {
    setHover(false);
  };

  return (
    <div
      className={style.item}
      onMouseEnter={showHover}
      onMouseLeave={hideHover}
    >
      <div className={style.block}>
        <h3 className="title title__fz24">{title}</h3>
        <div className={style.num}>{num}</div>
      </div>

      {descr.map((text, index) => (
        <ul
          key={index}
          className={`${style.list} ${hover ? `${style.show}` : ""}`}
        >
          {<li className={style.descr}>{text}</li>}
        </ul>
      ))}
    </div>
  );
};
