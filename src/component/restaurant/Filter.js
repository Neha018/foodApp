import React from 'react';
import {Box, Button, Flex, Icon, Spacer} from 'native-base';
import {MaterialIcons} from '@native-base/icons';

export const Filter = () => {
  return (
    <Box m="2">
      <Flex direction="row" alignItems="center" width="100%">
        <Button
          size="sm"
          width="25%"
          type="solid"
          borderRadius="10"
          endIcon={
            <Icon as={MaterialIcons} name="keyboard-arrow-down" size={5} />
          }>
          Our Best
        </Button>
        <Spacer />
        <Button
          size="sm"
          type="Outline"
          width="30%"
          endIcon={
            <Icon
              as={MaterialIcons}
              name="keyboard-arrow-down"
              size={5}
              color={'#808080'}
            />
          }
          borderRadius="10"
          backgroundColor="#fff"
          borderColor="#808080"
          borderWidth="1"
          _text={{
            color: '#000000',
          }}>
          Free Delivery
        </Button>
        <Spacer />
        <Button
          size="sm"
          type="Outline"
          width="35%"
          backgroundColor="#fff"
          borderColor="#808080"
          borderWidth="1"
          borderRadius="10"
          endIcon={
            <Icon
              as={MaterialIcons}
              name="keyboard-arrow-down"
              size={5}
              color={'#808080'}
            />
          }
          _text={{
            color: '#000000',
          }}>
          Minimum Order
        </Button>
      </Flex>
    </Box>
  );
};
