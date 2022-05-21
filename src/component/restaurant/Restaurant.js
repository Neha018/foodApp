import React from 'react';
import {Box, FlatList, Flex, HStack, Spacer, Text} from 'native-base';
import {Image} from 'react-native';
import {RestList} from '../../data/RestList';
import {SvgXml} from 'react-native-svg';
import {Clock, Star} from '../../svg';

export const RestaurantList = () => {
  return (
    <FlatList
      data={RestList}
      renderItem={({item}) => (
        <Box borderBottomWidth="1" borderColor="#cdcdcd" mb="2" pl="2">
          <Flex direction="row" width="100%" mb="2">
            <Image
              source={item.img}
              style={{
                width: 80,
                height: 80,
                resizeMode: 'cover',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#cdcdcd',
              }}
            />
            <Box>
              <HStack>
                <Flex
                  direction="row"
                  alignItems="center"
                  ml="3"
                  mt="1"
                  w="82%"
                  justifyContent="space-between">
                  <Text
                    color="primary.900"
                    fontSize="lg"
                    fontFamily="body"
                    fontWeight={600}
                    fontStyle="normal">
                    {item.name}
                  </Text>
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
                  w="82%"
                  justifyContent="space-between"
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
                  {/*<Spacer />*/}
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
          </Flex>
        </Box>
      )}
    />
  );
};
