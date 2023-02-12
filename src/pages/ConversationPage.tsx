import { Outlet, useParams } from "react-router-dom";
import ConversationPannel from "../components/conversations/ConversationPannel";
import ConversationSideBar from "../components/conversations/ConversationSideBar";
import { Page } from "../utils/styles";

export default function ConversationPage() {
  const { id } = useParams();
  return (
    <Page>
      <ConversationSideBar />
      {!id && <ConversationPannel />}
      <Outlet />
    </Page>
  );
}
