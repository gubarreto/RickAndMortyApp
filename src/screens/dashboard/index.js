import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, View, TouchableOpacity, Text} from 'react-native';

import {Card} from './card';
import styles from './styles';
import {getCharacters, getEpisode} from '../../services/request';

export const DashboardScreen = () => {
  const [itemFocused, setItemFocused] = useState(null);
  const [listCharacters, setListCharacters] = useState([]);
  const s = styles();

  useEffect(() => {
    const _getData = async() => {
      const request = await getCharacters();
      if (request) {
        setListCharacters(request);
      };
    };
    _getData();
  }, []);

  return (
    <>
      <SafeAreaView style={s.container}>
        <Text style={s.title}>Characters</Text>
        <FlatList
          numColumns={4}
          style={s.flatlist}
          data={listCharacters}
          scrollEnabled={!itemFocused}
          keyExtractor={(_, index)=>index}
          columnWrapperStyle={s.rowFlatList}
          ItemSeparatorComponent={(<View style={{height: 20}}/>)}
          renderItem={({item, index}) => (
            <Card
              {...item}
              index= {index}
              setItemFocused={setItemFocused}
              isFocused={itemFocused == item.id}
            />
          )}
        />
      </SafeAreaView>
    </>
  )
};