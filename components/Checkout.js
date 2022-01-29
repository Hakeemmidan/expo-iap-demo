import React from 'react';
import { openBrowserAsync } from 'expo-web-browser';
import { Box, Button } from 'native-base';
import { LoginWithGoogle } from './LoginWithGoogle';

export const Checkout = ({ currentUser }) => {
  return (
    <Box my="2">
      {currentUser.displayName ? (
        <Button
          onPress={() =>
            openBrowserAsync('<YOUR_STRIPE_PAYMENT_URL>')
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
