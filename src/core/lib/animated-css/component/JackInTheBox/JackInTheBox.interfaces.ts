import { IEasingPreset } from '../../core/animation/EasingPreset.interface';
import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IJackInTheBoxContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  preset?: IEasingPreset;
}

export interface IJackInTheBoxPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
