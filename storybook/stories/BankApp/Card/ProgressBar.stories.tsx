import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { withKnobs, number, color } from '@storybook/addon-knobs';

import CenterView from '../../CenterView';
import { ProgressBar } from './ProgressBar';

storiesOf('BankApp/Card/', module)
  .addDecorator(withKnobs)
  .add('ProgressBar', () => {
    return (
      <CenterView>
        <ProgressBar
          value={number('value', 90)}
          barColor={color('barColor', '#FFFFFF')}
          backgroundColor={color('backgroundColor', '#9D9CA3')}
        />
      </CenterView>
    );
  });
