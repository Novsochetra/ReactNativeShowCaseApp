import { Container } from '@component/container/Container';
import React from 'react';
import { BounceOutLeft } from '@core/lib/animated-css';
import { Logo } from '@component/Logo';
import { IBounceOutLeftScreenPresentationProps } from '.';

export const BounceOutLeftScreenPresentation: React.FC<IBounceOutLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BounceOutLeft delayInMS={1000}>
          <Logo />
        </BounceOutLeft>
      </Container>
    );
  };
