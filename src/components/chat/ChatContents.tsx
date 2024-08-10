import { useEffect, useState } from "react";
import styled from "styled-components";
import { ChatBubble } from "./ChatBubble";
import { websocket } from "../../websocket";

const Outline = styled.div`
  display: flex;
  flex-direction: column-reverse;
  border-width: 1px;
  border-radius: 0.5rem;
  min-height: 400px;
  max-height: 400px;
  overflow: auto;
`;

export function ChatContents() {
  const [username, setUserName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    // TO-DO: 수신 데이터에 interface 적용
    websocket.on("chat", (chat) => {
      setUserName(chat.user);
      setMessage(chat.message);
    });
  }, []);

  return (
    <Outline>
      {message && (
        <div style={{ padding: "10px 10px" }}>
          <ChatBubble username={username}>{message}</ChatBubble>
        </div>
      )}
    </Outline>
  );
}
