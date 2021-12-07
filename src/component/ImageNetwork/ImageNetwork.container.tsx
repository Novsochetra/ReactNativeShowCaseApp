import React, { useState } from 'react';
import { ImageStyle } from 'react-native';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { IImageNetworkContainerProps, ImageNetworkPresentation } from '.';

export const ImageNetwork: React.FC<IImageNetworkContainerProps> = (props) => {
  const [isFetchingImage, setIsFetchingImage] = useState(true);
  const [isLoadedImageSuccess, setIsLoadImageSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const opacity = useSharedValue(1);

  const animatedImageStyle = useAnimatedStyle((): ImageStyle => {
    return {
      opacity: opacity.value,
    };
  });

  const onLoadImageError = () => {
    setIsError(true);
    setIsLoadImageSuccess(false);
    if (isFetchingImage) {
      setIsFetchingImage(false);
    }
  };

  const onLoadImageComplete = () => {
    if (isError) {
      setIsError(false);
    }

    opacity.value = withTiming(0, { duration: 500 }, (isFinished) => {
      if (isFinished) {
        runOnJS(setIsLoadImageSuccess)(true);
        runOnJS(setIsFetchingImage)(false);
      }
    });
  };

  return (
    <ImageNetworkPresentation
      {...props}
      isError={isError}
      isFetchingImage={isFetchingImage}
      isLoadedImageSuccess={isLoadedImageSuccess}
      animatedImageStyle={animatedImageStyle}
      onLoadImageError={onLoadImageError}
      onLoadImageComplete={onLoadImageComplete}
    />
  );
};
