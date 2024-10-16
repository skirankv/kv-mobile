import EncryptedStorage from 'react-native-encrypted-storage';

export const setItemInStorage = async (key: string, value: any) => {
  try {
    await EncryptedStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return;
  }
};

export const getItemFromStorage = async (key: string) => {
  try {
    const session = await EncryptedStorage.getItem(key);
    return JSON.parse(session!);
  } catch (error) {
    return;
  }
};

export const removeItemFromStorage = async (key: string) => {
  try {
    await EncryptedStorage.removeItem(key);
  } catch (error) {
    return;
  }
};

export const clearStorage = async () => {
  try {
    await EncryptedStorage.clear();
  } catch (error) {
    return;
  }
};

export const getPolygonGeoJSonFromPoints = (
  points: any[],
): GeoJSON.FeatureCollection => {
  return {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [points.map((point: any) => [point.long, point.lat])],
        },
      },
    ],
  };
};
