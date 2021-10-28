import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IEasingPreset } from '../../core/animation/EasingPreset.interface';

export interface ISlideInLeftContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  startPostionX?: number;
  preset?: IEasingPreset;
}

export interface ISlideInLeftPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
