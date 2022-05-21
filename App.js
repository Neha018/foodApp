import React from 'react';
import {I18nManager} from 'react-native';

import {extendTheme, NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

const theme = extendTheme({
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto-Thin',
        italic: 'Roboto-ThinItalic',
      },
      200: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      300: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      400: {
        normal: 'Roboto-Regular',
        italic: 'Roboto-RegularItalic',
      },
      500: {
        normal: 'Roboto-Medium',
        italic: 'Roboto-MediumItalic',
      },
      600: {
        normal: 'Roboto-Condensed',
        italic: 'Roboto-CondensedItalic',
      },
      700: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
      800: {
        normal: 'Roboto-BoldCondensed',
        italic: 'Roboto-BoldCondensedItalic',
      },
      900: {
        normal: 'Roboto-Black',
        italic: 'Roboto-BlackItalic',
      },
    },
    Almarai: {
      300: {
        normal: 'Almarai-Light',
      },
      400: {
        normal: 'Almarai-Regular',
      },
      700: {
        normal: 'Almarai-Bold',
      },
      800: {
        normal: 'Almarai-ExtraBold',
      },
    },
  },
  fonts: {
    heading: I18nManager.isRTL ? 'Almarai' : 'Roboto',
    body: I18nManager.isRTL ? 'Almarai' : 'Roboto',
    mono: I18nManager.isRTL ? 'Almarai' : 'Roboto',
    almarai: 'Almarai',
  },
  colors: {
    primary: {
      50: '#ffe4e4',
      100: '#fdb7b9',
      200: '#f68a8d',
      300: '#f05b61',
      400: '#eb2e34',
      500: '#d1141b',
      600: '#a40d14',
      700: '#75070e',
      800: '#490306',
      900: '#1f0000',
    },
  },
  components: {
    Checkbox: {
      baseStyle: {
        _checked: {
          borderColor: 'primary.400',
          bg: 'primary.400',
        },
      },
    },
    Radio: {
      baseStyle: {
        _icon: {
          color: 'primary.400',
        },
        _checked: {
          _interactionBox: {
            borderColor: 'primary.400',
          },
          borderColor: 'primary.400',
        },
      },
    },
    Modal: {
      baseStyle: {
        _backdrop: {
          opacity: '.65',
        },
      },
    },
    Divider: {
      baseStyle: {
        bg: '#F1F1F1',
      },
    },
  },
});

const App = () => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <AppNavigator />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;
