import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@core/asset/style/theme';
import { IHeaderProps } from './Header.interface';

export const Header: React.FC<IHeaderProps> = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: theme.primaryLight,
  },

  title: {
    color: theme.white,
  },
});
