import { FormEvent, useRef } from "react";
import { Button, FormControl, Input } from "@chakra-ui/react";
import api from "../../services/api";

export function ChatForm() {
  const messageRef = useRef<HTMLInputElement>(null);

  // 서버로 메시지 내용 전송
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const message = messageRef.current?.value;
    // 내용이 없을 경우
    if (message === "") {
      return;
    }

    api
      .post("/chat", { message: message })
      .then((res) => console.log(res.data))
      .catch((error) => console.error("Message sending error: ", error));
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <FormControl>
        <div style={{ display: "flex" }}>
          <Input ref={messageRef} type="text" name="message" />
          <div style={{ paddingLeft: "1rem" }}>
            <Button type="submit" colorScheme="pink" variant="outline">
              전송
            </Button>
          </div>
        </div>
      </FormControl>
    </form>
  );
}
