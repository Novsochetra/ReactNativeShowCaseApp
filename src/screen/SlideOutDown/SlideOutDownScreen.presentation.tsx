import React from 'react';
import { SlideOutDown } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { ISlideOutDownScreenPresentationProps } from '.';

export const SlideOutDownScreenPresentation: React.FC<ISlideOutDownScreenPresentationProps> =
  () => {
    return (
      <Container>
        <SlideOutDown delayInMS={1000}>
          <Logo />
        </SlideOutDown>
      </Container>
    );
  };
