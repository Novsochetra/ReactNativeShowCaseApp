import React from 'react';
import { BounceInRight } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IBounceInRightScreenPresentationProps } from '.';

export const BounceInRightScreenPresentation: React.FC<IBounceInRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <BounceInRight delayInMS={1000}>
          <Logo />
        </BounceInRight>
      </Container>
    );
  };
