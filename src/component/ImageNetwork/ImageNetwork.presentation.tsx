import React from 'react';
import Reanimated from 'react-native-reanimated';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { IImageNetworkPresentationProps, Constant } from './';

export const ImageNetworkPresentation: React.FC<IImageNetworkPresentationProps> =
  (props) => {
    const { LoadingComponent, FallbackComponent } = props;
    return (
      <Reanimated.View style={[props.containerStyle]}>
        {props.isError ? (
          <View style={[styles.fallbackComponent]}>{FallbackComponent}</View>
        ) : (
          <Reanimated.Image
            style={[styles.defaultImage, props.imageStyle]}
            source={{ uri: props.uri }}
            onError={props.onLoadImageError}
            onLoad={props.onLoadImageComplete}
            progressiveRenderingEnabled={true}
          />
        )}

        {/* we remove the view after image is loaded to save the momory */}
        {props.isFetchingImage ? (
          <Reanimated.View
            style={[styles.overlayImage, props.animatedImageStyle]}>
            {LoadingComponent ? (
              LoadingComponent
            ) : (
              <ActivityIndicator color="#FFFFFF" size="small" />
            )}
          </Reanimated.View>
        ) : null}
      </Reanimated.View>
    );
  };

const styles = StyleSheet.create({
  defaultImage: {
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow',
  },

  overlayImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 999,
    backgroundColor: '#E6E6E6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fallbackComponent: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E6E6E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
