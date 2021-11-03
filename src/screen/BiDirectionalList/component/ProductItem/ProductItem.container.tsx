import React from 'react';
import { IProductItemContainerProps, ProductItemPresentation } from '.';

export const ProductItem: React.FC<IProductItemContainerProps> = (props) => {
  return <ProductItemPresentation {...props} />;
};
