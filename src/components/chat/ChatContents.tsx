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
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    websocket.on("chat", (chat) => {
      setMessage(chat.message);
    });
  }, []);

  return (
    <Outline>
      {message && (
        <div style={{ padding: "10px 10px" }}>
          <ChatBubble>{message}</ChatBubble>
        </div>
      )}
    </Outline>
  );
}
