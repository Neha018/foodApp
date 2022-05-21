import React from 'react';
import {Box, FlatList, Text, VStack} from 'native-base';
import {Cuisine as CuisineData} from '../../data/Cuisine';
import {Image} from 'react-native';

export const Cuisine = () => {
  return (
    <Box>
      <FlatList
        horizontal
        data={CuisineData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Box mt="2" ml="2" p="1">
            <VStack>
              <Box borderRadius="100" borderColor="#525151" borderWidth="1">
                <Image
                  source={item.img}
                  style={{
                    width: 70,
                    height: 70,
                    resizeMode: 'contain',
                  }}
                />
              </Box>
              <Text
                color="primary.900"
                textAlign="center"
                fontSize="sm"
                fontFamily="body"
                fontWeight={600}
                fontStyle="normal">
                {item.name}
              </Text>
            </VStack>
          </Box>
        )}
      />
    </Box>
  );
};
