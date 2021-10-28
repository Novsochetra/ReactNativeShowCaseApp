import Reanimated from 'react-native-reanimated';
import { IEasingPreset } from '../../core/animation/EasingPreset.interface';
import { ViewStyle } from 'react-native';

export interface IFadeInUpContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  startPostionY?: number;
  preset: IEasingPreset;
}

export interface IFadeInUpPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
