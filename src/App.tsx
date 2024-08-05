import { Box, Flex } from "@chakra-ui/react";
import { ChatLayout } from "./components/chat/ChatLayout";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Flex height="100vh">
      <Box width="100%">
        <NavBar />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ChatLayout />
        </div>
      </Box>
    </Flex>
  );
}

export default App;
