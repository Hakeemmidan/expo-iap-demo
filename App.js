import React from "react";
import {
  NativeBaseProvider,
  ScrollView,
  Heading,
  Center,
  Text,
} from "native-base";
import { AppContextProvider } from "./components/AppContext";
import { AppBar } from "./components/AppBar";
import { Checkout } from "./components/Checkout";
import { ChargeList } from "./components/ChargeList";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppContextProvider>
        <AppBar />
        <Center>
          <Heading>Buy Pineapples</Heading>
          <Text fontSize="6xl">🍍</Text>
          <Checkout />
          <ScrollView width="full">
            <ChargeList />
          </ScrollView>
        </Center>
      </AppContextProvider>
    </NativeBaseProvider>
  );
};
