import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

interface Props {
  resetError: () => void;
}

const ErrorScreen: React.FC<Props> = (props: Props) => {
  const { resetError } = props;

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.mainWrap}>
        <View style={styles.topView}>
          <Image
            source={require('../../assets/broken-plant.png')}
            resizeMode="contain"
            style={styles.brokenPlantImg}
          />
          <Text style={styles.oopsText}>Oops!</Text>
          <View style={styles.descWrap}>
            <Text style={styles.descText}>Something went wrong</Text>
            <Text style={styles.descText}>Please try again</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.tryAgainBtn}
          onPress={() => resetError()}>
          <Text style={styles.tryAgainText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  mainWrapper: { flex: 1, backgroundColor: '#FFF' },
  mainWrap: { flex: 1, justifyContent: 'space-around', alignItems: 'center' },
  topView: { justifyContent: 'center', alignItems: 'center' },
  brokenPlantImg: { height: 250, width: 250 },
  oopsText: { fontSize: 50, fontWeight: 'bold', color: '#1C2D57' },
  descWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  descText: { color: '#1C2D57', fontSize: 18 },
  tryAgainBtn: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#05375A',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryAgainText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
