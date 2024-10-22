import React from 'react';
import { FillLayer, LineLayer, ShapeSource } from '@rnmapbox/maps';

interface Props {
  polygon: GeoJSON.FeatureCollection;
  polygonId: string;
}

const Polygon: React.FC<Props> = (props: Props) => {
  const { polygon, polygonId } = props;

  return (
    <ShapeSource id={polygonId} shape={polygon}>
      <LineLayer
        sourceID={polygonId}
        id={`${polygonId}-line`}
        style={{
          lineColor: '#ffffff',
          lineWidth: 3,
        }}
      />
      <FillLayer
        sourceID={polygonId}
        id={`${polygonId}-fill`}
        style={{
          fillColor: ['interpolate', ['linear'], ['zoom'], 0, '#0daa00'],
          fillOpacity: 0.3,
        }}
      />
    </ShapeSource>
  );
};

export default Polygon;
