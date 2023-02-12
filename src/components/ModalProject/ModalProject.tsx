import { Form } from "../Form/Form";
import "./ModalProject.scss";

export const ModalProject = ({ open, onClose }: any) => {
  return (
    <div onClick={onClose} className={open ? "modal active" : "modal"}>
      <div onClick={(e) => e.stopPropagation()} className="modal__content">
        <div onClick={onClose} className="modal__close">
          &times;
        </div>
        <div className="title__fz30">Your project</div>
        <Form />
      </div>
    </div>
  );
};
