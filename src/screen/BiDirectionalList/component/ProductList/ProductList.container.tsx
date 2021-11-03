import React, { forwardRef } from 'react';
import { IProductListContainerProps, ProductListPresentation } from '.';

export const ProductList: React.FC<IProductListContainerProps> = forwardRef(
  (props, ref) => {
    return <ProductListPresentation {...props} ref={ref} />;
  },
);
