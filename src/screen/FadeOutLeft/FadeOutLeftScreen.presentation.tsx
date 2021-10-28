import React from 'react';
import { FadeOutLeft } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeOutLeftScreenPresentationProps } from '.';

export const FadeOutLeftScreenPresentation: React.FC<IFadeOutLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeOutLeft delayInMS={1000}>
          <Logo />
        </FadeOutLeft>
      </Container>
    );
  };
