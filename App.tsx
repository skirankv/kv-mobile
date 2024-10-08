import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BaseNavigator from './src/navigators/BaseNavigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <BaseNavigator />
      </View>
    </NavigationContainer>
  );
};

export default App;
