import React from 'react';
import { FadeInDown } from '@core/lib/animated-css';
import { Logo } from '@component/Logo';
import { IFadeInDownScreenPresentationProps } from '.';
import { Container } from '@component/container/Container';

export const FadeInDownScreenPresentation: React.FC<IFadeInDownScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeInDown delayInMS={1000}>
          <Logo />
        </FadeInDown>
      </Container>
    );
  };
