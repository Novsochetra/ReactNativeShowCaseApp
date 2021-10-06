import { assets } from '@core/asset';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import {
  FadeInUp,
  FadeOut,
  SlideInUp,
  ZoomIn,
} from 'react-native-animated-css';
import { IAppleStockScreenPresentationProps } from '.';
import { AppleStockDescription } from './component/AppleStockDescription';
import { AppleStockHeader } from './component/AppleStockHeader';
import { AppleStockLogo } from './component/AppleStockLogo';
import { ButtonContinue } from './component/ButtonContinue';

export const AppleStockScreenPresentation: React.FC<IAppleStockScreenPresentationProps> =
  () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 4000);

      return () => clearTimeout(timeout);
    }, []);

    return (
      <View style={styles.container}>
        <ZoomIn delayInMS={1000} durationInMS={1000} preset="EASE_OUT_QUAD">
          <SlideInUp
            delayInMS={3000}
            durationInMS={1000}
            preset="EASE_OUT_QUAD">
            <FadeOut
              delayInMS={3000}
              durationInMS={1000}
              preset="EASE_OUT_QUAD">
              <AppleStockLogo />
            </FadeOut>

            <AppleStockHeader />
          </SlideInUp>
        </ZoomIn>

        {!isLoading ? (
          <>
            <FadeInUp durationInMS={500} preset="EASE_OUT_QUAD">
              <AppleStockDescription
                icon={assets.icons.appleStockStar()}
                label="All New Design"
                description="Easy view stock quotes, interactive charts, and top news."
              />
            </FadeInUp>

            <FadeInUp delayInMS={250} durationInMS={500} preset="EASE_OUT_QUAD">
              <AppleStockDescription
                icon={assets.icons.appleStockChart()}
                label="Bussiness News"
                description="Read Story provide by Yahoo right in the app."
              />
            </FadeInUp>

            <FadeInUp delayInMS={500} durationInMS={500} preset="EASE_OUT_QUAD">
              <AppleStockDescription
                icon={assets.icons.appleStockDevice()}
                label="iPhone, iPad, and Mac"
                description="Use iCloud to view stocks and news on all your devices."
              />
            </FadeInUp>

            <View style={styles.buttonWrapper}>
              <FadeInUp
                delayInMS={750}
                durationInMS={500}
                preset="EASE_OUT_SINE">
                <ButtonContinue />
              </FadeInUp>
            </View>
          </>
        ) : (
          <View style={styles.loadingWrapper}>
            <ActivityIndicator color="gray" />
          </View>
        )}
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

  buttonWrapper: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },

  loadingWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
