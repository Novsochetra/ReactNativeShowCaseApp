import React from 'react';
import { FadeIn } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeInScreenPresentationProps } from '.';

export const FadeInScreenPresentation: React.FC<IFadeInScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeIn delayInMS={1000}>
          <Logo />
        </FadeIn>
      </Container>
    );
  };
