import styled from "styled-components";

const Outline = styled.div`
  display: flex;
  border-width: 1px;
  border-radius: 0.5rem;
  min-height: 400px;
`;

export function ChatContents() {
  return <Outline>contents</Outline>;
}
