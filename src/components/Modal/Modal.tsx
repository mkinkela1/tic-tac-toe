import { MutableRefObject, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "src/components/Button/Button";

type Props = {
  onClose: () => void;
  title: string | React.ReactNode;
  children: React.ReactNode;
};

const MODAL_ROOT_ID = "modal-root";

const Modal: React.FC<Props> = ({ onClose, title, children }) => {
  const modalRef: MutableRefObject<HTMLDivElement> = useRef(
    document.createElement("div"),
  );

  useEffect(() => {
    const modalRoot: HTMLDivElement | null = document.querySelector(
      `#${MODAL_ROOT_ID}`,
    );
    if (!modalRoot) {
      throw new Error(`Element with id ${MODAL_ROOT_ID} not in the DOM`);
    }

    document.body.style.overflowY = "hidden";
    modalRoot.appendChild(modalRef.current);

    return () => {
      document.body.style.overflowY = "auto";
      modalRoot.removeChild(modalRef.current);
    };
  }, []);

  return createPortal(
    <div className="fixed w-screen h-screen bg-slate-950/50 top-0 left-0 right-0 bottom-0 flex flex-col items-center box-border">
      <div className="max-w-4xl w-full bg-white p-2 m-4 rounded">
        <h1 className="text-center text-2xl font-bold my-5 max-w-md mx-auto">
          {title}
        </h1>
        <div className="mx-auto p-4 flex justify-center">{children}</div>
        <div className="w-52 mx-auto">
          <Button label="Close" onClick={onClose} />
        </div>
      </div>
    </div>,
    modalRef.current,
  );
};

export default Modal;
