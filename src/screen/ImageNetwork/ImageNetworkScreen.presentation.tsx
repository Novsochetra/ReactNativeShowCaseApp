import { ImageNetwork } from '@component/ImageNetwork';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IImageNetworkScreenPresentationProps } from '.';

export const ImageNetworkScreenPresentation: React.FC<IImageNetworkScreenPresentationProps> =
  () => {
    return (
      <View>
        <View style={styles.imageWrapper}>
          <ImageNetwork
            uri="https://picsum.photos/2000/3000"
            LoadingComponent={<Text>Loading ....</Text>}
          />
        </View>

        <View style={styles.imageWrapper}>
          <ImageNetwork
            uri="https://picsum.photos/2000/3000/ljadflkjaslkdfasf"
            LoadingComponent={<Text>Loading ....</Text>}
            FallbackComponent={<Text>Unable to load image....</Text>}
          />
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  imageWrapper: {
    width: '100%',
    height: 300,
  },
});
