import React from 'react';
import { FadeOutUp } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeOutUpScreenPresentationProps } from '.';

export const FadeOutUpScreenPresentation: React.FC<IFadeOutUpScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeOutUp delayInMS={1000}>
          <Logo />
        </FadeOutUp>
      </Container>
    );
  };
