import React from 'react';
import {ScrollView} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native';
import {Cuisine} from '../../component/home/Cuisine';
import {EarlyOrder} from '../../component/home/EarlyOrder';
import {FreeDelivery} from '../../component/home/FreeDelivery';
import {Header} from '../../component/home/Header';
import {OrderSection} from '../../component/home/OrderSection';
import {WalletSection} from '../../component/home/WalletSection';
import {NewlyArrived} from '../../component/home/NewlyArrived';

export const Home = ({navigation}) => {
  return (
    <SafeAreaView edges={['top']}>
      <ScrollView backgroundColor="#fff">
        {/*Header*/}
        <Header />
        {/*Banner*/}
        <Image
          source={require('../../../assets/images/restaurant/4.png')}
          style={{width: '100%', height: 180}}
          resizeMode={'cover'}
        />
        {/* Cuisine horizontal list */}
        <Cuisine />
        {/* Order Section */}
        <OrderSection navigation={navigation} />
        {/*  Wallet Section */}
        <WalletSection />
        {/*  New Arrived */}
        <NewlyArrived />
        {/* Early Order Pick */}
        <EarlyOrder />
        {/* Free Delivery */}
        <FreeDelivery />
      </ScrollView>
    </SafeAreaView>
  );
};
