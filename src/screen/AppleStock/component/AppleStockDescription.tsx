import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const AppleStockDescription = ({
  label,
  icon,
  description,
}: {
  label: string;
  icon: any;
  description: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={icon} style={styles.icon} />
      </View>
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flexDirection: 'row',
  },

  iconWrapper: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  icon: {
    width: 40,
    height: 60,
    resizeMode: 'contain',
  },

  text: {
    fontSize: 16,
    letterSpacing: 0.15,
    color: 'lightgray',
  },

  labelWrapper: {
    padding: 4,
    flex: 1,
  },

  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
});
