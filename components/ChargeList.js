import { Pressable, Text, Box, HStack, Center } from 'native-base';
import { openBrowserAsync } from 'expo-web-browser';
import React from 'react';

const mockData = [
  {
    amount: 2.37,
    created_formatted: '2022-01-25 16:05:11 +0000',
    currency: 'usd',
    receipt_url:
      'https://pay.stripe.com/receipts/acct_1KKo2TI2dUUQ0TAe/ch_3KLrIYI2dUUQ0TAe0613T697/rcpt_L1v9shkgWXdBlnQNBCK1p9oyXeh5GRs',
    status: 'succeeded',
    stripe_charge_id: 'ch_3KLrIYI2dUUQ0TAe0613T697',
  },
  {
    amount: 4.32,
    created_formatted: '2022-01-25 17:05:11 +0000',
    currency: 'usd',
    receipt_url:
      'https://pay.stripe.com/receipts/acct_1KKo2TI2dUUQ0TAe/ch_3KLrIYI2dUUQ0TAe0613T697/rcpt_L1v9shkgWXdBlnQNBCK1p9oyXeh5GRs',
    status: 'succeeded',
    stripe_charge_id: 'ch_3KLrIYI2dUUQ0TAe0613T697_2',
  },
  {
    amount: 7.93,
    created_formatted: '2022-01-25 18:05:11 +0000',
    currency: 'usd',
    receipt_url:
      'https://pay.stripe.com/receipts/acct_1KKo2TI2dUUQ0TAe/ch_3KLrIYI2dUUQ0TAe0613T697/rcpt_L1v9shkgWXdBlnQNBCK1p9oyXeh5GRs',
    status: 'failed',
    stripe_charge_id: 'ch_3KLrIYI2dUUQ0TAe0613T697_3',
  },
];

export const ChargeList = () => {
  let statusTxt;
  let amtTxt;

  return (
    <Center>
      <Text fontSize="2xl">Your previous charges</Text>
      <Text>(click on card to view receipt)</Text>
      {mockData.map((item) => {
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
          <Pressable key={item.stripe_charge_id} my="5" onPress={() => openBrowserAsync(item.receipt_url)}>
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
