import React from 'react';
import { FadeOutTopLeft } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeOutTopLeftScreenPresentationProps } from '.';

export const FadeOutTopLeftScreenPresentation: React.FC<IFadeOutTopLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeOutTopLeft delayInMS={1000}>
          <Logo />
        </FadeOutTopLeft>
      </Container>
    );
  };
