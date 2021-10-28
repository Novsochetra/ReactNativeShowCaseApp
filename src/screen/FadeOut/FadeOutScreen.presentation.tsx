import React from 'react';
import { FadeOut } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeOutScreenPresentationProps } from '.';

export const FadeOutScreenPresentation: React.FC<IFadeOutScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeOut delayInMS={1000}>
          <Logo />
        </FadeOut>
      </Container>
    );
  };
