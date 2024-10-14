import { StyleSheet, View } from 'react-native';
import React from 'react';
import DrawPolyline from '../components/DrawPolyline';

const MapScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <DrawPolyline />
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato',
  },
});
