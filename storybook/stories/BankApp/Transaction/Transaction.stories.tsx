import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Transaction } from './Transaction';
import CenterView from '../../CenterView';

storiesOf('BankApp/Transaction/', module)
  .addDecorator(withKnobs)
  .add('Transaction', () => {
    return (
      <CenterView>
        <Transaction
          title={text('Title', 'AirBnb')}
          subTitle={text('Sub Title', 'Housing')}
          // amount="-$3.22"
          amount={text('Amount', '-$3.22')}
          thumbnail={{
            uri: text(
              'Image URL',
              'https://i.picsum.photos/id/904/100/100.jpg?hmac=Qxe6QmbMqBa1MkCbQzspJdO1YIlyvMDAL1S9CDe_Svg',
            ),
          }}
        />
      </CenterView>
    );
  });
