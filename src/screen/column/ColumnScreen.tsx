import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IColumnScreenProps } from './ColumnScreen.interface';

export const ColumnScreen: React.FC<IColumnScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Column Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
