import { Particles } from "../UI/Particles/Particles";
import style from "./PartnersCard.module.scss";

interface IPartners {
  img: string;
}

const PartnersCard = ({ img }: IPartners) => {
  return (
    <div className={style.item}>
      <div className={style.blur}></div>
      <div className={style.img}>
        <Particles />
        <img src={img} alt="partner" />
      </div>
    </div>
  );
};

export default PartnersCard;
