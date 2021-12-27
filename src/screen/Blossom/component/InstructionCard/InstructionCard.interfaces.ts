import { LayoutChangeEvent, ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IInstructionCardContainerProps {
  title: string;
  description: string;
  rotateInRad?: number;
  delayAnimationInMS?: number;
}

export interface IInstructionCardPresentationProps
  extends Omit<
    IInstructionCardContainerProps,
    'rotateInRad' | 'delayAnimationInMS'
  > {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
  onLayout: (event: LayoutChangeEvent) => void;
}
