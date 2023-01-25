/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import HomeDetails from '../screens/HomeDetails';
import {RootStackParamList} from '../Navigation/types';

const HomeStack = createNativeStackNavigator<RootStackParamList>();

export default function TabItemHome() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="HomeDetails" component={HomeDetails} />
    </HomeStack.Navigator>
  );
}
