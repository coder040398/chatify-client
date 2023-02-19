import {
  ConversationBarContainer,
  ConversationBarItem,
  ConversationSidebarHeader,
  ConversationSidebarStyle,
} from "../../utils/styles";
import { TbEdit } from "react-icons/tb";
import { ConversationType } from "../../utils/types";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import CreateConversationModal from "../modals/CreateConversationModal";

type Props = {
  conversations: ConversationType[];
};

export default function ConversationSideBar(props: Props) {
  const { conversations } = props;
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <Fragment>
      {showModal && <CreateConversationModal setShowModal={setShowModal}/>}
      <ConversationSidebarStyle>
        <ConversationSidebarHeader>
          <h1>Conversations</h1>
          <div onClick={() => setShowModal(!showModal)}>
            <TbEdit size={40} />
          </div>
        </ConversationSidebarHeader>
        <ConversationBarContainer>
          {conversations.map((conversation) => (
            <ConversationBarItem
              onClick={() => navigate(`/conversations/${conversation.id}`)}
            >
              <div className={styles.conversationAvatar}></div>
              <div>
                <span className={styles.conversationName}>
                  {conversation.name}
                </span>
                <span className={styles.conversationLastMessage}>
                  {conversation.lastMessage}
                </span>
              </div>
            </ConversationBarItem>
          ))}
        </ConversationBarContainer>
      </ConversationSidebarStyle>
    </Fragment>
  );
}
