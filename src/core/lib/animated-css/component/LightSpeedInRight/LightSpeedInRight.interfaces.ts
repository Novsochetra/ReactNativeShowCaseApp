import { IEasingPreset } from '../../core/animation/EasingPreset.interface';
import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface ILightSpeedInRightContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  startPositionX?: number;
  preset?: IEasingPreset;
}

export interface ILightSpeedInRightPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
