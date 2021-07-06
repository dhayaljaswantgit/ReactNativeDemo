import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
  loadingMain: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 111,
    flex: 1,
    width,
    height,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
});
