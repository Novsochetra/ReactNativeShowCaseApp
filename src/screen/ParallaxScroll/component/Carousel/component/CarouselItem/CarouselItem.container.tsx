import React from 'react';
import { ICarouselItemContainerProps, CarouselItemPresentation } from '.';

export const CarouselItem: React.FC<ICarouselItemContainerProps> = (props) => {
  return <CarouselItemPresentation {...props} />;
};
