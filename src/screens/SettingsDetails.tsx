import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../utils/colors';

const UserDetails: FC = () => {
  return (
    <View style={styles.container}>
      <Text>User details screeen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Red,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserDetails;
