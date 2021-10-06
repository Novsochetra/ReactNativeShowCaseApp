import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const AppleNewsHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to</Text>
      </View>
      <View>
        <Text style={[styles.title, styles.appleNewText]}>Apple News</Text>
      </View>
      <Text style={styles.subTitle}>
        The best stories from the sources you love, selected just for you
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },

  title: {
    // fontWeight: 'bold',
    // fontSize: 48,
    // // lineHeight: 48,
    // backgroundColor: 'green',
    // marginVertical: 4,
    // color: '#FFFFFF',
    // letterSpacing: 0,
    // padding: 0,
    color: 'pink',
    fontSize: 50,
    lineHeight: 50,
    fontWeight: 'bold',
    transform: [{ translateY: 5 }],
  },

  appleNewText: {
    color: '#E95262',
  },

  subTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 16,
  },
});
