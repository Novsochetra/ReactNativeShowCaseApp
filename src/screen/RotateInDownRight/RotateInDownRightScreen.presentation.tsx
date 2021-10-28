import React from 'react';
import { RotateInDownRight } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IRotateInDownRightScreenPresentationProps } from '.';

export const RotateInDownRightScreenPresentation: React.FC<IRotateInDownRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <RotateInDownRight delayInMS={1000}>
          <Logo />
        </RotateInDownRight>
      </Container>
    );
  };
