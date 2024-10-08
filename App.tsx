import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        {/* <Text>App</Text> */}
        <HomeScreen />
      </View>
    </NavigationContainer>
  );
};

export default App;
