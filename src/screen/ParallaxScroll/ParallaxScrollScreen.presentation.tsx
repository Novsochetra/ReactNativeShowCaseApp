import React, { forwardRef } from 'react';
import { View, StyleSheet } from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IParallaxScrollScreenPresentationProps, Constant } from '.';
import { Carousel } from './component/Carousel';
import { SizeSection } from './component/SizeSection';
import { SellRecommendation } from './component/SellRecommendation';
import { ColorSection } from './component/ColorSection';
import { ProductDescription } from './component/ProductDescription';

export const ParallaxScrollScreenPresentation = forwardRef<
  Reanimated.ScrollView,
  IParallaxScrollScreenPresentationProps
>(
  (
    {
      animatedHeaderStyle,
      animatedScrollViewStyle,
      onScrollHandler,
      animatedControllStyle,
    },
    ref,
  ) => {
    return (
      <>
        <Reanimated.ScrollView
          ref={ref}
          onScroll={onScrollHandler}
          showsVerticalScrollIndicator={false}
          style={[animatedScrollViewStyle]}>
          <Carousel
            images={Constant.CAROUSEL_IMAGES}
            style={animatedHeaderStyle}
            animatedControllStyle={animatedControllStyle}
          />

          <View style={styles.wrapper}>
            <ProductDescription />

            <ColorSection />

            <SizeSection />

            <SellRecommendation />
          </View>
        </Reanimated.ScrollView>
      </>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#EEEEEE',
  },
});
