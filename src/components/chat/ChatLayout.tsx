import styled from "styled-components";
import { ChatForm } from "./ChatForm";
import { ChatContents } from "./ChatContents";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
`;

export function ChatLayout() {
  return (
    <Layout>
      <ChatContents />
      <div style={{ marginTop: "1rem" }}>
        <ChatForm />
      </div>
    </Layout>
  );
}
