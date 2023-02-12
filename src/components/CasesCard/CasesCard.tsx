import style from "./CaseCard.module.scss";

interface ICases {
  image: string;
  title: string;
  descr: string;
}

const CasesCard = ({ image, title, descr }: ICases) => {
  return (
    <div className={style.item}>
      <div className={style.img}>
        <img src={image} alt="company" />
      </div>
      <div className={style.block}>
        <h3 className="title title__fz24">{title}</h3>
        <div className={style.descr}>{descr}</div>
      </div>
    </div>
  );
};

export default CasesCard;
