import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IDividerProps } from './Divider.interface';
import { theme } from '@core/asset/style/theme';

export const Divider: React.FC<IDividerProps> = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 0.5,
    width: '100%',
    backgroundColor: theme.lightgray,
  },
});
