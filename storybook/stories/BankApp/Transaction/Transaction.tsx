import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

interface ITransactionProps {
  title: string;
  subTitle: string;
  thumbnail: ImageSourcePropType;
  amount: string;
}

export const Transaction: React.FC<ITransactionProps> = ({
  title,
  subTitle,
  thumbnail,
  amount,
}) => {
  return (
    <View style={styles.container}>
      <Profile source={thumbnail} />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>

      <Amount value={amount} />
    </View>
  );
};

const Profile: React.FC<{ source: ImageSourcePropType }> = React.memo(
  ({ source }) => {
    return (
      <View style={styles.profileWrapper}>
        <Image source={source} resizeMode="contain" style={styles.profile} />
      </View>
    );
  },
);

const Amount: React.FC<{ value: string }> = React.memo(({ value }) => {
  return (
    <View style={styles.amountWrapper}>
      <Text style={styles.amount}>{value}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#030303',
  },

  profileWrapper: {
    marginRight: 16,
  },

  profile: {
    width: 60,
    height: 60,
    borderRadius: 300,
  },

  content: { flex: 1, justifyContent: 'center' },

  title: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 4,
  },

  subTitle: {
    fontSize: 16,
    color: '#58585A',
    fontWeight: '700',
  },

  amountWrapper: {
    justifyContent: 'center',
  },

  amount: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
