import React from 'react';
import { FlipInX } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFlipInXScreenPresentationProps } from '.';

export const FlipInXScreenPresentation: React.FC<IFlipInXScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FlipInX delayInMS={1000}>
          <Logo />
        </FlipInX>
      </Container>
    );
  };
