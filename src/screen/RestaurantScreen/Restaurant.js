import React from 'react';
import {ScrollView} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RestaurantHeader} from '../../component/restaurant/RestaurantHeader';
import {Cuisine} from '../../component/home/Cuisine';
import {Filter} from '../../component/restaurant/Filter';
import {RestaurantList} from '../../component/restaurant/Restaurant';

export const Restaurant = ({navigation}) => {
  return (
    <SafeAreaView edges={['top']}>
      <ScrollView backgroundColor="#fff">
        {/* Header */}
        <RestaurantHeader navigation={navigation} />
        {/* Cuisine horizontal list */}
        <Cuisine />
        {/*  Filter */}
        <Filter />
        {/*  RestaurantList */}
        <RestaurantList />
      </ScrollView>
    </SafeAreaView>
  );
};
