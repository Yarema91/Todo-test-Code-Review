import "./Modal.css";
export interface Modal {
  isModalOpen: boolean;
  children: any
}

export const Modal: React.FC<Modal> = ({ isModalOpen, children }) => {
  return (
    <>
      <div className={
        `modal ${isModalOpen ? "open" : ""}`} >
          {children}
      </div>
    </>
  );
};
