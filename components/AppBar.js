import React from 'react';
import {
  HStack,
  Button,
  Text,
  Box,
  StatusBar,
} from 'native-base';

export const AppBar = () => {
  const user = {}; // we'll fill this in once we set up our OAuth

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
          {user.email ? (
            <HStack space="sm" alignItems="center">
              <Text color="white">{user.email}</Text>
              <Button size="sm" colorScheme="secondary" variant="subtle">logout</Button>
            </HStack>
          ) : (
            <Button size="md" colorScheme="primary" variant="subtle" >
              Login with Google
            </Button>
          )}
        </HStack>
      </HStack>
    </>
  );
};
