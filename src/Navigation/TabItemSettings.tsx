/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../Navigation/Routes';

import SettingsScreen from '../screens/SettingsScreen';
import SettingsDetails from '../screens/SettingsDetails';

const SettingsStack = createNativeStackNavigator<RootStackParamList>();

export default function TabItemSettings() {
  return (
    <SettingsStack.Navigator initialRouteName="Settings">
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen
        name="SettingsDetails"
        component={SettingsDetails}
      />
    </SettingsStack.Navigator>
  );
}
