import React from 'react';
import { JackInTheBox } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IJackInTheBoxScreenPresentationProps } from '.';

export const JackInTheBoxScreenPresentation: React.FC<IJackInTheBoxScreenPresentationProps> =
  () => {
    return (
      <Container>
        <JackInTheBox delayInMS={1000}>
          <Logo />
        </JackInTheBox>
      </Container>
    );
  };
