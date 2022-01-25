import React from "react";
import {
  Text,
  Center,
  NativeBaseProvider,
  VStack,
} from "native-base";
import { AppBar } from "./components/AppBar";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppBar />
      <Center flex={1}>
        <VStack alignItems="center">
          <Text>Hello world</Text>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};
