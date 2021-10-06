import React from 'react';
import { ZoomOutUp } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IZoomOutUpScreenPresentationProps } from '.';

export const ZoomOutUpScreenPresentation: React.FC<IZoomOutUpScreenPresentationProps> =
  () => {
    return (
      <Container>
        <ZoomOutUp delayInMS={1000}>
          <Logo />
        </ZoomOutUp>
      </Container>
    );
  };
