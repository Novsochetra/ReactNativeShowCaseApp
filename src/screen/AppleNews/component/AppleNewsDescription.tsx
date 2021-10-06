import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const AppleNewsDescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Siri suggests stories, channels, and topics based on Safari and app
        usage. You can change this in Settings
      </Text>

      <Text style={[styles.text, styles.aboutText]}>
        About Apple News & Privacy
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    flexGrow: 1,
  },

  text: {
    fontSize: 16,
    letterSpacing: 0.15,
    color: 'lightgray',
  },

  aboutText: {
    color: '#E95262',
    fontWeight: 'bold',
    marginTop: 16,
  },
});
