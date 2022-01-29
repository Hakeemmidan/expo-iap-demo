import React, { useEffect, useState } from "react";
import {
  NativeBaseProvider,
  ScrollView,
  Heading,
  Center,
  Text,
} from "native-base";
import * as WebBrowser from 'expo-web-browser';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { firebaseApp } from './firebase';
import { AppBar } from "./components/AppBar";
import { Checkout } from "./components/Checkout";
import { ChargeList } from "./components/ChargeList";

WebBrowser.maybeCompleteAuthSession();

const defaultCurrentUser = {
  uid: '',
  displayName: '',
  email: '',
};

export default function App() {
  const [currentUser, setCurrentUser] = useState(defaultCurrentUser);
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    // Listen for auth state changes
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const { uid, displayName, email } = authUser;
        const shapedUser = { uid, displayName, email };

        setCurrentUser(shapedUser);
      } else {
        setCurrentUser(defaultCurrentUser);
      }
    });
  }, []);
  
  return (
    <NativeBaseProvider>
      <AppBar auth={auth} currentUser={currentUser} />
      <Center>
        <Heading>Buy Pineapples</Heading>
        <Text fontSize="6xl">🍍</Text>
        <Checkout currentUser={currentUser} />
        <ScrollView width="full">
          <ChargeList />
        </ScrollView>
      </Center>
    </NativeBaseProvider>
  );
};
