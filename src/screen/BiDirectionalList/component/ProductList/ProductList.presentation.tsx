import React, { forwardRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SectionListProps,
  SectionList,
} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IProductListPresentationProps } from '.';
import { ProductItem } from '../ProductItem';
import { IProduct } from '../Tabs/Tabs.interfaces';

export const AnimatedSectionList =
  Reanimated.createAnimatedComponent<SectionListProps<any, any>>(SectionList);

export const ProductListPresentation = forwardRef<
  any,
  IProductListPresentationProps
>((props, ref) => {
  return (
    <AnimatedSectionList
      ref={ref}
      onScroll={props.onScroll}
      sections={props.data}
      keyExtractor={(item: IProduct, index) => String(item.title + index)}
      renderItem={({ item }: { item: IProduct; index: number }) => (
        <ProductItem {...item} />
      )}
      stickySectionHeadersEnabled={false}
      SectionSeparatorComponent={Seperator}
      ItemSeparatorComponent={Seperator}
      renderSectionHeader={({ section: { title } }) => <Header title={title} />}
    />
  );
});

const Seperator = () => <View style={{}} />;

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
    </HeaderContainer>
  );
};

const HeaderContainer: React.FC<{}> = ({ children }) => {
  return <View style={styles.headerContainer}>{children}</View>;
};

const HeaderText: React.FC<{}> = ({ children }) => {
  return <Text style={styles.headerText}>{children}</Text>;
};

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    backgroundColor: 'lightgray',
  },

  headerContainer: {
    height: 100,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },

  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
