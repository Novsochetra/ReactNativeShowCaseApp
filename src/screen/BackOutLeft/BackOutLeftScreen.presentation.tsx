import React from 'react';
import { BackOutLeft } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBackOutLeftScreenPresentationProps } from '.';

export const BackOutLeftScreenPresentation: React.FC<IBackOutLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BackOutLeft delayInMS={1000}>
          <Logo />
        </BackOutLeft>
      </Container>
    );
  };
