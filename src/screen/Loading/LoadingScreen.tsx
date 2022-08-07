import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ClickUpLoadingIndicator } from '@component/LoadingIndicator/ClickUpLoadingIndicator';
import { theme } from '@core/asset/style/theme';

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ClickUpLoadingIndicator color={theme.primary} size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
