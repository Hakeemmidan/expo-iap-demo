import React from 'react';
import { Button } from 'native-base';

export const LoginWithGoogle = ({ size, colorScheme, variant }) => {
  return (
    <Button size={size || "md"} colorScheme={colorScheme || "primary"} variant={variant || "subtle"}>
      Login with Google
    </Button>
  );
}
