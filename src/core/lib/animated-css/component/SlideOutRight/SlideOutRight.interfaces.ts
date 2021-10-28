import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IEasingPreset } from '../../core/animation/EasingPreset.interface';

export interface ISlideOutRightContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  startPostionX?: number;
  preset: IEasingPreset;
}

export interface ISlideOutRightPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
