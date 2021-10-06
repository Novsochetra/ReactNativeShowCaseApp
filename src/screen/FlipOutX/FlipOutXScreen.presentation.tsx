import React from 'react';
import { FlipOutX } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFlipOutXScreenPresentationProps } from '.';

export const FlipOutXScreenPresentation: React.FC<IFlipOutXScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FlipOutX delayInMS={1000}>
          <Logo />
        </FlipOutX>
      </Container>
    );
  };
