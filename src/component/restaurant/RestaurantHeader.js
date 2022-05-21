import React from 'react';
import {Box, Flex, HStack, Icon, Pressable, Text, VStack} from 'native-base';
import {Ionicons, MaterialIcons, FontAwesome} from '@native-base/icons';
import {Spacer} from 'native-base/src/components/primitives/Flex';

export const RestaurantHeader = ({navigation}) => {
  return (
    <HStack borderWidth="1" borderColor="#cdcdcd">
      <Flex direction="row" width="100%" p="1">
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Icon
            as={Ionicons}
            name="chevron-back"
            color="#808080"
            size="7"
            pt="2"
          />
        </Pressable>
        <Spacer />
        <Box ml="4">
          <VStack>
            <Text
              fontSize="sm"
              color="#808080"
              fontFamily="body"
              fontWeight={600}
              textAlign="center"
              fontStyle="normal">
              Delivering to
            </Text>
            <HStack alignItems="center">
              <Text
                fontSize="sm"
                color="primary.500"
                fontFamily="body"
                fontWeight={600}
                textAlign="center"
                fontStyle="normal">
                Fahad AI-Salem Street Qibla
              </Text>
              <Icon
                as={MaterialIcons}
                name="keyboard-arrow-down"
                color="primary.500"
              />
            </HStack>
          </VStack>
        </Box>
        <Spacer />
        <Box>
          <Flex direction="row" width="100%" h="10" pt="3">
            <Icon
              as={Ionicons}
              name="md-search-sharp"
              color="#808080"
              size="5"
              mr="2"
            />
            <Icon
              as={FontAwesome}
              name="shopping-cart"
              color="#808080"
              size="5"
              mr="3"
            />
          </Flex>
        </Box>
      </Flex>
    </HStack>
  );
};
