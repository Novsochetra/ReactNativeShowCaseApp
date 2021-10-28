import React from 'react';
import { SlideInLeft } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { ISlideInLeftScreenPresentationProps } from '.';

export const SlideInLeftScreenPresentation: React.FC<ISlideInLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <SlideInLeft delayInMS={1000}>
          <Logo />
        </SlideInLeft>
      </Container>
    );
  };
