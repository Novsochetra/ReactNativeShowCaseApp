import React from 'react';
import { ZoomOut } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IZoomOutScreenPresentationProps } from '.';

export const ZoomOutScreenPresentation: React.FC<IZoomOutScreenPresentationProps> =
  () => {
    return (
      <Container>
        <ZoomOut delayInMS={1000}>
          <Logo />
        </ZoomOut>
      </Container>
    );
  };
