import React from 'react';
import {
  HStack,
  Button,
  Text,
  Box,
  StatusBar,
} from 'native-base';
import { LoginWithGoogle } from './LoginWithGoogle';
import { signOut } from 'firebase/auth';

export const AppBar = ({ auth, currentUser }) => {
  return (
    <>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
      <Box safeAreaTop backgroundColor="primary.500" />

      <HStack
        bg="primary.500" px="4"
        py="3"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack alignItems="center">
          <Text color="white" fontSize="2xl" fontWeight="bold">
            Pineapples
          </Text>
        </HStack>
        <HStack alignItems="center">
          {currentUser.email ? (
            <HStack space="sm" alignItems="center">
              <Text color="white">{currentUser.email}</Text>
              <Button 
                size="sm"
                colorScheme="secondary"
                variant="subtle"
                onPress={() => signOut(auth)}
              >
                logout
              </Button>
            </HStack>
          ) : (
            <LoginWithGoogle size="md" colorScheme="primary" variant="subtle" />
          )}
        </HStack>
      </HStack>
    </>
  );
};
