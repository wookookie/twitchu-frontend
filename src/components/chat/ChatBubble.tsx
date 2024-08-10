import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  username: string;
  children: ReactNode;
}

const Bubble = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding: 0.7rem;
  width: 200px;
  height: 60px;
  background-color: #fed7e2;
`;

const UserName = styled.p`
  color: #cbd5e0;
`;

export function ChatBubble({ username, children }: Props) {
  return (
    <div>
      <UserName>{username}</UserName>
      <Bubble>
        <div>{children}</div>
      </Bubble>
    </div>
  );
}
