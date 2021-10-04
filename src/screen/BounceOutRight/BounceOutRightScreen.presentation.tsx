import React from 'react';
import { BounceOutRight } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBounceOutRightScreenPresentationProps } from '.';

export const BounceOutRightScreenPresentation: React.FC<IBounceOutRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BounceOutRight delayInMS={1000}>
          <Logo />
        </BounceOutRight>
      </Container>
    );
  };
