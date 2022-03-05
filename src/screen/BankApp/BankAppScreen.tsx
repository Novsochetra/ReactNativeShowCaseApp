import {
  NativeScrollEvent,
  SectionList,
  SectionListData,
  SectionListProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Reanimated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { ConverterIcon } from './component/ConverterIcon/ConverterIcon';
import { Transaction } from './component/Transaction/Transaction';
import SectionListHeader from './component/SectionListHeader';
import { HeaderTitle } from './component/HeaderTitle/HeaderTitle';

type ISectionListItem = {
  readonly title: string;
  readonly data: readonly string[];
};

const DATA: ReadonlyArray<ISectionListItem> = [
  {
    title: 'April',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'March',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'February',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'January',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
];

const AnimatedSectionList =
  Reanimated.createAnimatedComponent<SectionListProps<string>>(SectionList);

export const SECTION_ITEM_HEADER_HEIGHT = 80;

export const BankAppScreen = () => {
  const offsetY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event: NativeScrollEvent) => {
      offsetY.value = event.contentOffset.y;
    },
  });

  const renderSectionItem = () => {
    return (
      <Transaction
        title={'AirBnb'}
        subTitle={'Housing'}
        amount={'-$3.22'}
        thumbnail={{
          uri: 'https://i.picsum.photos/id/904/100/100.jpg?hmac=Qxe6QmbMqBa1MkCbQzspJdO1YIlyvMDAL1S9CDe_Svg',
        }}
      />
    );
  };

  const renderSectionListHeader = ({
    section: { title },
  }: {
    section: SectionListData<string>;
  }) => {
    return (
      <View style={styles.sectionListHeader}>
        <Text style={styles.sectionListHeaderTitle}>{title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <HeaderTitle offsetY={offsetY} />
      <ConverterIcon offsetY={offsetY} />
      <AnimatedSectionList
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => <SectionListHeader offsetY={offsetY} />}
        renderSectionHeader={renderSectionListHeader}
        onScroll={scrollHandler}
        stickySectionHeadersEnabled={true}
        sections={DATA}
        scrollEventThrottle={16}
        renderItem={renderSectionItem}
        contentContainerStyle={styles.container}
        directionalLockEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#030303',
  },

  container: {
    flexGrow: 1,
  },

  sectionListHeader: {
    height: SECTION_ITEM_HEADER_HEIGHT,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 16,
    justifyContent: 'center',
  },

  sectionListHeaderTitle: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
