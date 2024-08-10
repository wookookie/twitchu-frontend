import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
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

export function ChatBubble({ children }: Props) {
  return (
    <Bubble>
      <div>{children}</div>
    </Bubble>
  );
}
