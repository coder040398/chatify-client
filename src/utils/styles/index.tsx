import styled from "styled-components";

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

export const Page = styled.div`
  background-color: #1a1a1a;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
