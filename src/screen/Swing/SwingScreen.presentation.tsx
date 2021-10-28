import React from 'react';
import { Swing } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { ISwingScreenPresentationProps } from '.';

export const SwingScreenPresentation: React.FC<ISwingScreenPresentationProps> =
  () => {
    return (
      <Container>
        <Swing delayInMS={1000}>
          <Logo />
        </Swing>
      </Container>
    );
  };
