import React from 'react';
import { Flip } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFlipScreenPresentationProps } from '.';

export const FlipScreenPresentation: React.FC<IFlipScreenPresentationProps> =
  () => {
    return (
      <Container>
        <Flip delayInMS={1000}>
          <Logo />
        </Flip>
      </Container>
    );
  };
