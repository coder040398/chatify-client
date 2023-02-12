import { ConversationSidebarStyle } from "../../utils/styles";
import { TbEdit } from "react-icons/tb";

export default function ConversationSideBar() {
  return (
    <ConversationSidebarStyle>
      <header>
        <h1>Conversations</h1>
        <TbEdit size={40} />
      </header>
    </ConversationSidebarStyle>
  );
}
