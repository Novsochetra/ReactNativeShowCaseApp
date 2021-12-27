/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@core/asset/style/theme';
import { IIngredientPresentationProps } from './';

export const IngredientPresentation: React.FC<IIngredientPresentationProps> = ({
  icon,
  label,
  status,
}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>

      <Status title={String(status).toUpperCase()} />
    </View>
  );
};

const Status = ({ title }: { title: string }) => {
  return (
    <TouchableOpacity style={styles.statusButton}>
      <Text style={styles.statusLabel}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',

    shadowColor: theme.shadowColor,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  icon: {
    tintColor: theme.textColor,
  },

  label: {
    marginLeft: 16,
    fontSize: 16,
    flex: 1,
    color: theme.textColor,
    fontWeight: 'bold',
  },

  statusButton: {
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: theme.primary,
  },

  statusLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
