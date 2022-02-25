import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProgressBar } from './ProgressBar';

interface INormalAcountCardProps {
  title: string;
  amount: string;
  icon: string;
  percentage: number;
}

export const NormalAcountCard: React.FC<INormalAcountCardProps> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Text style={styles.icon} allowFontScaling={false} numberOfLines={1}>
          {props.icon}
        </Text>
      </View>

      <View style={styles.contentWrapper}>
        <ProgressBar value={props.percentage} />
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
    backgroundColor: '#030303',
    padding: 16,
    borderRadius: 16,
  },

  iconWrapper: {
    marginBottom: 16,
  },

  icon: {
    fontSize: 24,
  },

  contentWrapper: {},

  amount: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '600',
    marginTop: 8,
  },

  title: {
    color: '#58585A',
    fontWeight: '700',
  },
});
