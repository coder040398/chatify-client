import React, { createRef, Dispatch, useEffect } from "react";
import { ModalContainer, ModalContentBody, ModalHeader } from ".";
import { OverlayStyle } from "../../utils/styles";
import CreateConversationForm from "../forms/CreateConversationForm";
import { MdClose } from "react-icons/md";

type Props = {
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateConversationModal(props: Props) {
  const { setShowModal } = props;
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) =>
      e.key === "Escape" && setShowModal(false);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { current } = ref;
    if (current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <OverlayStyle ref={ref} onClick={handleOverlayClick}>
      <ModalContainer>
        <ModalHeader>
          <h2>Create Conversation</h2>
          <MdClose size={32} onClick={() => setShowModal(false)} />
        </ModalHeader>
        <ModalContentBody>
          <CreateConversationForm />
        </ModalContentBody>
      </ModalContainer>
    </OverlayStyle>
  );
}
