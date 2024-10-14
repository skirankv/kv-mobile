import { Camera, MapView, UserLocation } from '@rnmapbox/maps';
import React, { useMemo, useRef, useState } from 'react';
import { Button, View } from 'react-native';
import Polygon from './Polygon';
import CrosshairOverlay from './CrosshairOverlay';

type Position = [number, number];

const DrawPolyline = () => {
  const [coordinates, setCoordinates] = useState<Position[]>([]);
  const [lastCoordinate, setLastCoordinate] = useState<Position>([0, 0]);
  const [started, setStarted] = useState(false);
  const [crosshairPos, setCrosshairPos] = useState([0, 0]);

  const coordinatesWithLast = useMemo(() => {
    return [...coordinates, lastCoordinate];
  }, [coordinates, lastCoordinate]);

  const map = useRef<MapView>(null);

  const newLocal = 'row';
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MapView
          ref={map}
          style={{ flex: 1 }}
          styleURL="mapbox://styles/mapbox/satellite-streets-v12"
          logoEnabled={false}
          attributionEnabled={false}
          onCameraChanged={async e => {
            const crosshairCoords = await map.current?.getCoordinateFromView(
              crosshairPos,
            );
            // console.log(
            //   'Crosshair coords: ',
            //   crosshairCoords,
            //   'camera center:',
            //   e.properties.center,
            // );
            setLastCoordinate(crosshairCoords as Position);
            if (crosshairCoords && started) {
              setLastCoordinate(crosshairCoords as Position);
            }
          }}>
          {started && <Polygon coordinates={coordinatesWithLast} />}
          <Camera
            defaultSettings={{
              centerCoordinate: [83.49405912677422, 18.133569315753608],
              zoomLevel: 16,
            }}
            followUserLocation
          />
          <UserLocation
            androidRenderMode={'compass'}
            visible={true}
            showsUserHeadingIndicator={true}
          />
        </MapView>
        <CrosshairOverlay onCenter={c => setCrosshairPos(c)} />
      </View>
      <View>
        {!started ? (
          <Button
            title="start"
            onPress={() => {
              setStarted(true);
              setCoordinates([lastCoordinate]);
            }}
          />
        ) : (
          <View
            style={{
              flexDirection: newLocal,
              justifyContent: 'center',
              gap: 10,
            }}>
            <Button
              title="add"
              onPress={() => setCoordinates([...coordinates, lastCoordinate])}
            />
            <Button
              title="stop"
              onPress={() => {
                console.log('coordinates', coordinates);
                setStarted(false);
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default DrawPolyline;
