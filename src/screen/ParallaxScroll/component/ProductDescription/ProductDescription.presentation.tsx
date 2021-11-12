import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IProductDescriptionPresentationProps } from './';

export const ProductDescriptionPresentation: React.FC<IProductDescriptionPresentationProps> =
  () => {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Controll Ball</Text>
        </View>

        <View>
          <Text style={styles.productDescriptionText}>
            The white grip camouflage ball is now available to pre-order. The
            ball will be in stock later in October / early November. You will be
            notified as soon as it's in stock and when it has been shipped out.
          </Text>

          <Text style={styles.productDescriptionText}>
            Please note that if your order includes more products they will be
            shipped out together with the pre-ordered product when it arrives in
            our warehouse. If you do want your other products earlier you will
            have to place a separate order.
          </Text>

          <Text style={styles.productDescriptionText}>
            The Grip camouflage ball is made out of rubber and has a good grip
            and soft touch. The bumpy texture will prevent the ball from
            slipping and will give you a perfect grip no matter the conditions.
            It's a normal weight ball molded to make it perfectly round.
            Practice your block tricks and get more friction!
          </Text>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  productDescriptionText: {
    marginVertical: 4,
  },
});
