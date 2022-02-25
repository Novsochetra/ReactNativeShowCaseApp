import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface IMainAccountCardProps {
  title: string;
  amount: string;
  icon: string;
}

export const MainAccountCard: React.FC<IMainAccountCardProps> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Text style={styles.icon} allowFontScaling={false} numberOfLines={1}>
          {props.icon}
        </Text>
      </View>

      <View>
        <Text style={styles.amount} allowFontScaling={false} numberOfLines={1}>
          {props.amount}
        </Text>
        <Text style={styles.title} allowFontScaling={false} numberOfLines={1}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9D9CA3',
    padding: 16,
    borderRadius: 16,
    paddingRight: 40,
  },

  iconWrapper: {
    marginBottom: 32,
  },

  icon: {
    fontSize: 24,
  },

  amount: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  title: {
    color: '#EAE9EE',
    fontWeight: '700',
  },
});
