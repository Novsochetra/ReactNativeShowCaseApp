import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IEasingPreset } from '../../core/animation/EasingPreset.interface';

export interface ISlideOutDownContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  startPostionY?: number;
  preset: IEasingPreset;
}

export interface ISlideOutDownPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
