import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IEasingPreset } from '../../core/animation/EasingPreset.interface';

export interface ISlideOutUpContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  startPostionY?: number;
  preset: IEasingPreset;
}

export interface ISlideOutUpPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
