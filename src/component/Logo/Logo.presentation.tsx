import { theme } from '@core/asset/style/theme';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ILogoPresentationProps } from './';

export const LogoPresentation: React.FC<ILogoPresentationProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>React Native Animated CSS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },

  logo: {
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 0,
    textAlign: 'center',
    color: theme.primary,
    textShadowColor: theme.primary,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
});
