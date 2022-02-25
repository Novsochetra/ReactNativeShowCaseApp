import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { withKnobs, text } from '@storybook/addon-knobs';

import { MainAccountCard } from './MainAccountCard';
import CenterView from '../../CenterView';

storiesOf('BankApp/Card/', module)
  .addDecorator(withKnobs)
  .add('MainAccount', () => {
    return (
      <CenterView>
        <MainAccountCard
          title={text('title', 'Main Account')}
          amount={text('amount', '$87,760')}
          icon={text('icon', '🏀')}
        />
      </CenterView>
    );
  });
