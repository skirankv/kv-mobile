import { LineLayer, ShapeSource } from '@rnmapbox/maps';
import React, { useMemo } from 'react';

type Position = [number, number];

const lineLayerStyle = {
  lineColor: '#ff0000',
};

const Polygon = ({ coordinates }: { coordinates: Position[] }) => {
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
  //   console.log('=> features', JSON.stringify(features));
  return (
    <ShapeSource id={'shape-source-id-0'} shape={features}>
      <LineLayer id={'line-layer'} style={lineLayerStyle} />
    </ShapeSource>
  );
};

export default Polygon;
