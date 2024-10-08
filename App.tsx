import React, { useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BaseNavigator from './src/navigators/BaseNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings';
import ErrorBoundary from 'react-native-error-boundary';
import ErrorScreen from './src/screens/ErrorScreen';
import { NativeBaseProvider } from 'native-base';

const App: React.FC = () => {
  const CustomFallback = (props: { error: Error; resetError: () => void }) => (
    <ErrorScreen resetError={props.resetError} />
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootSiblingParent>
          <ErrorBoundary FallbackComponent={CustomFallback}>
            <NativeBaseProvider>
              <View style={{ flex: 1 }}>
                <BaseNavigator />
              </View>
            </NativeBaseProvider>
          </ErrorBoundary>
        </RootSiblingParent>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
