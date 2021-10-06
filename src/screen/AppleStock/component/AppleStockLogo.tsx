import { assets } from '@core/asset';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export const AppleStockLogo = () => {
  return (
    <View>
      <Image source={assets.icons.appleNewsLogo()} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    marginVertical: 16,
  },
});
