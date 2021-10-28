import React from 'react';
import { ShakeY } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IShakeYScreenPresentationProps } from '.';

export const ShakeYScreenPresentation: React.FC<IShakeYScreenPresentationProps> =
  () => {
    return (
      <Container>
        <ShakeY delayInMS={1000}>
          <Logo />
        </ShakeY>
      </Container>
    );
  };
