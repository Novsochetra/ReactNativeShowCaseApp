import React from 'react';
import { IIngredientContainerProps, IngredientPresentation } from '.';

export const Ingredient: React.FC<IIngredientContainerProps> = (props) => {
  return <IngredientPresentation {...props} />;
};
