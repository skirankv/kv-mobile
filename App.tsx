import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BaseNavigator from './src/navigators/BaseNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings';
import ErrorBoundary from 'react-native-error-boundary';
import ErrorScreen from './src/screens/ErrorScreen';
import { NativeBaseProvider } from 'native-base';
import { LogBox } from 'react-native';
import { setItemInStorage } from './src/utilities/utils';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreLogs(['Remote debugger']);
LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary']);
LogBox.ignoreAllLogs();

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
              <BaseNavigator />
            </NativeBaseProvider>
          </ErrorBoundary>
        </RootSiblingParent>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
