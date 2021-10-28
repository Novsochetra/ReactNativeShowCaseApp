import React from 'react';
import { BounceInUp } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBounceInUpScreenPresentationProps } from '.';

export const BounceInUpScreenPresentation: React.FC<IBounceInUpScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BounceInUp delayInMS={1000}>
          <Logo />
        </BounceInUp>
      </Container>
    );
  };
