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
import SignInScreen from '../screens/LoginScreen/signin/SignInScreen';
import SignUpScreen from '../screens/LoginScreen/signup/SignUpScreen';
import Loading from './loading';


const AccountStack = createStackNavigator();

function AccountStackScreen() {
    return (
        <AccountStack.Navigator
            screenOptions={({headerStyle: {backgroundColor: colors.tabBarColor}})}>
            <AccountStack.Screen name="Tài khoản" component={AccountScreen}/>
        </AccountStack.Navigator>
    );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
            screenOptions={({headerStyle: {backgroundColor: colors.tabBarColor}})}>
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

function TabNavigator() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: '#fa8072',
                style: {
                    backgroundColor: colors.tabBarColor,
                },
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
                            title: 'Tài khoản',
                            tabBarIcon: ({color}) => <MaterialCommunityIcons name='account' color={color}
                                                                             size={30}/>,
                        }}/>
        </Tab.Navigator>
    );
}

const LoginNavigator = createStackNavigator();

function LoginNavigatorStack() {
    return (
        <LoginNavigator.Navigator
             headerMode={false}>
            <LoginNavigator.Screen name={'signIn'} component={SignInScreen}/>
            <LoginNavigator.Screen name={'SignUp'} component={SignUpScreen}/>
        </LoginNavigator.Navigator>
    );
}

const LoadingNavigator = createStackNavigator();

function LoadingStack() {
    return (
        <LoadingNavigator.Navigator>
            <LoadingNavigator.Screen name={'Loading'} component={Loading}/>
        </LoadingNavigator.Navigator>
    );
}


const RouteNavigator = createStackNavigator();
export default function Route() {
    return (
        <NavigationContainer>
            <RouteNavigator.Navigator
                initialRouteName="loading">
                <RouteNavigator.Screen name={'loading'} component={LoadingStack}/>
                <RouteNavigator.Screen name={'Login'} component={LoginNavigatorStack}
                                       options={{headerShown: false}}/>
                <RouteNavigator.Screen name={'Tab'} component={TabNavigator}
                                       options={{headerShown: false}}/>
            </RouteNavigator.Navigator>
        </NavigationContainer>
    );
}
