import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, ActivityIndicator, useColorScheme} from 'react-native';

import styles from './styles';
import {useGlobal} from '../../context/global';

export const SplashScreen = () => {
  const {setGlobalProps} = useGlobal();
  const themeDevice = useColorScheme();
  const s = styles();

  useEffect(() => {
    setTimeout(async() => {
      const themeStorageToString = await AsyncStorage.getItem("@theme");
      const themeStorage = await JSON.parse(themeStorageToString);
      const globalProps = {
        isAppLoading: false,
        theme: themeStorageToString ? themeStorage : themeDevice,
      };
      setGlobalProps("setAllProps", globalProps);
    }, 1000);
  }, []);
  

  return (
    <>
      <View style={s.container}>
        <ActivityIndicator size="large" />
      </View>
    </>
  )
};