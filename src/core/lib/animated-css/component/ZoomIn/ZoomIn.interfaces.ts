import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IEasingPreset } from '../../core/animation/EasingPreset.interface';

export interface IZoomInContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  preset: IEasingPreset;
}

export interface IZoomInPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
