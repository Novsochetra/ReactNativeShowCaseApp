import React from 'react';
import { StyleSheet, View, ViewStyle, StyleProp } from 'react-native';
import { IRowProps } from './Row.interface';

export const Row: React.FC<IRowProps> = ({
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
    flexDirection: 'row',
    padding: 4,
  },
});
