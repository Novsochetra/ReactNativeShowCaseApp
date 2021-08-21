import { theme } from '@core/asset/style/theme';
import React from 'react';
import {
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ISomethingWentWrongProps } from './SomethingWentWrong.interface';

export const SomethingWentWrong: React.FC<ISomethingWentWrongProps> = ({
  onPress,
}) => {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Image source={require('./assets/warning.png')} />
        <View>
          <Text style={styles.oppText}>Oops, Something Went Wrong</Text>
          <Text style={styles.descriptionText}>
            The app ran into a problem and could not continue. We apologise for
            any inconvenience this has caused! Press the button below to go
            back.
          </Text>

          <Text style={styles.descriptionText}>
            Please contact us if this issue persists.
          </Text>

          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.goBackLabel}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: { flex: 1 },
  container: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  oppText: {
    fontSize: 32,
  },

  descriptionText: {
    marginVertical: 10,
    lineHeight: 23,
    fontWeight: '500',
  },

  button: {
    backgroundColor: theme.primary,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
  },

  goBackLabel: { textAlign: 'center', color: 'white' },
});
