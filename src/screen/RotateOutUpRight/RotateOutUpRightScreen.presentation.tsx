import React from 'react';
import { RotateOutUpRight } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IRotateOutUpRightScreenPresentationProps } from '.';

export const RotateOutUpRightScreenPresentation: React.FC<IRotateOutUpRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <RotateOutUpRight delayInMS={1000}>
          <Logo />
        </RotateOutUpRight>
      </Container>
    );
  };
