import React from 'react';
import { ZoomIn } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IZoomInScreenPresentationProps } from '.';

export const ZoomInScreenPresentation: React.FC<IZoomInScreenPresentationProps> =
  () => {
    return (
      <Container>
        <ZoomIn delayInMS={1000}>
          <Logo />
        </ZoomIn>
      </Container>
    );
  };
