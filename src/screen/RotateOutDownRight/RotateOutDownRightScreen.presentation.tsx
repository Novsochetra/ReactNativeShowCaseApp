import React from 'react';
import { RotateOutDownRight } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IRotateOutDownRightScreenPresentationProps } from '.';

export const RotateOutDownRightScreenPresentation: React.FC<IRotateOutDownRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <RotateOutDownRight delayInMS={1000}>
          <Logo />
        </RotateOutDownRight>
      </Container>
    );
  };
