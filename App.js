import React from "react";
import {
  NativeBaseProvider,
  VStack,
  ScrollView,
} from "native-base";
import { AppContextProvider } from "./components/AppContext";
import { AppBar } from "./components/AppBar";
import { ChargeList } from "./components/ChargeList";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppContextProvider> 
        <AppBar />
        <VStack alignItems="center">
          <ScrollView width="full">
            <ChargeList />
          </ScrollView>
        </VStack>
      </AppContextProvider>
    </NativeBaseProvider>
  );
};
