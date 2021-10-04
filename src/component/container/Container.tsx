import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IContainerProps } from './Container.interface';

export const Container: React.FC<IContainerProps> = ({
  backgroundColor = 'hsl(0,0%,100%)',
  margin = 0,
  padding = 4,
  children,
}) => {
  return (
    <View style={[styles.container, { backgroundColor, margin, padding }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
