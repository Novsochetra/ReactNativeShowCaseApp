import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { PADDING } from './component/Tab/constant';
import { Tab } from './component/Tab/Tab';
import { Tabs } from './data/Tab.data';
import { IGoogleChromeTabScreenProps } from './GoogleChromeTabScreen.interface';

export const GoogleChromeTabScreen: React.FC<IGoogleChromeTabScreenProps> =
  () => {
    const [data, setData] = useState(Tabs);

    const onSwap = (fromIndex: number, toIndex: number) => {
      setData((prevState) => {
        let newData = Object.assign([], prevState);
        let b = newData[fromIndex];
        newData[fromIndex] = newData[toIndex];
        newData[toIndex] = b;

        return newData;
      });
    };

    return (
      <>
        <Button title="Swap" onPress={() => onSwap(0, 1)} />

        <FlatList
          data={data}
          contentContainerStyle={styles.content}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Tab
                key={index}
                label={item.id.toString()}
                onSwap={onSwap}
                index={index}
              />
            );
          }}
        />
      </>
    );
  };

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'pink',
    padding: PADDING,
  },

  content: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
});
