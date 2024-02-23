import {StyleSheet, Dimensions} from 'react-native';
import {styleApp} from '../../assets/styleApp';
import {useGlobal} from '../../context/global';

const {width, height} = Dimensions.get('window');

const styles = () => {
  const {globalProps} = useGlobal();
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: styleApp["dark"].background_900,
    },
    loading: {
      color: styleApp["dark"].font_color,
    },

   });
};
export default styles;