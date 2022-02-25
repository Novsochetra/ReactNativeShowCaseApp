import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import { NormalAcountCard } from './NormalAcountCard';
import CenterView from '../../CenterView';

storiesOf('BankApp/Card/', module)
  .addDecorator(withKnobs)
  .add('NormalAccountCard', () => {
    return (
      <CenterView>
        <NormalAcountCard
          title={text('title', 'Vocation')}
          amount={text('amount', '$4,302')}
          icon={text('icon', '🏡')}
          percentage={number('percentage', 50)}
        />
      </CenterView>
    );
  });
