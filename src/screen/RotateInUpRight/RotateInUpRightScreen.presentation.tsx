import React from 'react';
import { RotateInUpRight } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { IRotateInUpRightScreenPresentationProps } from '.';
import { Logo } from '@component/Logo';

export const RotateInUpRightScreenPresentation: React.FC<IRotateInUpRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <RotateInUpRight delayInMS={1000}>
          <Logo />
        </RotateInUpRight>
      </Container>
    );
  };
