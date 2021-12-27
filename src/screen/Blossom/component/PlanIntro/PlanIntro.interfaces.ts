import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';
export interface IPlanIntroContainerProps {
  description: string;
  icon: string;
  title: string;
  subTitle: string;
}

export interface IPlanIntroPresentationProps extends IPlanIntroContainerProps {
  descriptionVisible: boolean;
  animatedDescriptionStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
  animatedTypingDescriptionStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
  animatedOverlayBoxStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
