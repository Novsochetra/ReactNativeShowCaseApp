import React from 'react';
import { FadeOutBottomLeft } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeOutBottomLeftScreenPresentationProps } from '.';

export const FadeOutBottomLeftScreenPresentation: React.FC<IFadeOutBottomLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeOutBottomLeft delayInMS={1000}>
          <Logo />
        </FadeOutBottomLeft>
      </Container>
    );
  };
