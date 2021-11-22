import "./Modal.sass"
import Categories from "../Categories/Categories";
import SelectNews from "../SelectNews/SelectNews";
import { ModalProps } from "../../types";

const Modal = (props: ModalProps) => {
  return (
    <div className="Modal">
      {
        props.type === "categories" ?
        <Categories
          setShowModal={props.setShowModal}
          categories={props.categories}
          chanels={props.chanels}
        /> :
        props.type === "news" ?
        <SelectNews
          newsPopup={props.newsPopup}
          setShowModal={props.setShowModal}
        />
        : null
      }
    </div>
  )
}

export default Modal;