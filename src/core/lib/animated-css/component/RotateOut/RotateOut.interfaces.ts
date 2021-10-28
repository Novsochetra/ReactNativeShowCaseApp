import { IEasingPreset } from '../../core/animation/EasingPreset.interface';
import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IRotateOutContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  preset?: IEasingPreset;
}

export interface IRotateOutPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
