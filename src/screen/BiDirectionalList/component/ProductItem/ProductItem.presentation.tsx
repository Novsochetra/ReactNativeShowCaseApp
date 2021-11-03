import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { IProductItemPresentationProps } from '.';

export const ProductItemPresentation: React.FC<IProductItemPresentationProps> =
  (props) => {
    return (
      <ProductItemContainer>
        <ProductInfoContainer>
          <ProductName>{props.title}</ProductName>
          <Text>From {props.price}</Text>
        </ProductInfoContainer>

        <ProductImage source={{ uri: props.productURL }} />
      </ProductItemContainer>
    );
  };

const ProductItemContainer: React.FC<{}> = ({ children }) => {
  return <View style={styles.productContainer}>{children}</View>;
};

const ProductInfoContainer: React.FC<{}> = ({ children }) => {
  return <View style={styles.productInfoContainer}>{children}</View>;
};

const ProductName: React.FC<{}> = ({ children }) => {
  return <Text style={styles.productName}>{children}</Text>;
};

const ProductImage: React.FC<{ source: ImageSourcePropType }> = ({
  source,
}) => {
  return <Image source={source} style={styles.productImage} />;
};

const styles = StyleSheet.create({
  productContainer: {
    height: 100,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },

  productImage: {
    borderRadius: 12,
    height: '100%',
    aspectRatio: 280 / 300,
  },

  productInfoContainer: {
    flex: 1,
  },

  productName: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
