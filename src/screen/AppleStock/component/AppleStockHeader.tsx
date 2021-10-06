import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const AppleStockHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to</Text>
      </View>
      <View>
        <Text style={[styles.title, styles.appleNewText]}>Stocks</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },

  title: {
    color: 'pink',
    fontSize: 50,
    lineHeight: 50,
    fontWeight: 'bold',
    transform: [{ translateY: 5 }],
  },

  appleNewText: {
    color: 'lightblue',
  },
});
