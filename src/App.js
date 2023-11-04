import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  return (
    <ChakraProvider>
      <Header />
      <Home />
    </ChakraProvider>
  );
};

export default App;
