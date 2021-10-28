import { IEasingPreset } from '../../core/animation/EasingPreset.interface';
import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IRotateInContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  preset?: IEasingPreset;
}

export interface IRotateInPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
