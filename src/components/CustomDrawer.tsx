import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { ImageBackground, Image, View, Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

const CustomDrawer: React.FC<any> = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
        source={require('../../assets/agriculture.png')}
        style={{ height: 140, marginTop: -5 }}>
        <Image
          source={require('../../assets/farmer.png')}
          style={styles.userImg}
          resizeMode="contain"
        />
      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: width / 2 - 95,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: 'orange',
  },
  drawerListWrapper: {
    marginTop: 65,
  },
});
