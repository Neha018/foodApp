import React from 'react';
import {Box, FlatList, Flex, HStack, Icon, Spacer, Text} from 'native-base';
import {Feather} from '@native-base/icons';
import {Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Clock, Star} from '../../svg';
import {FreeDelivery as FreeDeliverySection} from '../../data/FreeDelivery';

export const FreeDelivery = () => {
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
            Free Delivery
          </Text>
          <Spacer />
          <Icon as={Feather} name="arrow-right" color="primary.500" size="6" />
        </Flex>
      </HStack>
      <FlatList
        horizontal
        data={FreeDeliverySection}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Box rounded="lg" mt="4" ml="3" mb="5" mr="0.5" width="300">
            <Image
              source={item.img}
              style={{
                width: '100%',
                height: 180,
                borderRadius: 20,
                resizeMode: 'cover',
              }}
            />
            <HStack>
              <Flex
                direction="row"
                alignItem="center"
                width="92%"
                ml="3"
                mt="1">
                <Text
                  color="primary.900"
                  fontSize="lg"
                  fontFamily="body"
                  fontWeight={600}
                  fontStyle="normal">
                  {item.name}
                </Text>
                <Spacer />
                <Box>
                  <Flex direction="row" alignItems="center">
                    <SvgXml xml={Star} width={'15'} height={'15'} />
                    <Text
                      color="primary.500"
                      fontSize="sm"
                      fontFamily="body"
                      fontWeight={600}
                      fontStyle="normal"
                      ml="2">
                      {item.rating}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </HStack>
            <Text
              color="#808080"
              ml="3"
              fontSize="sm"
              fontFamily="body"
              fontWeight={600}
              fontStyle="normal">
              {item.desc}
            </Text>
            <HStack>
              <Flex
                direction="row"
                alignItem="center"
                width="92%"
                ml="3"
                mt="1">
                <Box>
                  <Flex direction="row" alignItems="center">
                    <SvgXml xml={Clock} width={'15'} height={'15'} />
                    <Text
                      color="primary.500"
                      fontSize="sm"
                      fontFamily="body"
                      fontWeight={600}
                      fontStyle="normal"
                      ml="2">
                      {item.time}
                    </Text>
                  </Flex>
                </Box>
                <Spacer />
                <Text
                  color="#808080"
                  fontSize="sm"
                  fontFamily="body"
                  fontWeight={600}
                  fontStyle="normal">
                  Delivery : {item.delivery}
                </Text>
              </Flex>
            </HStack>
          </Box>
        )}
      />
    </>
  );
};
