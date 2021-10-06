import React from 'react';
import { FadeInTopLeft } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeInTopLeftScreenPresentationProps } from '.';

export const FadeInTopLeftScreenPresentation: React.FC<IFadeInTopLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeInTopLeft delayInMS={1000}>
          <Logo />
        </FadeInTopLeft>
      </Container>
    );
  };
