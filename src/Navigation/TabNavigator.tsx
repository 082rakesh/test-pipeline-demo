import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import TabItemHome from './TabItemHome';
import TabItemSettings from './TabItemSettings';

const Tab = createBottomTabNavigator();

const TabNavigator: FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={TabItemHome} />
      <Tab.Screen name="Settings" component={TabItemSettings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
