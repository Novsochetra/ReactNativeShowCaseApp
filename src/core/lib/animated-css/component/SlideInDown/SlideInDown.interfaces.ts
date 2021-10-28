import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IEasingPreset } from '../../core/animation/EasingPreset.interface';

export interface ISlideInDownContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  startPostionY?: number;
  preset: IEasingPreset;
}

export interface ISlideInDownPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
