import React, { useState, useEffect } from 'react';
import { Pressable, Text, Box, HStack, Center } from 'native-base';
import { collection, onSnapshot } from 'firebase/firestore';
import { openBrowserAsync } from 'expo-web-browser';
import { firestore } from '../firebase';

export const ChargeList = ({ currentUser }) => {
  const [chargesList, setChargeList] = useState([]);
  let statusTxt;
  let amtTxt;

  useEffect(() => {
    try {
      const chargesCollection = collection(firestore, 'stripe', currentUser.email.toLowerCase(), 'charges');
      let formattedCharges = [];

      // Listen for changes in chargesCollection
      onSnapshot((chargesCollection), (chargesSnapshot) => {
        formattedCharges = [];

        chargesSnapshot.forEach((doc) => {
          const chargeListItem = doc.data();
          formattedCharges.push(chargeListItem);
        });

        setChargeList(formattedCharges);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Center>
      <Text fontSize="2xl">Your previous charges</Text>
      <Text>(click on card to view receipt)</Text>
      {chargesList.map((item) => {
        switch (item.status) {
          case 'succeeded':
            statusTxt = '✔️ Succeeded';
            amtTxt = `-$${item.amount}`;
            break;
          case 'failed':
            statusTxt = '❌ Failed';
            amtTxt = `$0.00`;
            break;
          case 'pending':
            statusTxt = '⏳ Pending';
            amtTxt = `-$${item.amount}`;
            break;
          default:
            statusTxt =
              '❓ Unknown (please contact support or click on card to view receipt)';
            amtTxt = `n/a`;
            break;
        }

        return (
          <Pressable
            key={item.stripe_charge_id}
            my="5"
            onPress={() => openBrowserAsync(item.receipt_url)}
          >
            <HStack
              bg="amber.50"
              p="5"
              space="2xl"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="gainsboro"
              borderRadius="25px"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Text fontSize="xs">{item.created_formatted}</Text>
                <Text fontSize="md">{statusTxt}</Text>
              </Box>
              <Box>
                <Text fontSize="lg" fontWeight="bold">
                  {amtTxt}
                </Text>
              </Box>
            </HStack>
          </Pressable>
        );
      })}
    </Center>
  );
};
