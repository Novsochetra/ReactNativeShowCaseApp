import React from 'react';
import { RotateOut } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IRotateOutScreenPresentationProps } from '.';

export const RotateOutScreenPresentation: React.FC<IRotateOutScreenPresentationProps> =
  () => {
    return (
      <Container>
        <RotateOut delayInMS={1000}>
          <Logo />
        </RotateOut>
      </Container>
    );
  };
