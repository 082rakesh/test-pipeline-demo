import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import colors from '../utils/colors';
import {Routes} from '../Navigation/Routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation/types';
// import {StackNavigationProp} from '@react-navigation/stack';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: FC<HomeScreenProps> = props => {
  const buttonAction = () => {
    console.log('button pressed');
    props.navigation.navigate('HomeDetails');
    // props.navigation.push('HomeDetails');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerStyle}>Top View</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={buttonAction}>
          <Text>ClickMe</Text>
        </TouchableOpacity>
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
  buttonStyle: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
