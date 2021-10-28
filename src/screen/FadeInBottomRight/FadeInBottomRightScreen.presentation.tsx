import React from 'react';
import { FadeInBottomRight } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeInBottomRightScreenPresentationProps } from '.';

export const FadeInBottomRightScreenPresentation: React.FC<IFadeInBottomRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeInBottomRight delayInMS={1000}>
          <Logo />
        </FadeInBottomRight>
      </Container>
    );
  };
