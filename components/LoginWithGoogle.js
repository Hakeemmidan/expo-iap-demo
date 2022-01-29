import React, { useEffect } from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from 'firebase/auth';
import { Button } from 'native-base';
import { useIdTokenAuthRequest } from 'expo-auth-session/providers/google';

import { firebaseApp } from '../firebase';

export const LoginWithGoogle = ({ size, colorScheme, variant }) => {
  const [request, response, promptAsync] = useIdTokenAuthRequest({
    clientId: process.env.REACT_APP_FIREBASE_GOOGLE_WEB_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const auth = getAuth(firebaseApp);

      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      onPress={() => promptAsync()}
      size={size || 'md'}
      colorScheme={colorScheme || 'primary'}
      variant={variant || 'subtle'}
    >
      Login with Google
    </Button>
  );
};
