import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Camera, MapView, UserLocation } from '@rnmapbox/maps';
import { PolygonPoints1, PolygonPoints2 } from '../utilities/PolygonPoints';
import { getPolygonGeoJSonFromPoints } from '../utilities/utils';
import Polygon from '../components/Polygon';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          attributionEnabled={false}
          styleURL="mapbox://styles/mapbox/satellite-v9"
          logoEnabled={false}>
          <Camera
            defaultSettings={{
              centerCoordinate: [83.47555027922438, 18.09726756199246],
            }}
            zoomLevel={18}
          />
          <UserLocation
            androidRenderMode={'compass'}
            visible={true}
            showsUserHeadingIndicator={true}
          />
          <Polygon
            polygon={getPolygonGeoJSonFromPoints(PolygonPoints1)}
            polygonId="some-feature1"
          />
          <Polygon
            polygon={getPolygonGeoJSonFromPoints(PolygonPoints2)}
            polygonId="some-feature2"
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
