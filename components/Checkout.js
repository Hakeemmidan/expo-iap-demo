import React, { useContext } from 'react';
import { openBrowserAsync } from 'expo-web-browser';
import { Box, Button } from 'native-base';
import { AppContext } from './AppContext';
import { LoginWithGoogle } from './LoginWithGoogle';

export const Checkout = () => {
  const {state: { currentUser }} = useContext(AppContext);

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
