import { ImageSourcePropType } from 'react-native';

export interface IIngredientContainerProps {
  icon: ImageSourcePropType;
  label: string;
  status: string;
}

export interface IIngredientPresentationProps
  extends IIngredientContainerProps {}
