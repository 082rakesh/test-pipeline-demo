import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import colors from './utils/colors';

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerStyle}>Top View</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.headerStyle}>Bottom View</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.Red,
  },
  topContainer: {
    flex: 1,
    backgroundColor: colors.green,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: colors.blue,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
