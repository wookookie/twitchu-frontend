import { useEffect, useState } from "react";
import styled from "styled-components";
import { websocket } from "../../websocket";

const Outline = styled.div`
  display: flex;
  border-width: 1px;
  border-radius: 0.5rem;
  min-height: 400px;
`;

export function ChatContents() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    websocket.on("chat", (chat) => {
      setMessage(chat.message);
    });
  }, []);

  return <Outline>{message && message}</Outline>;
}
