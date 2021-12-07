import { ImageStyle, ImageProps, ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IImageNetworkContainerProps
  extends Omit<ImageProps, 'source' | 'onError' | 'style'> {
  uri: string;
  LoadingComponent?: React.ReactElement;
  FallbackComponent?: React.ReactElement;
  imageStyle?: Reanimated.AnimateStyle<ImageStyle>;
  containerStyle?: Reanimated.AnimateStyle<ViewStyle>;
}

export interface IImageNetworkPresentationProps
  extends IImageNetworkContainerProps {
  isError: boolean;
  isFetchingImage: boolean;
  isLoadedImageSuccess: boolean;
  animatedImageStyle: Reanimated.AnimatedStyleProp<ImageStyle>;
  onLoadImageError: () => void;
  onLoadImageComplete: () => void;
}
