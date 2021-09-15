import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IFadeInScreenPresentationProps } from '.';
import { FadeIn } from '@component/FadeIn';

export const FadeInScreenPresentation: React.FC<IFadeInScreenPresentationProps> =
  () => {
    return (
      <View style={styles.container}>
        <FadeIn delayInMS={2000}>
          <Text>Fade In</Text>
        </FadeIn>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
