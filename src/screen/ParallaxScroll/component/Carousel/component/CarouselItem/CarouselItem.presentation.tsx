import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { ICarouselItemPresentationProps } from './';

export const CarouselItemPresentation: React.FC<ICarouselItemPresentationProps> =
  ({ url, backgroundColor }) => {
    return (
      <View style={[styles.carouselItemContainer, { backgroundColor }]}>
        <Image
          source={{
            uri: url,
          }}
          style={styles.image}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  carouselItemContainer: {
    width: Dimensions.get('window').width,
    height: 300,
    backgroundColor: '#F9975D',
  },

  image: {
    width: '100%',
    height: 300,
  },
});
