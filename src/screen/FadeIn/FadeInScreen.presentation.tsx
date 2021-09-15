import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IFadeInScreenPresentationProps } from '.';
// import { FadeIn } from '@component/FadeIn';
import { FadeInDown } from '@component/FadeInDown';

export const FadeInScreenPresentation: React.FC<IFadeInScreenPresentationProps> =
  () => {
    return (
      <View style={styles.container}>
        {/* <FadeIn delayInMS={2000}>
          <Text>Fade In</Text>
        </FadeIn> */}

        <FadeInDown delayInMS={2000}>
          <Text>Fade In Down</Text>
        </FadeInDown>
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
