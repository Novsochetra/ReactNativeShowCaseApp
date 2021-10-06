import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ButtonContinue = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.label}>Continue</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#E95262',
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },

  label: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 0.15,
    color: '#FFFFFF',
  },
});
