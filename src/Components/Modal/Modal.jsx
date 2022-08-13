import "./index.css";

const Modal = ({ visib, onHandleClick, children }) => {
  return <>{visib && <div className="Modal">{children}</div>}</>;
};

export default Modal;
