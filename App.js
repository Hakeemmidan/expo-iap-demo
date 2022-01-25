import React from "react";
import {
  Text,
  Center,
  NativeBaseProvider,
  VStack,
} from "native-base";
import { AppContextProvider } from "./components/AppContext";
import { AppBar } from "./components/AppBar";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppContextProvider> 
        <AppBar />
        <Center flex={1}>
          <VStack alignItems="center">
            <Text>Hello world</Text>
          </VStack>
        </Center>
      </AppContextProvider>
    </NativeBaseProvider>
  );
};
