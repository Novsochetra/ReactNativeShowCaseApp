import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IContainerScreenProps } from './ContainerScreen.interface';
import { ListItem } from '@component/list-item/ListItem';

export const ContainerScreen = (_: IContainerScreenProps) => {
  return (
    <View style={[styles.container]}>
      <Text>Container Screen</Text>
      <ListItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'hsl(100, 50%, 100%)',
  },
});
