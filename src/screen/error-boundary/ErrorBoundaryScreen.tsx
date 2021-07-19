import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ErrorBoundaryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Error Boundary Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
