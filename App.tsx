import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BaseNavigator from './src/navigators/BaseNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings';
import ErrorBoundary from 'react-native-error-boundary';
import ErrorScreen from './src/screens/ErrorScreen';
import { NativeBaseProvider } from 'native-base';
import { LogBox, Platform } from 'react-native';
import Mapbox from '@rnmapbox/maps';

const mapBoxToken =
  'pk.eyJ1Ijoia3Jpc2hpdmVkaWthIiwiYSI6ImNsdGQ1MGpsdzAyb2QybG0yeDNheWdheWwifQ.n2SXymzs0FWbxb2XtL22jw';

Mapbox.setAccessToken(mapBoxToken);

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreLogs(['Remote debugger']);
LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary']);
LogBox.ignoreAllLogs();

const App: React.FC = () => {
  const CustomFallback = (props: { error: Error; resetError: () => void }) => (
    <ErrorScreen resetError={props.resetError} />
  );

  useEffect(() => {
    hasLocationPermission();
    Mapbox.setTelemetryEnabled(false);
  }, []);

  const hasLocationPermission = async () => {
    if (
      Platform.OS === 'ios' ||
      (Platform.OS === 'android' && Platform.Version < 23)
    ) {
      return true;
    }
    const isGranted = await Mapbox.requestAndroidLocationPermissions();
    return isGranted;
  };

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
