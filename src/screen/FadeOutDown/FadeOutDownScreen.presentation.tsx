import React from 'react';
import { FadeOutDown } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeOutDownScreenPresentationProps } from '.';

export const FadeOutDownScreenPresentation: React.FC<IFadeOutDownScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeOutDown delayInMS={1000}>
          <Logo />
        </FadeOutDown>
      </Container>
    );
  };
