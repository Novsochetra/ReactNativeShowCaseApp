import React from 'react';
import { FadeInLeft } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeInLeftScreenPresentationProps } from '.';

export const FadeInLeftScreenPresentation: React.FC<IFadeInLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeInLeft delayInMS={1000}>
          <Logo />
        </FadeInLeft>
      </Container>
    );
  };
