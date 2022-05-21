import React from 'react';
import {Box, FlatList, Flex, HStack, Icon, Spacer, Text} from 'native-base';
import {Feather} from '@native-base/icons';
import {Vendor} from '../../data/Vendor';
import {Image} from 'react-native';

export const NewlyArrived = () => {
  return (
    <>
      <HStack mt="3">
        <Flex
          direction="row"
          pl="3"
          pr="3"
          pt="2"
          alignItems="center"
          width="100%">
          <Text
            color="primary.900"
            fontSize="2xl"
            fontFamily="body"
            fontWeight={600}
            fontStyle="normal">
            Newly Arrived
          </Text>
          <Spacer />
          <Icon as={Feather} name="arrow-right" color="primary.500" size="6" />
        </Flex>
      </HStack>
      <FlatList
        horizontal
        data={Vendor}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <HStack ml="1" mt="2">
            <Box m="1" width="75" height="150">
              <Flex direction="column" h="90">
                <Image
                  source={item.img}
                  style={{
                    width: '100%',
                    height: 75,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#cdcdcd',
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  ml="1.5"
                  color="primary.900"
                  fontSize="sm"
                  fontFamily="body"
                  fontWeight={700}
                  fontStyle="normal">
                  {item.name}
                </Text>
                <Text
                  ml="1.5"
                  color="#808080"
                  fontSize="sm"
                  fontFamily="body"
                  fontWeight={400}
                  fontStyle="normal">
                  {item.time}
                </Text>
              </Flex>
            </Box>
          </HStack>
        )}
      />
    </>
  );
};
