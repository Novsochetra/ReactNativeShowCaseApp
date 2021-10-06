import React from 'react';
import { ZoomOutLeft } from 'react-native-animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IZoomOutLeftScreenPresentationProps } from '.';

export const ZoomOutLeftScreenPresentation: React.FC<IZoomOutLeftScreenPresentationProps> =
  () => {
    return (
      <Container>
        <ZoomOutLeft delayInMS={1000}>
          <Logo />
        </ZoomOutLeft>
      </Container>
    );
  };
