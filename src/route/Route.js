import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import OtherScreen from '../screens/OtherScreen';
import NotificationScreen from '../screens/NotificationScreen';
import AccountScreen from '../screens/AccountScreen';
import PaymentScreen from '../components/PaymentScreen';
import {colors} from '../asset/colors/colors';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';


const AccountStack = createStackNavigator();
function AccountStackScreen() {
    return (
        <AccountStack.Navigator
            screenOptions={({ headerStyle: { backgroundColor: colors.tabBarColor, } })}>
            <AccountStack.Screen name="Tài khoản" component={AccountScreen}/>
        </AccountStack.Navigator>
    );
}
const HomeStack = createStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator
            screenOptions={({ headerStyle: { backgroundColor: colors.tabBarColor, } })}>
            <HomeStack.Screen name="Home" component={HomeScreen}
                              options={{
                                  title: 'Thực đơn',
                                  headerLeft: () => (
                                      <TouchableOpacity>
                                          <Ionicons name='menu-outline' size={30}/>
                                      </TouchableOpacity>
                                  ),
                                  headerRight: () => (
                                      <TouchableOpacity>
                                          <MaterialCommunityIcons name='shield-account' size={30}/>
                                      </TouchableOpacity>
                                  ),
                              }}/>
            <HomeStack.Screen name='Payment' component={PaymentScreen}/>
            <HomeStack.Screen name='Tài khoản' component={AccountStackScreen}/>
        </HomeStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
export default function Route() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: '#fa8072',
                    style:{
                        backgroundColor:colors.tabBarColor
                    }
                }}
           >
                <Tab.Screen name="Menu" component={HomeStackScreen}
                            options={{
                                title: 'Thực đơn',
                                tabBarIcon: ({color}) => <FontAwesome name='home' color={color} size={30}/>,
                                tabBarBadge: 3,


                            }}/>
                <Tab.Screen name="Restaurant" component={OtherScreen}
                            options={{
                                tabBarIcon: ({color}) => <MaterialCommunityIcons name='silverware-fork-knife'
                                                                                 color={color} size={30}/>,
                            }}/>
                <Tab.Screen name="Notification" component={NotificationScreen}
                            options={{
                                tabBarIcon: ({color}) => <Ionicons name='notifications' color={color} size={30}/>,
                            }}/>
                <Tab.Screen name="Account" component={AccountStackScreen}
                            options={{
                                title:'Tài khoản',
                                tabBarIcon: ({color}) => <MaterialCommunityIcons name='account' color={color}
                                                                                 size={30}/>,
                            }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
