import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Camera, MapView, UserLocation } from '@rnmapbox/maps';

const HomeScreen = () => {
  const cameraRef = useRef<Camera>(null);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          logoEnabled={false}
          attributionEnabled={false}
          scaleBarEnabled={true}
          styleURL="mapbox://styles/mapbox/satellite-streets-v12">
          <Camera
            ref={cameraRef}
            defaultSettings={{
              centerCoordinate: [83.49405912677422, 18.133569315753608],
              zoomLevel: 14,
            }}
            followUserLocation
          />
          <UserLocation
            androidRenderMode={'compass'}
            visible={true}
            showsUserHeadingIndicator={true}
          />
        </MapView>
      </View>
    </View>
  );
};

export default HomeScreen;

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
  map: {
    flex: 1,
  },
});
