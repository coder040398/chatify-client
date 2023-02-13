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

type Props = {
  conversations: ConversationType[];
};

export default function ConversationSideBar(props: Props) {
  const { conversations } = props;
  const navigate = useNavigate();

  return (
    <ConversationSidebarStyle>
      <ConversationSidebarHeader>
        <h1>Conversations</h1>
        <TbEdit size={40} />
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
  );
}
