import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/HomeScreen';
import OtherScreen from '../components/OtherScreen';
import NotificationScreen from '../components/NotificationScreen';
import SettingScreen from '../components/SettingScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen}
                              options={{
                                  title: 'Menu',
                                  headerLeft: () => (
                                      <TouchableOpacity>
                                          <Ionicons name='menu-outline' size={30}/>
                                      </TouchableOpacity>
                                  ),
                                 headerRight:()=>(
                                     <TouchableOpacity>
                                         <MaterialCommunityIcons name='shield-account' size={30}/>
                                     </TouchableOpacity>
                                 )
                              }}/>
        </HomeStack.Navigator>
    );
}

export default function Route() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: 'red',
                    inactiveTintColor: '#dcdcdc',
                }}>
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
                <Tab.Screen name="Setting" component={SettingScreen}
                            options={{
                                tabBarIcon: ({color}) => <FontAwesome name='gear' color={color} size={30}/>,
                            }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
