import React, { Component } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import { SafeAreaView, View } from 'react-native';
import Dashboard from '../Screens/InnerStack/Dashboard';
import Cultures from '../Screens/InnerStack/Cultures';
import CulturesDetails from '../Screens/InnerStack/Cultures/CulturesDetails';
import ComposersDetails from '../Screens/InnerStack/Composers/ComposersDetails';
import Composers from '../Screens/InnerStack/Composers';
import ContactUs from '../Screens/InnerStack/ContactUs';
import AboutUs from '../Screens/InnerStack/AboutUs';
import ChangePassword from '../Screens/InnerStack/ChangePassword';
import Home from '../Screens/InnerStack/Home';
import Search from '../Screens/InnerStack/Search';
import Comments from '../Screens/InnerStack/Comments';
import UserProfile from '../Screens/InnerStack/UserProfile';
import AddPost from '../Screens/InnerStack/AddPost';
import UserPosts from '../Screens/InnerStack/UserPosts';
import ResetPassword from '../Screens/InnerStack/ChangePassword/ResetPassword';
import Settings from '../Screens/InnerStack/Settings';
import Share from '../Screens/InnerStack/Share';
import Chat from '../Screens/InnerStack/Chat';
import Messages from '../Screens/InnerStack/Messages';
import BlockedUsers from '../Screens/InnerStack/BlockedUsers';
import MyPosts from '../Screens/InnerStack/MyPosts';
import SavedPosts from '../Screens/InnerStack/SavedPosts';
import AppWebView from '../Components/AppWebView';
import Login from '../Screens/OuterStack/Login';
import { ScreenNames } from '../Actions/types';
import { ColorConstants } from '../Shared/BaseConstants';

const Stack = createStackNavigator();

const InnerStack = () => (
    <Stack.Navigator initialRouteName={ScreenNames.DASHBOARD}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNames.DASHBOARD} component={Dashboard} />
        <Stack.Screen name={ScreenNames.CULTURES} component={Cultures} />
        <Stack.Screen name={ScreenNames.CULTURES_Details} component={CulturesDetails} />
        <Stack.Screen name={ScreenNames.COMPOSERS} component={Composers} />
        <Stack.Screen name={ScreenNames.COMPOSERS_Details} component={ComposersDetails} />
        <Stack.Screen name={ScreenNames.CONTACT_US} component={ContactUs} />
        <Stack.Screen name={ScreenNames.ABOUT_US} component={AboutUs} />
        <Stack.Screen name={ScreenNames.CHANGE_PASSWORD} component={ChangePassword} />
        <Stack.Screen name={ScreenNames.RESET_PASSWORD} component={ResetPassword} />
        <Stack.Screen name={ScreenNames.SETTINGS} component={Settings} />
        <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
        <Stack.Screen name={ScreenNames.HOME} component={Home} />
        <Stack.Screen name={ScreenNames.SEARCH} component={Search} />
        <Stack.Screen name={ScreenNames.COMMENTS} component={Comments} />
        <Stack.Screen name={ScreenNames.USERPROFILE} component={UserProfile} />
        <Stack.Screen name={ScreenNames.USERPOSTS} component={UserPosts} />
        <Stack.Screen name={ScreenNames.ADDPOST} component={AddPost} />
        <Stack.Screen name={ScreenNames.SHARE} component={Share} />
        <Stack.Screen name={ScreenNames.MESSAGES} component={Messages} />
        <Stack.Screen name={ScreenNames.CHAT} component={Chat} />
        <Stack.Screen name={ScreenNames.BLOCKEDUSERS} component={BlockedUsers} />
        <Stack.Screen name={ScreenNames.MYPOSTS} component={MyPosts} />
        <Stack.Screen name={ScreenNames.SAVED_POSTS} component={SavedPosts} />
        <Stack.Screen name={ScreenNames.WebView} component={AppWebView} />

    </Stack.Navigator>
);

class Inner_Navigator extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 0, backgroundColor: ColorConstants.HEADER_COLOR }}>
                </SafeAreaView>
                <InnerStack />
                <SafeAreaView style={{ flex: 0, backgroundColor: ColorConstants.WHITE }}></SafeAreaView>
            </View>

        );
    }
};

function mapStateToProps(state) {
    let { userdata } = state
    return {
        userdata
    }

}

export default connect(mapStateToProps)(Inner_Navigator);