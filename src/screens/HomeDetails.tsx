import React, {FC, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../utils/colors';

const HomeDetails: FC = () => {
  const getUser = () => {
    const userUrl = 'https://gorest.co.in/public/v2/users';
    fetch(userUrl)
      .then(response => response.json())
      .then(json => {
        // console.log('user:', json);
        return json.user;
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home details screeen</Text>
      <Text>User details</Text>
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

export default HomeDetails;
