import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IEasingPreset } from '../../core/animation/EasingPreset.interface';

export interface IRollInContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  startPostionX?: number;
  preset: IEasingPreset;
}

export interface IRollInPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
