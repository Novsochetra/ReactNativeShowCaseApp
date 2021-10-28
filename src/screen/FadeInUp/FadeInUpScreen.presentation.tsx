import React from 'react';
import { FadeInUp } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeInUpScreenPresentationProps } from '.';

export const FadeInUpScreenPresentation: React.FC<IFadeInUpScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeInUp delayInMS={1000}>
          <Logo />
        </FadeInUp>
      </Container>
    );
  };
