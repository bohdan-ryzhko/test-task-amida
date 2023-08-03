import sass from "./CloseButton.module.scss";

import { FC } from "react";
import { MdClose } from "react-icons/md";

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={sass.closeBtn}
      type="button">
      <MdClose size={25} />
    </button>
  );
}
