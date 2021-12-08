import React, { useState } from 'react';
import { ImageStyle } from 'react-native';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  IImageNetworkContainerProps,
  ImageNetworkPresentation,
  Constant,
} from '.';
import { IImageStatus } from './ImageNetwork.interfaces';

export const ImageNetwork: React.FC<IImageNetworkContainerProps> = (props) => {
  const [status, setStatus] = useState<IImageStatus>(IImageStatus.LOADING);
  const opacity = useSharedValue(1);

  const animatedImageStyle = useAnimatedStyle((): ImageStyle => {
    return {
      opacity: opacity.value,
    };
  });

  const onLoadImageError = () => {
    setStatus(IImageStatus.FAILED);
  };

  const onLoadImageComplete = () => {
    opacity.value = withTiming(
      0,
      { duration: Constant.FADE_OUT_DURATION },
      (isFinished) => {
        if (isFinished) {
          runOnJS(setStatus)(IImageStatus.COMPLETED);
        }
      },
    );
  };

  return (
    <ImageNetworkPresentation
      {...props}
      status={status}
      animatedImageStyle={animatedImageStyle}
      onLoadImageError={onLoadImageError}
      onLoadImageComplete={onLoadImageComplete}
    />
  );
};
