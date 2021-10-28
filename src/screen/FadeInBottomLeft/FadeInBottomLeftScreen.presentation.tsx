import React from 'react';
import { FadeInBottomLeft } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeInBottomLeftScreenPresentationProps } from '.';

export const FadeInBottomLeftScreenPresentation: React.FC<IFadeInBottomLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeInBottomLeft delayInMS={1000}>
          <Logo />
        </FadeInBottomLeft>
      </Container>
    );
  };
