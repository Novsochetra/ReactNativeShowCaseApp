import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ITabItemPresentationProps } from '.';

export const TabItemPresentation: React.FC<ITabItemPresentationProps> = (
  props,
) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View onLayout={props.onLayout} style={styles.container}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
