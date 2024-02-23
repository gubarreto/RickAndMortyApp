import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, Modal} from 'react-native';

import {styleApp} from '../../assets/styleApp';
import {useGlobal} from '../../context/global';
import ArrowIcon from "../../assets/images/arrow.svg";
import PlanetIcon from "../../assets/images/planet.svg";

const {width, height} = Dimensions.get("window");

export const Card = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  episode,
  url,
  created,
  index,
  isFocused,
  setItemFocused,
}) => {
  const {globalProps} = useGlobal();
  const s = styles();

  const indexItemTopList = [0,1,2];

  return (
    <TouchableOpacity
      onPress={() => setItemFocused(isFocused ? null : id)}
      style={[
        s.container,
        isFocused && s.isFocused,
        indexItemTopList.includes(index) && isFocused && {top: 5},
      ]} 
    >
      <Image src={image} style={s.image}/>
      
      {isFocused &&
        <Modal
          visible={isFocused}
          animationType="slide"
          transparent
        >
          <View style={{flex: 1,backgroundColor: "rgba(0,0,0,0.4)"}}>
          <View style={s.modalContainer}>
            <TouchableOpacity
              style={s.modalNav}
              onPress={() => setItemFocused(null)}
            >
              <ArrowIcon width={26} height={26} color={s.modalNavText.color} style={s.modalNavIcon} />
              <Text style={s.modalNavText}>Back</Text>
            </TouchableOpacity>
            <View style={s.modalContent}>

              <Image src={image} style={s.modalImage}/>

              <Text style={s.modalItemTitle} numberOfLines={2}>{name}</Text>
              
              {status && <BoxText title={"Status"} name={status}/>}
              {species && <BoxText title={"Species"} name={species}/>}
              <BoxText title={"Type"} name={type || "Human"}/>
              {gender && <BoxText title={"Gender"} name={gender}/>}
              {origin?.name && <BoxText title={"Gender"} name={origin.name} icon={PlanetIcon}/>}

            </View>
          </View>
          </View>
        </Modal>
      }

    </TouchableOpacity>
  )
};

const BoxText = ({title, name, icon}) => {
  const s = styles();
  const Icon = icon;
  return (
    <View style={s.modalBox}>
      {icon && <Icon width={24} height={24} color={s.modalItemDescription.color}/>}
      <Text
        style={[s.modalItemDescription, icon && s.marginLeftText]}
        numberOfLines={2}
      >{title}: {name}</Text>
    </View>
  )
};

const styles = () => {
  const {globalProps} = useGlobal();
  return StyleSheet.create({
    container: {
      width: (width/4) - 20,
      height: "auto",
      padding: 5,
      borderRadius: 10,
      alignItems: "center",
      backgroundColor: styleApp[globalProps.theme].background_700,
    },
    image: {
      borderRadius: 4,
      width: (width/4) - 30,
      height: (width/4) - 10,
    },
    isFocused: {
      zIndex: 3,
      opacity: 1,
      transform: [{scale: 1.1}]
    },
    modalContainer: {
      marginTop: "auto",
      width: width,
      paddingVertical: 15,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      backgroundColor: styleApp[globalProps.theme].background_900,
    },
    modalNav: {
      width: 80,
      flexDirection: "row",
    },
    modalNavIcon: {
      transform: [{rotate: "90deg"}],
    },
    modalNavText: {
      color: "#ff3232",
      fontSize: styleApp.title_size,
    },
    modalContent: {
      padding: 15,
    },
    modalImage: {
      width: 160,
      height: 180,
      borderRadius: 8,
      alignSelf: "center",
    },
    modalItemTitle: {
      marginTop: 20,
      fontSize: styleApp.title_size+2,
      color: styleApp[globalProps.theme].font_color,
    },
    modalBox: {
      marginTop: 20,
      borderWidth: 1,
      borderRadius: 12,
      paddingVertical: 10,
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 10,
      borderColor: styleApp[globalProps.theme].background_600,
      backgroundColor: styleApp[globalProps.theme].background_800,
    },
    modalItemDescription: {
      flex: 1,
      fontSize: styleApp.text_size+2,
      color: styleApp[globalProps.theme].font_color,
    },
    marginLeftText: {
      marginLeft: 10,
    },
   });
};