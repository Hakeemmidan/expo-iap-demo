import React from 'react';
import { openBrowserAsync } from 'expo-web-browser';
import { Box, Button } from 'native-base';
import { LoginWithGoogle } from './LoginWithGoogle';

export const Checkout = ({ currentUser }) => {
  return (
    <Box mt="4" mb="8">
      {currentUser.email ? (
        <Button
          onPress={() =>
            openBrowserAsync('https://buy.stripe.com/test_4gw4gEf82dzudWg7ss')
          }
        >
          Checkout
        </Button>
      ) : (
        <LoginWithGoogle size="lg" colorScheme="primary" variant="solid" />
      )}
    </Box>
  );
};
