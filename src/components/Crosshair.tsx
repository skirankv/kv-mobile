import React, { ComponentProps, forwardRef } from 'react';
import { View } from 'react-native';

interface CrosshairProps {
  size: number;
  w: number;
  onLayout: ComponentProps<typeof View>['onLayout'];
}

const Crosshair = forwardRef<View, CrosshairProps>(
  ({ size, w, onLayout }: CrosshairProps, ref) => (
    <View
      onLayout={onLayout}
      ref={ref}
      style={{
        width: 2 * size + 1,
        height: 2 * size + 1,
      }}>
      <View
        style={{
          position: 'absolute',
          left: size,
          top: 0,
          bottom: 0,
          borderColor: 'red',
          borderWidth: w / 2.0,
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: size,
          left: 0,
          right: 0,
          borderColor: 'red',
          borderWidth: w / 2.0,
        }}
      />
    </View>
  ),
);

export default Crosshair;
