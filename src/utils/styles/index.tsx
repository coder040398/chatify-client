import styled from "styled-components";
import { PageProps } from "./styleTypes";

export const SIDEBAR_WIDTH = 400;
export const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  font-family: "Franklin Gothic Medium";
  font-size: 16px;
  background-color: #9900ff;
  color: #fff;
  border-radius: 10px;
  padding: 25px 0;
  border: 2px solid #9900ff;
  transition: 250ms background-color ease;
  transition: 500ms border ease;
  &:hover {
    cursor: pointer;
    background-color: #a217ff;
  }
  &:active {
    background-color: #b240ff;
  }
`;

export const ConversationBarContainer = styled.div``;

export const ConversationBarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 32px;
  box-sizing: border-box;
  border-bottom: 1px solid #5454543d;
  background-color: #131313;
`;

export const ConversationChannelPageStyle = styled.div`
  height: 100%;
  margin-left: ${SIDEBAR_WIDTH}px;
`;

export const ConversationSidebarHeader = styled.header`
  position: fixed;
  width: ${SIDEBAR_WIDTH}px;
  top: 0;
  left: 0;
  display: flex;
  background-color: #151515;
  height: 100px;
  justify-content: space-between;
  border-bottom: 1px solid #5454543d;
  align-items: center;
  padding: 0 32px;
  box-sizing: border-box;
  & h1 {
    font-weight: 400;
  }
`;

export const ConversationSidebarStyle = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${SIDEBAR_WIDTH}px;
  background-color: #1a1a1a;
  border-right: 1px solid #5454543d;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputField = styled.input`
  font-family: "Franklin Gothic Medium";
  background: inherit;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  margin: 4px 0;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
  font-family: "Franklin Gothic";
`;

export const Page = styled.div<PageProps>`
  background-color: #1a1a1a;
  height: 100%;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;
