import React from 'react';
import { Dimensions, Text, View, StyleSheet, Image } from 'react-native';
import { ISellRecommendationPresentationProps, Constant } from './';

export const SellRecommendationPresentation: React.FC<ISellRecommendationPresentationProps> =
  () => {
    return (
      <View style={styles.container}>
        <View style={styles.sellRecommendationWrapper}>
          <Text style={styles.sellRecommendationTitle}>
            Sell Recommendation
          </Text>
        </View>

        <View style={styles.productImageWrapper}>
          <ProductImage url={Constant.thumbnails[0]} />
          <ProductImage url={Constant.thumbnails[1]} />
          <ProductImage url={Constant.thumbnails[2]} />
          <ProductImage url={Constant.thumbnails[3]} />
        </View>
      </View>
    );
  };

const ProductImage = ({ url }: { url: string }) => {
  return <Image source={{ uri: url }} style={styles.productImage} />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: 'white',
    paddingVertical: 8,
  },

  sellRecommendationWrapper: {
    paddingHorizontal: 16,
  },

  sellRecommendationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  productImageWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },

  productImage: {
    width: Dimensions.get('window').width / 2 - 24,
    height: Dimensions.get('window').width / 2 - 8,
    margin: 8,
    borderRadius: 8,
  },
});
