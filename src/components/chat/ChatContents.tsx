import { useEffect, useState } from "react";
import styled from "styled-components";
import { ChatBubble } from "./ChatBubble";
import { Chat } from "../../interfaces/chat.interface";
import { websocket } from "../../websocket";

const Outline = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 1px;
  border-radius: 0.5rem;
  min-height: 400px;
  max-height: 400px;
  overflow: auto;
`;

export function ChatContents() {
  const [chats, setChats] = useState<Chat[]>([]);

  function handleReceiveChat(chat: Chat) {
    setChats((prevChats) => [...prevChats, { user: chat.user, message: chat.message }]);
  }

  useEffect(() => {
    websocket.on("chat", handleReceiveChat);

    return () => {
      websocket.removeListener("chat", handleReceiveChat);
    };
  }, []);

  return (
    <Outline>
      {chats.map((chat, index) => (
        <div key={index} style={{ padding: "10px 10px" }}>
          <ChatBubble username={chat.user}>{chat.message}</ChatBubble>
        </div>
      ))}
    </Outline>
  );
}
