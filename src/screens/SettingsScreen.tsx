import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import colors from '../utils/colors';

const UsersScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Second screen</Text>
    </View>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Red,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
