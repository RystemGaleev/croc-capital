import CountUp from "react-countup";
import style from "./NumCounter.module.scss";

interface INum {
  number: any;
  label: string;
  prefix: string;
}

export const NumCounter = ({ number, prefix, label }: INum) => {
  return (
    <div className={style.item}>
      <div className={style.block}>
        <CountUp end={number} duration={4} className={style.num}>
          {number}
        </CountUp>
        <span>{prefix}</span>
      </div>
      <div className={style.text}>{label}</div>
    </div>
  );
};
