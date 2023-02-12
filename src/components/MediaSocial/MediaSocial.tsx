import { Link } from "react-router-dom";
import style from "./MediaSocial.module.scss";

interface IMediaSocial {
  platform: string;
  text: string;
  social: string;
  socialOther: string;
}

const MediaSocial = ({ platform, socialOther, text, social }: IMediaSocial) => {
  return (
    <div className={style.item}>
      <div className={style.block_text}>
        <h3 className="title title__fz24">{platform}</h3>
      </div>
      <div className={style.block_cards}>
        <div className={style.card}>
          <Link to="/" className={style.link}>
            {social}
          </Link>
          <div className={style.text}>{text}</div>
        </div>
        <div className={style.card}>
          <Link to="/" className={style.link}>
            {socialOther}
          </Link>
          <div className={style.text}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default MediaSocial;
