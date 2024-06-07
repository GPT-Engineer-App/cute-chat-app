import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Box, Text, Avatar } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Simulate a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: "Hello! How can I help you?", sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="60vh" overflowY="auto" border="1px solid #ccc" borderRadius="md" p={4}>
          {messages.map((message, index) => (
            <HStack key={index} justify={message.sender === "user" ? "flex-end" : "flex-start"} mb={2}>
              {message.sender === "bot" && <Avatar name="Bot" src="https://images.unsplash.com/photo-1641312874336-6279a832a3dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGF2YXRhcnxlbnwwfHx8fDE3MTc3NTIwNDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" />}
              <Box bg={message.sender === "user" ? "blue.500" : "gray.200"} color={message.sender === "user" ? "white" : "black"} p={3} borderRadius="md">
                <Text>{message.text}</Text>
              </Box>
              {message.sender === "user" && <Avatar name="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNzc1MjA0Mnww&ixlib=rb-4.0.3&q=80&w=1080" />}
            </HStack>
          ))}
        </Box>
        <HStack width="100%">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
          <Button onClick={handleSend} colorScheme="blue" rightIcon={<FaPaperPlane />}>
            Send
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
