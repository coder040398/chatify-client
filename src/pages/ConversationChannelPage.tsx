import { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContext";
import { ConversationChannelPageStyle } from "../utils/styles";

export default function ConversationChannelPage() {
  const { user } = useContext(AuthContext);
  
  return (
    <ConversationChannelPageStyle>
      {user && user.email}
    </ConversationChannelPageStyle>
  );
}
