import React from 'react';
import { ShakeX } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IShakeXScreenPresentationProps } from '.';

export const ShakeXScreenPresentation: React.FC<IShakeXScreenPresentationProps> =
  () => {
    return (
      <Container>
        <ShakeX delayInMS={1000}>
          <Logo />
        </ShakeX>
      </Container>
    );
  };
