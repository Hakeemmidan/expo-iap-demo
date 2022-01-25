import React from "react";
import {
  Text,
  Center,
  NativeBaseProvider,
  VStack,
} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <VStack alignItems="center">
          <Text>Hello world</Text>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};
