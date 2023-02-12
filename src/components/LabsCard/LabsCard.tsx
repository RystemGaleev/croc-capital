import { UiButton } from "../UI/UiButton/UiButton";
import { useState } from "react";
import { ModalProject } from "../ModalProject/ModalProject";
import style from "./LabsCard.module.scss";

interface ICroc {
  reverse: boolean;
  img: string;
  title: string;
  descr: string;
}
export const LabsCard = ({ reverse, img, title, descr }: ICroc) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={reverse ? `${style.item} ${style.reverse}` : `${style.item}`}
    >
      <div className={style.block_img}>
        <img src={img} alt="svg" />
        <div className={style.subtitle}>{title}</div>
      </div>
      <div className={style.text}>
        <h3 className="title title__fz30">{title}</h3>
        <div className={style.descr}>{descr}</div>
        <ModalProject open={showModal} onClose={() => setShowModal(false)} />
        <UiButton
          variant="outlined"
          size="md"
          onClick={() => setShowModal(true)}
        >
          Upcoming
        </UiButton>
      </div>
    </div>
  );
};
