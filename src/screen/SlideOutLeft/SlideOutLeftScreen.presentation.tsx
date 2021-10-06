import React from 'react';
import { SlideOutLeft } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { ISlideOutLeftScreenPresentationProps } from '.';

export const SlideOutLeftScreenPresentation: React.FC<ISlideOutLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <SlideOutLeft delayInMS={1000}>
          <Logo />
        </SlideOutLeft>
      </Container>
    );
  };
