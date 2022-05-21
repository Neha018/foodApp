import React from 'react';
import {Box, HStack, Spacer, Text} from 'native-base';
import {Image, Pressable} from 'react-native';

export const OrderSection = ({navigation}) => {
  return (
    <Box>
      <Text
        color="primary.900"
        fontSize="xl"
        fontFamily="body"
        fontWeight={600}
        fontStyle="normal"
        ml="3"
        mt="1.5">
        What you want to order ?
      </Text>
      <HStack alignItem="center" mt="3">
        <Box ml="3">
          <Image source={require('../../../assets/images/module/cafe.png')} />
          <Text
            color="primary.900"
            fontSize="sm"
            fontFamily="body"
            fontWeight={600}
            textAlign="center"
            mt={1}
            fontStyle="normal">
            Cafe
          </Text>
        </Box>
        <Spacer />
        <Pressable onPress={() => navigation.navigate('Restaurant')}>
          <Image
            source={require('../../../assets/images/module/restaurant.png')}
          />
          <Text
            color="primary.900"
            fontSize="sm"
            textAlign="center"
            fontFamily="body"
            fontWeight={600}
            mt={1}
            fontStyle="normal">
            Restaurant
          </Text>
        </Pressable>
        <Spacer />
        <Box mr="3">
          <Image
            source={require('../../../assets/images/module/order-by-zone.png')}
          />
          <Text
            color="primary.900"
            fontSize="sm"
            textAlign="center"
            fontFamily="body"
            fontWeight={600}
            mt={1}
            fontStyle="normal">
            Order By Zone
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};
