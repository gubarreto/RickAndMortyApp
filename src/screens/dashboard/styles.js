import {StyleSheet, Dimensions} from 'react-native';
import {styleApp} from '../../assets/styleApp';
import {useGlobal} from '../../context/global';

const {width, height} = Dimensions.get('window');

const styles = () => {
  const {globalProps} = useGlobal();
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 15,
      backgroundColor: styleApp[globalProps.theme].background_900,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    title: {
      marginBottom: 15,
      marginHorizontal: 15,
      fontSize: styleApp.title_size,
      color: styleApp[globalProps.theme].font_color,
    },
    flatlist: {
      paddingHorizontal: 15,
    },
    rowFlatList: {
      flex: 1/4,
      justifyContent: "space-around"
    },
    itemIsFocusedBackground: {
      top: 0,
      left: 0,
      zIndex: 2,
      width: width,
      height: height,
      position: "absolute",
      backgroundColor: "rgba(0,0,0, 0.4)",
    },

   });
};
export default styles;
