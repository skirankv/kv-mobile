import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox, {MapView} from '@rnmapbox/maps';

Mapbox.setAccessToken(
  'pk.eyJ1Ijoia3Jpc2hpdmVkaWthIiwiYSI6ImNsdGQ1MGpsdzAyb2QybG0yeDNheWdheWwifQ.n2SXymzs0FWbxb2XtL22jw',
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});

export default class App extends Component {
  componentDidMount() {
    // Mapbox.setConnected(true);
    Mapbox.setTelemetryEnabled(false);
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapView style={styles.map} />
        </View>
      </View>
    );
  }
}
