import React from 'react';
import { FadeInRight } from '@core/lib/animated-css';
import { Container } from '@component/container/Container';
import { Logo } from '@component/Logo';
import { IFadeInRightScreenPresentationProps } from '.';

export const FadeInRightScreenPresentation: React.FC<IFadeInRightScreenPresentationProps> =
  () => {
    return (
      <Container>
        <FadeInRight delayInMS={1000}>
          <Logo />
        </FadeInRight>
      </Container>
    );
  };
