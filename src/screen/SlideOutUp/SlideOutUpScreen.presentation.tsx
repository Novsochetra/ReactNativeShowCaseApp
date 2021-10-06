import React from 'react';
import { SlideOutUp } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { ISlideOutUpScreenPresentationProps } from '.';

export const SlideOutUpScreenPresentation: React.FC<ISlideOutUpScreenPresentationProps> =
  () => {
    return (
      <Container>
        <SlideOutUp delayInMS={1000}>
          <Logo />
        </SlideOutUp>
      </Container>
    );
  };
