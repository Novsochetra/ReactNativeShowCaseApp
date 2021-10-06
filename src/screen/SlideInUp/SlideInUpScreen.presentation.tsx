import React from 'react';
import { SlideInUp } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { ISlideInUpScreenPresentationProps } from '.';

export const SlideInUpScreenPresentation: React.FC<ISlideInUpScreenPresentationProps> =
  () => {
    return (
      <Container>
        <SlideInUp delayInMS={1000}>
          <Logo />
        </SlideInUp>
      </Container>
    );
  };
