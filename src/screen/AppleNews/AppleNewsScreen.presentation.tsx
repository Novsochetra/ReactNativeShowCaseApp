import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { FadeInUp, SlideInUp, ZoomIn } from 'react-native-animated-css';
import { IAppleNewsScreenPresentationProps } from '.';
import { AppleNewsDescription } from './component/AppleNewsDescription';
import { AppleNewsHeader } from './component/AppleNewsHeader';
import { AppleNewsLogo } from './component/AppleNewsLogo';
import { ButtonContinue } from './component/ButtonContinue';

export const AppleNewsScreenPresentation: React.FC<IAppleNewsScreenPresentationProps> =
  () => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setDescriptionVisible(true);
      }, 3000);
    }, []);

    return (
      <View style={styles.container}>
        <ZoomIn delayInMS={1000} durationInMS={1000} preset="EASE_OUT_QUAD">
          <SlideInUp
            delayInMS={3000}
            durationInMS={1000}
            preset="EASE_OUT_QUAD">
            <AppleNewsLogo />

            <AppleNewsHeader />
          </SlideInUp>
        </ZoomIn>

        <View style={styles.descriptionContainer}>
          {descriptionVisible ? (
            <FadeInUp durationInMS={1000} preset="EASE_OUT_QUAD">
              <AppleNewsDescription />

              <FadeInUp
                delayInMS={250}
                durationInMS={1000}
                preset="EASE_OUT_QUAD">
                <ButtonContinue />
              </FadeInUp>
            </FadeInUp>
          ) : (
            <ActivityIndicator color="gray" />
          )}
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    padding: 32,
  },

  descriptionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
