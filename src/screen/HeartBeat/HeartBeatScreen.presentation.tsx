import React from 'react';
import { HeartBeat } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IHeartBeatScreenPresentationProps } from '.';

export const HeartBeatScreenPresentation: React.FC<IHeartBeatScreenPresentationProps> =
  () => {
    return (
      <Container>
        <HeartBeat delayInMS={1000}>
          <Logo />
        </HeartBeat>
      </Container>
    );
  };
