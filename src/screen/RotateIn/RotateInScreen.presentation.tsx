import React from 'react';
import { RotateIn } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IRotateInScreenPresentationProps } from '.';

export const RotateInScreenPresentation: React.FC<IRotateInScreenPresentationProps> =
  () => {
    return (
      <Container>
        <RotateIn delayInMS={1000}>
          <Logo />
        </RotateIn>
      </Container>
    );
  };
