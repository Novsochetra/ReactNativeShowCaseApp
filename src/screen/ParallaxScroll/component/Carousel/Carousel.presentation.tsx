import React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Reanimated from 'react-native-reanimated';
import { ICarouselPresentationProps } from './Carousel.interfaces';
import { Constant } from './Carousel.constant';
import { ControllButton } from './component/ControllButton';
import { CarouselItem } from './component/CarouselItem';

export const CarouselPresentation: React.FC<ICarouselPresentationProps> = ({
  refs,
  style,
  images,
  dotStyle,
  controllButtonStyle,
  onChangeSlide,
  onScrollHandler,
}) => {
  return (
    <Container>
      <View style={styles.activeSlideIndexContainer}>
        <View style={styles.row}>
          <ScrollView
            ref={refs.scrollActiveCountRef}
            pagingEnabled
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            style={styles.activeSlideIndexWrapper}>
            {Array.from({ length: images.length }).map((_, index) => (
              <View
                style={styles.activeSlideIndexTextWrapper}
                key={`active-text-${index}`}>
                <Text style={styles.activeSlideIndexText}>{index + 1} </Text>
              </View>
            ))}
          </ScrollView>
          <View>
            <Text style={styles.activeSlideIndexText}>/ {images.length}</Text>
          </View>
        </View>
      </View>

      <Reanimated.ScrollView
        ref={refs.scrollRef}
        onScroll={onScrollHandler}
        style={[style]}
        horizontal
        pagingEnabled
        directionalLockEnabled
        onScrollAnimationEnd={() => {
          console.log('END');
        }}
        showsHorizontalScrollIndicator={false}>
        {images.map((imageURL, i) => {
          return (
            <CarouselItem
              key={`carousel-item-${i}`}
              url={imageURL}
              backgroundColor="#C85C5C"
            />
          );
        })}
      </Reanimated.ScrollView>

      <ControllButton
        size={images.length}
        onChangeSlide={onChangeSlide}
        controllButtonStyle={controllButtonStyle}
        dotStyle={dotStyle}
      />
    </Container>
  );
};

const Container: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  carouselItemContainer: {
    width: Dimensions.get('window').width,
    height: 300,
    backgroundColor: '#F9975D',
  },

  row: {
    flexDirection: 'row',
  },

  // active slide
  activeSlideIndexContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    position: 'absolute',
    bottom: 16,
    right: 16,
    zIndex: 999,
  },

  activeSlideIndexWrapper: {
    height: 20,
    color: '#FFFFFF',
  },

  activeSlideIndexTextWrapper: {
    height: Constant.ACTIVE_SLIDE_INDEX_HEIGHT,
  },

  activeSlideIndexText: {
    color: 'white',
  },
});
