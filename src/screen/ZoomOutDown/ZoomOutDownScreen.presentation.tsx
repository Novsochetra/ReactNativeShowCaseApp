import React from 'react';
import { ZoomOutDown } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IZoomOutDownScreenPresentationProps } from '.';

export const ZoomOutDownScreenPresentation: React.FC<IZoomOutDownScreenPresentationProps> =
  () => {
    return (
      <Container>
        <ZoomOutDown delayInMS={1000}>
          <Logo />
        </ZoomOutDown>
      </Container>
    );
  };
