import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  Camera,
  LineLayer,
  MapView,
  PointAnnotation,
  ShapeSource,
  UserLocation,
  UserTrackingMode,
} from '@rnmapbox/maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Modal from "react-native-modalbox"

type Position = [number, number];

const lineLayerStyle = {
  lineColor: 'orange',
  lineWidth: 3.0,
  lineDasharray: [2, 2],
};

const Polygon = ({ coordinates }: { coordinates: GeoJSON.Position[] }) => {
  const features: GeoJSON.FeatureCollection = useMemo(() => {
    return {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          id: 'a-feature',
          geometry: {
            type: 'LineString',
            coordinates,
          },
          properties: {},
        } as const,
      ],
    };
  }, [coordinates]);
  // console.log('=> features', JSON.stringify(features));
  return (
    <ShapeSource id={'shape-source-id-0'} shape={features}>
      <LineLayer id={'line-layer'} style={lineLayerStyle} />
    </ShapeSource>
  );
};

const AddFarm = () => {
  const [pointList, setPointList] = useState<GeoJSON.Position[]>([]);
  const [latLongPoints, setLatLongPoints] = useState<any>([]);
  const [saveModalOpen, setSaveModalOpen] = useState<boolean>(false);

  const onPressMap = (e: GeoJSON.Feature) => {
    const geometry = e.geometry as GeoJSON.Point;
    setPointList(pl => [...pl, geometry.coordinates]);
    setLatLongPoints((pl: any) => [
      ...pl,
      { long: geometry.coordinates[0], lat: geometry.coordinates[1] },
    ]);
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          attributionEnabled={false}
          onPress={onPressMap}
          styleURL="mapbox://styles/mapbox/satellite-v9"
          logoEnabled={false}>
          <Camera
            defaultSettings={{
              centerCoordinate: [83.47555027922438, 18.09726756199246],
            }}
            zoomLevel={18}
            followUserLocation={true}
            followUserMode={UserTrackingMode.Follow}
            followZoomLevel={14}
          />
          <UserLocation
            androidRenderMode={'compass'}
            visible={true}
            showsUserHeadingIndicator={true}
          />
          {pointList.map((point, index) => (
            <PointAnnotation
              key={`pt-ann-${index}`}
              id={`pt-ann-${index}`}
              coordinate={point}
              onSelected={() => console.log('selected', index)}>
              <View>
                {/* <Ionicons name="pin-sharp" size={24} color="#000" /> */}
                {/* <FontAwesome5 name="map-pin" size={24} color="#000" /> */}
                <FontAwesome5 name="dot-circle" size={20} color="#000" />
              </View>
            </PointAnnotation>
          ))}

          {pointList && pointList.length > 1 && (
            <Polygon coordinates={[...pointList, pointList[0]]} />
          )}
        </MapView>
        <View style={styles.mapBtnsWrapper}>
          <TouchableOpacity
            style={styles.polygonIcon}
            onPress={() => setSaveModalOpen(true)}>
            {/* <FontAwesome5 name="draw-polygon" size={22} color="#000" /> */}
            <FontAwesome5 name="check" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.polygonIcon}
            onPress={() => setPointList([])}>
            <MaterialCommunityIcons name="delete" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        {/* {saveModalOpen && (
            <Modal
        )} */}
      </View>
    </View>
  );
};

export default AddFarm;

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
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  polygonIcon: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapBtnsWrapper: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'column',
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
});
