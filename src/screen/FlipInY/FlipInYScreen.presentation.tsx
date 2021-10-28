import React from 'react';
import { FlipInY } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFlipInYScreenPresentationProps } from '.';

export const FlipInYScreenPresentation: React.FC<IFlipInYScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FlipInY delayInMS={1000}>
          <Logo />
        </FlipInY>
      </Container>
    );
  };
