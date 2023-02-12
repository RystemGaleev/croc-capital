import { useState } from "react";
import style from "./TeamCard.module.scss";

interface ITeam {
  image: string;
  name: string;
  position: string;
}

const TeamCard = ({ image, name, position }: ITeam) => {
  const [cardHover, setCardHover] = useState(false);

  const showCards = () => {
    setCardHover(true);
  };
  const hiddenCards = () => {
    setCardHover(false);
  };

  return (
    <div
      className={style.card}
      onMouseEnter={showCards}
      onMouseLeave={hiddenCards}
    >
      <div className={`${style.hidden} ${cardHover ? `${style.show}` : ""}`}>
        <div className={style.descr}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
          libero corporis sed eos soluta perspiciatis obcaecati dolor
          reprehenderit fuga praesentium, sapiente, voluptatum aut quasi vero at
          et eveniet hic esse illo debitis. Voluptate est magni soluta sunt
          pariatur ut fugiat.
        </div>
      </div>
      <div className={style.img}>
        <img src={image} alt="man" />
      </div>
      <div className={style.name}>{name}</div>
      <div className={style.position}>{position}</div>
    </div>
  );
};

export default TeamCard;
