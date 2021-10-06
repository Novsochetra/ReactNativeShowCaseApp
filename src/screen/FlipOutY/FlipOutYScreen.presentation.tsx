import React from 'react';
import { FlipOutY } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { IFlipOutYScreenPresentationProps } from '.';
import { Logo } from '@component/Logo';

export const FlipOutYScreenPresentation: React.FC<IFlipOutYScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FlipOutY delayInMS={1000}>
          <Logo />
        </FlipOutY>
      </Container>
    );
  };
