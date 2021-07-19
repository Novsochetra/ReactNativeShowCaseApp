import React from 'react';
import { StyleSheet, View, ViewStyle, StyleProp } from 'react-native';
import { IColumnProps } from './Column.interface';

export const Column: React.FC<IColumnProps> = ({
  children,
  padding = 4,
  backgroundColor = 'hsl(0, 0, 100%)',
  mainAxisAlignment,
  crossAxisAlignment,
}) => {
  let style: StyleProp<ViewStyle> = {
    padding,
    alignItems: crossAxisAlignment,
    justifyContent: mainAxisAlignment,
    backgroundColor,
  };
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 4,
  },
});
