import React from 'react';
import {Flex, Spacer, Text} from 'native-base';
import {SvgXml} from 'react-native-svg';
import {Wallet} from '../../svg';
import {ImageBackground} from 'react-native';

export const WalletSection = () => {
  return (
    <ImageBackground
      source={require('../../../assets/images/bg_wallet.png')}
      style={{width: '100%', height: 100, marginTop: 25}}
      resizeMode={'contain'}>
      <Flex direction="row" pl="5" pr="5" alignItems="center">
        <Flex direction="column" h="100" pt="2" pb="2">
          <Text
            color="#fff"
            fontSize="lg"
            fontFamily="body"
            fontWeight={600}
            fontStyle="normal">
            Wallet Balance
          </Text>
          <Spacer />
          <Text
            color="#fff"
            fontSize="3xl"
            fontFamily="body"
            fontWeight={600}
            fontStyle="normal">
            KD 3.000
          </Text>
        </Flex>
        <Spacer />
        <SvgXml xml={Wallet} width={'40'} height={'40'} />
      </Flex>
    </ImageBackground>
  );
};
